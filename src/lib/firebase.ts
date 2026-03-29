import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'
import { getStorage, FirebaseStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

// Validate Firebase config
const isConfigValid = firebaseConfig.apiKey && 
                      firebaseConfig.authDomain && 
                      firebaseConfig.projectId

if (!isConfigValid && typeof window !== 'undefined') {
  console.error('Firebase configuration is incomplete. Please check your environment variables.')
}

// Initialize Firebase only if it hasn't been initialized yet and config is valid
let app: FirebaseApp | null = null
let db: Firestore | null = null
let storage: FirebaseStorage | null = null

if (isConfigValid) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
    db = getFirestore(app)
    storage = getStorage(app)
  } catch (error) {
    if (typeof window !== 'undefined') {
      console.error('Firebase initialization error:', error)
    }
    app = null
    db = null
    storage = null
  }
}

// Lazy load auth only when needed (admin pages)
let authPromise: Promise<import('firebase/auth').Auth | null> | null = null

export const getAuthLazy = async () => {
  if (!app) return null
  if (!authPromise) {
    authPromise = import('firebase/auth').then(({ getAuth }) => getAuth(app!))
  }
  return authPromise
}

export { app, db, storage }

