# Flask server to serialize data between Python and Javascript
# https://healeycodes.com/talking-between-languages


from flask import Flask, jsonify, request, render_template
from static.data.netflix.netlfix import *
from static.data.youtube.youtube import *

app = Flask(__name__)

@app.route('/')
def test_page():
    return render_template('index.html')
   
@app.route('/netflix', methods=['GET', 'POST'])
def netflix():
    if request.method == 'GET':
        message = myDictNetflix
        return jsonify(message)  

    # POST request
    # if request.method == 'POST':
    #     print('Incoming..')
    #     print(request.get_json())  # parse as JSON
    #     return 'OK', 200

@app.route('/youtube', methods=['GET', 'POST'])
def youtube():
    if request.method == 'GET':
        message = myDictYoutube
        return jsonify(message)  

if __name__ == "__main__":
    app.run(debug=True)