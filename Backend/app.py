from flask import Flask, request, jsonify, make_response, render_template;
from parser import ReadAsin;
from flask_cors import CORS
from SVM_model import pred
app = Flask(__name__)

CORS(app)
@app.route("/details",methods=["GET"])
def home():
    id = request.args.get('id')
    res = ReadAsin(id);
    print(res);
    res=pred(res);
    return jsonify(res)

@app.route("/small",methods=["GET"])
def homeSmall():
    id = request.args.get('id')
    res = ReadAsin(id);
    res=pred(res);
    return jsonify(res)


if __name__ == '__main__':
    app.run(debug=True, port=2000,use_reloader=False)