from flask import Flask, request

app = Flask(__name__)


# These are hardcoded account credentials lmao (THIS IS JUST AS A DEMO)
ACCOUNTS = [
        {"username": "julewis", "password": "test"},
        {"username": "mhlow", "password": "test"},
    ]

# Handles validating login credentials
@app.route("/login", methods=["GET"])
def login_user():

    # Pull credentials from GET request arguments (plaintext lmao)
    username: str | None = request.args.get("username")
    password: str | None = request.args.get("password")

    if not username or not password:
        # Malformed request
        return ('', 400)


    if {"username": username, "password": password} in ACCOUNTS:
        # Return success if credentials were correct
        return ('', 200)

    # User is unauthorized
    return ('', 401)
    
