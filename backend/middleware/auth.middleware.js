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
