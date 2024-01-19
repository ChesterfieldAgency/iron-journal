<template>
  <q-item clickable v-ripple @click="user ? signout() : signinWithPopup()">
    <q-item-section avatar>
      <q-icon :name="user ? 'logout' : 'login'" />
    </q-item-section>
    <q-item-section v-if="user">
      Sign-out
      <q-tooltip>Sign-out to remove data.</q-tooltip>
    </q-item-section>
    <q-item-section v-else>
      Sign-in to Google
      <q-tooltip>Sign-in to save data.</q-tooltip>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
 } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
export const googleAuthProvider = new GoogleAuthProvider()

export default defineComponent({
  setup() {
    const error: any = ref(null);
    const auth: any = useFirebaseAuth()!
    const user = ref(useCurrentUser(auth));

    return {
      signinWithPopup() {
        signInWithPopup(auth, googleAuthProvider).catch((reason: any) => {
          console.error('Failed signinWithPopup', reason)
          error.value = reason
        });
      },
      signout() {
        signOut(auth).catch((reason: any) => {
          console.error('Failed signout', reason)
          error.value = reason
        });
      },
      error,
      user,
    }
  }
})
</script>
