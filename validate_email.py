import requests

def validate_email(email, api_key):
    """
    Validate an email address using ParheliaWeb API.
    Get your free API key: https://parheliaweb.com/register
    """
    url = "https://parheliaweb.com/v1/email/validate"
    headers = {
        "x-api-key": api_key,
        "Content-Type": "application/json"
    }
    payload = {"email": email}
    
    response = requests.post(url, json=payload, headers=headers)
    return response.json()

# Example usage
if __name__ == "__main__":
    API_KEY = "YOUR_API_KEY_HERE"
    result = validate_email("test@example.com", API_KEY)
    print(result)
