import admin from "firebase-admin";

import "dotenv/config";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount), // Use `default` for dynamic imports
});

export const firebaseAdmin = admin;
