import * as admin from "firebase-admin/lib/app";
import { getFirestore } from "firebase-admin/lib/firestore";
import cre from './firebase.json'

const app = admin.initializeApp({
    credential: admin.cert(cre)
});
const fireStore = getFirestore(app)
export const demoCollection = () => {
    return fireStore.collection('demo')
}
export const userCollection = () => {
    return fireStore.collection('user')
}