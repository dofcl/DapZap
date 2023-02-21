import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FBDB_APIKEY,
    authDomain: process.env.VUE_APP_FBDB_authDomain,
    projectId: process.env.VUE_APP_FBDB_projectId,
    storageBucket: process.env.VUE_APP_FBDB_storageBucket,
    messagingSenderId: process.env.VUE_APP_FBDB_messagingSenderId,
    appId: process.env.VUE_APP_FBDB_appId,
    measurementId: process.env.VUE_APP_FBDB_measurementId,
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebase.analytics()
// test on local emulator
// firebase.functions().useEmulator('localhost', 4000)
// console.log('***** USING EMULATED FUNCTIONS!')
const db = firebaseApp.firestore()
export default db