# start flask server using "python app.py" (navigate to correct localhost port)

# Need a Flask server to serialize data between Python and Javascript
# https://healeycodes.com/talking-between-languages

from flask import Flask, jsonify, request, render_template
app = Flask(__name__)

# Render the homepage
@app.route('/')
def test_page():
    # look inside `templates` and serve `index.html`
    return render_template('index.html')
   
# api endpoint for sending data
@app.route('/api', methods=['GET', 'POST'])
def hello():
    # GET request
    if request.method == 'GET':
        message = {'greeting':'Hello from Flask!'}
        return jsonify(message)  # serialize and use JSON headers

    # POST request
    if request.method == 'POST':
        print('Incoming..')
        print(request.get_json())  # parse as JSON
        return 'OK', 200

if __name__ == "__main__":
    app.run(debug=True)