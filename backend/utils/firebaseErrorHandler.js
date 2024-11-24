export function handleFirebaseError(error) {
  switch (error.code) {
    case "auth/user-not-found":
      console.error("User not found.");
      break;
    case "auth/wrong-password":
      console.error("Incorrect password.");
      break;
    case "auth/too-many-requests":
      console.error("Too many requests. Try again later.");
      break;
    case "auth/id-token-expired":
      console.error("Firebase Token Expired");
      break;
    default:
      console.error("An unknown error occurred:", error.code);
  }
}
