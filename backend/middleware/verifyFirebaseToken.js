    import {admin} from "../config/firebaseAdmin.js";

    const verifyFirebaseToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        console.log("AUTH HEADER:", req.headers.authorization);

        if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
        }

        const token = authHeader.split(" ")[1];
        console.log("TOKEN:", token);

        const decodedToken = await admin.auth().verifyIdToken(token);
        console.log("DECODED TOKEN UID:", decodedToken.uid);

        req.user = decodedToken;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
    };

    export default verifyFirebaseToken;