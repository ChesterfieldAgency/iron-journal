/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { boot } from 'quasar/wrappers'
// https://firebase.google.com/docs/web/setup#available-libraries
import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore'
import {
  browserLocalPersistence,
  debugErrorMap,
  indexedDBLocalPersistence,
  prodErrorMap,
  browserPopupRedirectResolver,
  initializeAuth,
  connectAuthEmulator,
} from 'firebase/auth'
import { VueFire, VueFireAuthOptionsFromAuth } from 'vuefire'

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
export const collections = {
  assets: collection(db, 'assets'),
  campaign: collection(db, 'campaign'),
  config: collection(db, 'config'),
  oracles: collection(db, 'oracles'),
}

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files

const auth = initializeAuth(firebaseApp, {
  errorMap:
    process.env.NODE_ENV !== 'production'
      ? debugErrorMap
      : prodErrorMap,
  persistence: [
    indexedDBLocalPersistence,
    browserLocalPersistence,
  ],
  popupRedirectResolver: browserPopupRedirectResolver,
});

if(process.env.NODE_ENV !== 'production') {
  connectAuthEmulator(auth, 'http://127.0.0.1:9099');
}

export default boot(({ app }) => {
  app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuthOptionsFromAuth({ auth }),
    ],
  })
})
