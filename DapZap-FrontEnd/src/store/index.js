import {createStore} from "vuex";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import dbFunctions from '@/db'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions'
import router from '@/router'


export default createStore({
    state: {
        hideConfigButton: false,
        isPinned: true,
        showConfig: false,
        isTransparent: "",
        isRTL: false,
        color: "",
        isNavFixed: false,
        isAbsolute: false,
        showNavs: true,
        showSidenav: true,
        showNavbar: true,
        showFooter: true,
        showMain: true,
        navbarFixed:
            "position-sticky blur shadow-blur left-auto top-1 z-index-sticky px-0 mx-4",
        absolute: "position-absolute px-4 mx-0 w-100 z-index-2",
        bootstrap,
    },
    mutations: {
        NEW_LOGIN(state, user) {
            dbFunctions.updateUsersProfile(user, {
                sessions: firebase.firestore.FieldValue.increment(1),
                lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
            })
                .then(() => {
                    dbFunctions.readUsersProfile(user.uid)
                        .then(() => {
                            router.push({path: 'dashboard'})
                        })
                })
        },
        GET_USER_DATA(state, user) {
            dbFunctions.readUsersProfile(user.uid)
                .then(profileData => {
                    state.user.profile = profileData
                    localStorage.setItem('user', JSON.stringify(state.user))
                })
        },
        SET_USER_DATA(state, user) {
            if (user) {
                state.user = {}
                state.user.photoURL = user.photoURL
                state.user.displayName = user.displayName
                state.user.email = user.email
                state.user.uid = user.uid
                state.user.isLoggedin = true
                state.user.profile = user.profile
                dbFunctions.readUsersProfile(user.uid)
                    .then(profileData => {
                        state.user.profile = profileData
                        localStorage.setItem('user', JSON.stringify(state.user))
                    })
            }
        },
        CLEAR_USER_DATA() {
            localStorage.removeItem('user')
            router.go('https://dapzap.com')
        },

        UPDATE_PROFILE(state, profile) {
            if (profile.file) {
                const storage = firebase.storage().ref()
                const storageRef = storage.child(`profilePictures/${state.user.uid}-${new Date().getTime()}.${profile.file.name.split('.').pop()}`)
                const task = storageRef.put(profile.file)

                // update progress bar
                task.on(
                    'state_changed',
                    snapshot => {
                        // Observe state change events such as progress, pause, and resume
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        console.log(`Upload is ${progress} % done`)
                        // eslint-disable-next-line default-case
                        switch (snapshot.state) {
                            case firebase.storage.TaskState.PAUSED:
                                console.log('Upload is paused')
                                break
                            case firebase.storage.TaskState.RUNNING:
                                console.log('Upload is running')
                                break
                            default:
                        }
                    },
                    error => {
                        console.log(error)
                    },
                    () => {
                        // Handle successful uploads on complete
                        task.snapshot.ref.getDownloadURL().then(downloadURL => {
                            console.log('File available at', downloadURL)

                            const user = firebase.auth().currentUser
                            user.updateProfile({
                                photoURL: downloadURL,
                                displayName: profile.name,
                            })
                                .then(() => {
                                    state.user = user
                                    dbFunctions.readUsersProfile(user.uid)
                                        .then(profileData => {
                                            state.user.profile = profileData
                                            localStorage.setItem('user', JSON.stringify(state.user))
                                            router.push('/dashboard')
                                        })
                                })
                                .catch(error => {
                                    console.log(error)
                                })
                        })
                    },
                )
            } else {
                const user = firebase.auth().currentUser
                let photo = state.user.photoURL
                if (profile.image) {
                    photo = profile.image
                }
                if (!photo) {
                    photo = `https://avatars.dicebear.com/api/bottts/${user.uid}.svg`
                }
                user.updateProfile({
                    displayName: profile.name,
                    photoURL: photo,
                })
                    .then(() => {
                        state.user = user
                        localStorage.setItem('user', JSON.stringify(user))
                        router.push('/dashboard')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        SAVE_RULE(state, dapzap) {
            if (dapzap.new) {
                dbFunctions.createDapZap(dapzap.id, {
                    created: firebase.firestore.FieldValue.increment(1),
                })
            } else {
                dbFunctions.updateDapZap(dapzap.id, {
                    created: firebase.firestore.FieldValue.increment(1),
                })
            }
        },
        toggleConfigurator(state) {
            state.showConfig = !state.showConfig;
        },
        navbarMinimize(state) {
            const sidenav_show = document.querySelector(".g-sidenav-show");
            if (sidenav_show.classList.contains("g-sidenav-hidden")) {
                sidenav_show.classList.remove("g-sidenav-hidden");
                sidenav_show.classList.add("g-sidenav-pinned");
                state.isPinned = true;
            } else {
                sidenav_show.classList.add("g-sidenav-hidden");
                sidenav_show.classList.remove("g-sidenav-pinned");
                state.isPinned = false;
            }
        },
        sidebarType(state, payload) {
            state.isTransparent = payload;
        },
        cardBackground(state, payload) {
            state.color = payload;
        },
        navbarFixed(state) {
            if (state.isNavFixed === false) {
                state.isNavFixed = true;
            } else {
                state.isNavFixed = false;
            }
        },
        toggleEveryDisplay(state) {
            state.showNavbar = !state.showNavbar;
            state.showSidenav = !state.showSidenav;
            state.showFooter = !state.showFooter;
        },
        toggleHideConfig(state) {
            state.hideConfigButton = !state.hideConfigButton;
        },
    },
    actions: {
        toggleSidebarColor({commit}, payload) {
            commit("sidebarType", payload);
        },
        setCardBackground({commit}, payload) {
            commit("cardBackground", payload);
        },
        async signup({commit}, user) {
            const authUser = firebase.auth().currentUser
            dbFunctions.createProfile(authUser.uid)
            commit('SET_USER_DATA', user)

            // firebase function "newUser" is triggered on successful user creation
        },
        async login({commit}) {
            const user = firebase.auth().currentUser
            commit('SET_USER_DATA', user)
            commit('NEW_LOGIN', user)
        },
        async logout({commit}) {
            firebase.auth().signOut().then(() => {
                commit('CLEAR_USER_DATA')
            })
        },
    },
    getters: {},
});
