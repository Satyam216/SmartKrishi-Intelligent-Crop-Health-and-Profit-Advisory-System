from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from PIL import Image

app = Flask(__name__)

model = tf.keras.models.load_model("plant_disease_model.keras")

def preprocess(img):
    img = img.resize((224, 224))  # change if needed
    img = np.array(img) / 255.0
    img = np.expand_dims(img, axis=0)
    return img

@app.route("/predict", methods=["POST"])
def predict():
    file = request.files["file"]
    image = Image.open(file)

    processed = preprocess(image)
    prediction = model.predict(processed)

    return jsonify({
        "prediction": prediction.tolist()
    })

if __name__ == "__main__":
    app.run(port=5001, debug=True)