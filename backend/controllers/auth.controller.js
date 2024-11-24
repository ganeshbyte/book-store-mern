import { firebaseAdmin } from "../firebase/firebase.config.js";
import { handleFirebaseError } from "../utils/firebaseErrorHandler.js";

export const validateToken = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const idToken = authHeader.split(" ")[1];

  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    res.staus(200).json({
      data: decodedToken,
      error: null,
    });
  } catch (error) {
    handleFirebaseError(error);
    return res.status(403).json({ error: "Forbidden" });
  }
};
