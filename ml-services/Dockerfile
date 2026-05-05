FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 7860

# Port 7860 is required by Hugging Face Spaces
# timeout=300 for model download on first boot
# workers=1 to stay within RAM limits for TensorFlow
CMD ["gunicorn", "--bind", "0.0.0.0:7860", "--timeout", "300", "--workers", "1", "app:app"]
