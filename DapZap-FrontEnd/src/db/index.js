import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
// import axios from 'axios'
// import * as fcl from '@onflow/fcl'
// import * as t from '@onflow/types'
import db from './init'


export default {
    async fileUpload(dir, filename, file, base64) {
        let imageURL = ''
        const storage = firebase.storage()
        if (base64) {
            storage
                .ref(`${dir}/${filename}`)
                .putString(file, 'base64', {contentType: 'image/png'})
                .then(() => {
                    console.log('Uploaded a base64 string!')
                })
        }
        const storageRef = storage.ref()
            .child(`${dir}/${filename}`)
        const task = storageRef.put(file)

        // update progress bar
        await task.on(
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
            async () => {
                // Handle successful uploads on complete
                await task.snapshot.ref.getDownloadURL()
                    .then(downloadURL => {
                        console.log('File available at', downloadURL)
                        imageURL = downloadURL

                        return imageURL
                    })
            },
        )
    },
    createProfile(userUID) {
        console.log('createProfile')
        if (userUID !== '') {
            db.collection('profiles')
                .doc(userUID)
                .set({
                    userUID,
                    lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
                    sessions: firebase.firestore.FieldValue.increment(1), // Number of logins
                    company: '',
                    plan: '',
                    flowAddress: '',
                    accountType: 0, // Account type 0 free, 1 paid basic
                    country: '',
                })
                .then(() => {
                    console.log('Profile successfully created!')
                })
                .catch(error => {
                    console.error('Error writing profile: ', error)
                })
        }
    },
    async readUsersProfile(userUID) {
        let profileData = {}
        await db.collection('profiles')
            .doc(userUID)
            .get()
            .then(doc => {
                profileData = doc.data()
            })
            .catch(error => {
                console.log('Error getting documents: ', error)
            })

        return profileData
    },
    async updateUsersProfile(user, fields) {
        const profileData = fields
        profileData.modified = firebase.firestore.FieldValue.serverTimestamp()
        await db.collection('profiles')
            .doc(user.uid)
            .update(profileData)
            .then(profile => profile)
            .catch(error => {
                console.log(error)
            })
    },
}
