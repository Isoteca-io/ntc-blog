import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCoUU3okU8RPzMFmdJub3quRkrOVIkNwVY",
  authDomain: "ntc-blog.firebaseapp.com",
  projectId: "ntc-blog",
  storageBucket: "ntc-blog.appspot.com",
  messagingSenderId: "582578084574",
  appId: "1:582578084574:web:61103b527e521483a9004f",
  measurementId: "G-YME189D8T8",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export const firestore = firebase.firestore()
export const storage = firebase.storage()

export const fromMillis = firebase.firestore.Timestamp.fromMillis

/// Helper functions

/**
 * Gets a users/{uid} document with username
 * @param {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users")
  const query = usersRef.where("username", "==", username).limit(1)
  const userDoc = (await query.get()).docs[0]
  return userDoc
}

/**
 * Converts a firestore document to JSON
 * @param {DocumentSnapshot} doc
 * @returns {JSON}
 */

export function postToJSON(doc) {
  const data = doc.data()
  return {
    ...data,
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  }
}
