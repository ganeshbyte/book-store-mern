import admin from "firebase-admin";

// Dynamically import the service account key
const serviceAccount = await import("../serviceAccountKey.json", {
  assert: { type: "json" }, // Ensure it's a JSON file
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount.default), // Use `default` for dynamic imports
});

export const firebaseAdmin = admin;
