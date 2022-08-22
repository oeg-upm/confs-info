from flask import Flask
from flask import send_file
from flask import render_template
import os

app = Flask(__name__, template_folder='./')

@app.route("/")
def hello_world():
	return render_template('index.html')


@app.route("/js/<fname>")
def serve_jsfile(fname):
	return send_file(os.path.join("js", fname))


@app.route("/css/<fname>")
def serve_cssfile(fname):
	return send_file(os.path.join("css", fname))

