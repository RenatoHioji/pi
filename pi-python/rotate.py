from flask import Flask, request, send_file
from PIL import Image
import cv2
import numpy as np

app = Flask(__name__)

@app.route('/rotate', methods=['POST'])
def rotate_image():
    try:
        image_file = request.files['image']
        angulo = int(request.form['angulo'])
        if not image_file:
            return "No image provided", 400

        img = Image.open(image_file)
        altura,largura = img.shape[0], img.shape[1]
        Y,X = altura /2 , largura /2
        rotacao_matriz = cv2.getRotationMatrix2D((Y,X), angulo , 1.0)
        rotatingimage = cv2.warpAffine(img, rotacao_matriz, (largura, altura))
        return send_file(rotatingimage, mimetype='image/jpeg')

    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)