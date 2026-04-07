from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from PIL import Image

app = Flask(__name__)

model = tf.keras.models.load_model("plant_disease_model.keras")

labels = [
"Orange___Haunglongbing_(Citrus_greening)",
"Tomato___Tomato_Yellow_Leaf_Curl_Virus",
"Soybean___Healthy",
"Peach___Bacterial_spot",
"Tomato___Bacterial_spot",
"Tomato___Late_blight",
"Squash___Powdery_mildew",
"Tomato___Septoria_leaf_spot",
"Tomato___Spider_mites Two-spotted_spider_mite",
"Apple___Healthy",
"Tomato___Healthy",
"Blueberry___Healthy",
"Pepper,_bell___Healthy",
"Tomato___Target_Spot",
"Grape___Esca_(Black_Measles)",
"Corn_(Maize)___Common_rust_",
"Grape___Black_Rot",
"Corn_(Maize)___healthy",
"Strawberry___Leaf_scorch",
"Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
"Cherry_(Including_Sour)___Powdery_mildew",
"Potato___Late_blight",
"Potato___Early_blight",
"Tomato___Early_blight",
"Pepper,_bell___Bacterial_spot",
"Corn_(Maize)___Northern_Leaf_Blight",
"Tomato___Leaf_Mold",
"Cherry_(Including_Sour)___healthy",
"Apple___Apple_scab",
"Apple___Black_rot",
"Corn (Maize)___Cercospora Leaf Spot - Gray Leaf Spot",
"Strawberry___healthy",
"Grape___healthy",
"Tomato___Tomato_mosaic_virus",
"Raspberry___healthy",
"Peach___healthy",
"Apple___Cedar_apple_rust",
"Potato___healthy"
]

def preprocess(img):
    img = img.resize((224, 224))
    img = img.convert("RGB")
    img = np.array(img) / 255.0
    img = np.expand_dims(img, axis=0)
    return img

@app.route("/")
def home():
    return "ML Service Running 🚀"

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    try:
        image = Image.open(request.files["file"])
        processed = preprocess(image)

        prediction = model.predict(processed)[0]

        # TOP 3 predictions
        top_indices = prediction.argsort()[-3:][::-1]

        results = []
        for i in top_indices:
            label = labels[i]
            crop, disease = label.split("___")

            results.append({
                "crop": crop,
                "defect": disease.replace("_", " "),
                "confidence": round(float(prediction[i]) * 100, 2)
            })

        # LOW CONFIDENCE CHECK
        return jsonify({
            "top_predictions": results
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(port=5001, debug=True)