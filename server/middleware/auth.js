import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  try {
    console.log(" hello auth ");
    console.log(req.headers);

    const token = req.cookies["herbs"];

    if (!token) {
      return res.status(401).send({ success: false, error: "Authentication failed" });
    }

    const decrypted = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decrypted", decrypted);
    console.log("secret", process.env.JWT_SECRET);

    req.user = decrypted.id;

    next();
  } catch (error) {
    console.log("auth ~ error", error.message);

    res.status(401).send({ success: false, error: "Invalid token" });
  }
}
