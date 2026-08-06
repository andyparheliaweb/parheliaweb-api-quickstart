[English](README.md) | [简体中文](README.zh-CN.md)



ParheliaWeb API Quickstart



Get started with the [ParheliaWeb API](https://parheliaweb.com) in 60 seconds. 



This repository contains copy-paste code snippets for our transparent, developer-first APIs. No black boxes, no enterprise tax, and no hidden fees.



## 🔗 Official Resources



-  **[Full API Documentation](https://parheliaweb.com/docs-email)** - Complete endpoint reference, response schemas, and error codes.
-  **[Transparent Pricing](https://parheliaweb.com/email-pricing)** - Flat, predictable pricing. No "contact sales" gatekeeping.
-  **[Why Choose ParheliaWeb?](https://parheliaweb.com/why-choose-us)** - See how we compare to typical verification APIs (real SMTP checks, per-phase timing, GDPR compliant).



## 🚀 Quickstart: Email Validation



Grab your free API key (100 free verifications/month) from the [developer portal](https://parheliaweb.com/register).



### cURL



```bash
curl -X POST "https://parheliaweb.com/v1/email/validate" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '("email": "test@example.com")'
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
    headers = (
        "x-api-key": api_key,
        "Content-Type": "application/json"
    )
    payload = ("email": email)
response = requests.post(url, json=payload, headers=headers)
return response.json()
Example usage
if name == "main":
    API_KEY = "YOUR_API_KEY_HERE"
    result = validate_email("test@example.com", API_KEY)
    print(result)
```






## 📊 Quickstart: Business Data APIs



Track real-time startup funding, layoffs, M&A, IPOs, and regulatory fines. All 5 data APIs use the same simple `GET` request format. 



Grab your free API key (100 free calls/day per API) from the [developer portal](https://parheliaweb.com/register).



### cURL (Funding API Example)



```bash
curl -H "x-api-key: YOUR_API_KEY" \
  "https://parheliaweb.com/v1/funding?max_age_days=30"
```



### Python (Funding API Example)



```python
import requests

def get_funding_data(api_key, max_days=30):
    """
    Get latest startup funding rounds using ParheliaWeb API.
    Get your free API key: https://parheliaweb.com/register
    """
    url = "https://parheliaweb.com/v1/funding"
    headers = ("x-api-key": api_key)
    params = ("max_age_days": max_days)
response = requests.get(url, headers=headers, params=params)
return response.json()
Example usage

if name == "main":
    API_KEY = "YOUR_API_KEY_HERE"
    data = get_funding_data(API_KEY, max_days=30)
    for round in data.get("results", []):
        print(f"(round['company_name']) raised (round['funding_amount'])")
```



Available Data API Endpoints



-  **Funding Rounds**: `GET /v1/funding`
-  **Layoffs**: `GET /v1/layoffs`
-  **Acquisitions**: `GET /v1/acquisitions`
-  **IPO Filings**: `GET /v1/ipos`
-  **Regulatory Fines**: `GET /v1/fines`



## 🤝 Support



Built by a solo founder in the Netherlands. If you find a bug, have a feature request, or just want to talk about Python and APIs, reach out:



-  📧 Email: [info@parheliaweb.com](mailto:info@parheliaweb.com)
-  🌐 Website: [parheliaweb.com](https://parheliaweb.com)
