import admin from "firebase-admin";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let serviceAccount;

if (process.env.FIREBASE_SERVICE_KEY) {
  // Cloud deployment: read from environment variable
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_KEY);
} else {
  // Local development: read from JSON file
  const filePath = join(__dirname, "firebaseServiceKey.json");
  serviceAccount = JSON.parse(readFileSync(filePath, "utf8"));
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
export { admin, db };