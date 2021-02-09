import * as firebase from 'firebase'

import '@firebase/firestore'

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyC7s5umQpzwjOQRGMPbaDR7U2j8xFrWeBg',
  authDomain: 'rnapp-d9c4e.firebaseapp.com',
  projectId: 'rnapp-d9c4e',
  storageBucket: 'rnapp-d9c4e.appspot.com',
  messagingSenderId: '25895636655',
  appId: '1:25895636655:web:8c411347b6cdb2ab1d0e5a',
  measurementId: 'G-9SLX7PPB77',
  databaseURL: 'https://rnapp-d9c4e-default-rtdb.firebaseio.com/',
}

const app = firebase.initializeApp(FIREBASE_CONFIG)

export const db = app.database()
export const fireStore = firebase.firestore(app)
export const auth = app.auth()
