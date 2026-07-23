```markdown
# ParheliaWeb API Quickstart

Get started with the [ParheliaWeb API](https://parheliaweb.com) in 60 seconds. 

This repository contains copy-paste code snippets for our transparent, developer-first APIs. No black boxes, no enterprise tax, and no hidden fees.

## 🔗 Official Resources

- **[Full API Documentation](https://parheliaweb.com/docs-email)** - Complete endpoint reference, response schemas, and error codes.
- **[Transparent Pricing](https://parheliaweb.com/email-pricing)** - Flat, predictable pricing. No "contact sales" gatekeeping.
- **[Why Choose ParheliaWeb?](https://parheliaweb.com/why-choose-us)** - See how we compare to typical verification APIs (real SMTP checks, per-phase timing, GDPR compliant).

## 🚀 Quickstart: Email Validation

Grab your free API key (100 free verifications/month) from the [developer portal](https://parheliaweb.com/register).

### cURL

```bash
curl -X POST "https://parheliaweb.com/v1/email/validate" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

### Python

```python
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
```

### Node.js

```javascript
const axios = require('axios');

/**
 * Validate an email address using ParheliaWeb API.
 * Get your free API key: https://parheliaweb.com/register
 */
const validateEmail = async (email, apiKey) => {
  try {
    const response = await axios.post(
      'https://parheliaweb.com/v1/email/validate',
      { email: email },
      {
        headers: {
          'x-api-key': apiKey,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Validation error:', error.response?.data || error.message);
    throw error;
  }
};

// Example usage
const API_KEY = 'YOUR_API_KEY_HERE';
validateEmail('test@example.com', API_KEY)
  .then(result => console.log(result))
  .catch(err => console.error(err));

module.exports = { validateEmail };
```

## 🧠 What makes ParheliaWeb different?

Most email validation APIs return a simple `valid` or `invalid` boolean. We don't. 

Because providers like Microsoft and Yahoo accept almost everything during the SMTP handshake to prevent directory harvesting, a simple boolean is often a lie. Our API returns **transparent risk scores** and explicit risk factors (e.g., `opaque_provider`, `catch_all_domain`), giving you the exact data you need to make a send/don't-send decision.

## 📦 Batch Processing

Need to validate a list? Use our batch endpoint. Send up to 100 emails in a single request:

```bash
curl -X POST "https://parheliaweb.com/v1/email/validate/batch" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"emails": ["test1@example.com", "test2@example.com"]}'
```

## 🤝 Support

Built by a solo founder in the Netherlands. If you find a bug, have a feature request, or just want to talk about Python and APIs, reach out:

- 📧 Email: [info@parheliaweb.com](mailto:info@parheliaweb.com)
- 🌐 Website: [parheliaweb.com](https://parheliaweb.com)
```
