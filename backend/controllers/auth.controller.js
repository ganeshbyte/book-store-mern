import { firebaseAdmin } from "../firebase/firebase.config.js";

export const validateToken = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const idToken = authHeader.split(" ")[1]; // Extract the token

  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken);
    req.user = decodedToken; // Attach the decoded token payload to the request
    res.staus(200).json({
      data: decodedToken,
      error: null,
    });
  } catch (error) {
    return res.status(403).json({ error: "Forbidden" });
  }
};
