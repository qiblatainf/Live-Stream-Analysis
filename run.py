from app.routes import app
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Get the port number from the environment or default to 3000
port = int(os.environ.get("PORT", 5000))

if __name__ == '__main__':
    app.run(port=port)
