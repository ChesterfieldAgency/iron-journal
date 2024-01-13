import { boot } from 'quasar/wrappers'
// https://firebase.google.com/docs/web/setup#available-libraries
import { FirebaseApp, FirebaseOptions, initializeApp } from '@firebase/app';
import { getFirestore, collection } from '@firebase/firestore'
import { VueFire, VueFireAuth } from 'vuefire'

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig)

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const assetsRef = collection(db, 'assets')
export const campaignRef = collection(db, 'campaign')
export const configRef = collection(db, 'config')
export const oraclesRef = collection(db, 'oracles')
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files

export default boot(({ app }) => {
  app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })
})
