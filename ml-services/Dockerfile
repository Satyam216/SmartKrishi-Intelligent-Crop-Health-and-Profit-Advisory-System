FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5001

# timeout=300 allows time for model download + load on first boot
# workers=1 because TensorFlow needs too much RAM for multiple workers
CMD ["gunicorn", "--bind", "0.0.0.0:5001", "--timeout", "300", "--workers", "1", "app:app"]
