import { firebaseAdmin } from "../firebase/firebase.config.js";

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(403).json({
      data: null,
      error: "no token provided",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        data: null,
        error: "unauthorized",
      });
    }

    req.username = decoded.username;
    next();
  });
};

export const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const idToken = authHeader.split(" ")[1]; // Extract the token

  console.log("token:", idToken);

  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken);
    req.user = decodedToken; // Attach the decoded token payload to the request
    console.log(decodedToken);
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(403).json({ error: "Forbidden" });
  }
};
