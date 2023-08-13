from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes in the app

# Your other imports and data here
# For example, you may have the following imports and response_data variable:

import json
import re
import random_response

def load_json(file):
    with open(file) as bot_responses:
        print(f"Loaded '{file}' successfully!")
        return json.load(bot_responses)

response_data = load_json("bot.json")

# Endpoint to handle chatbot requests
@app.route('/api/chatbot', methods=['POST'])
def chatbot_response():
    try:
        user_input = request.json.get('user_input', '')
        print("User Input:", user_input)  # Print user input for debugging purposes

        split_message = re.split(r'\s+|[,;?!.-]\s*', user_input.lower())
        score_list = []

        for response in response_data:
            response_score = 0
            required_score = 0
            required_words = response["required_words"]

            if required_words:
                for word in split_message:
                    if word in required_words:
                        required_score += 1

            if required_score == len(required_words):
                for word in split_message:
                    if word in response["user_input"]:
                        response_score += 1

            score_list.append(response_score)

        best_response = max(score_list)
        response_index = score_list.index(best_response)

        if user_input == "":
            response = {"bot_response": "Please type something so we can chat :("}
        elif best_response != 0:
            response = {"bot_response": response_data[response_index]["bot_response"]}
        else:
            response = {"bot_response": random_response.random_string()}

        print("Chatbot Response:", response)  # Print chatbot response for debugging purposes
        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)  # Change this to False when deploying to production
