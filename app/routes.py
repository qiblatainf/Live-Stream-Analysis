from app import app

@app.route('/')
def hello_world():
    return 'Hello, to the AI World!'
