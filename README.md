English | [简体中文](README.zh-CN.md)



#  ParheliaWeb API Quickstart



Get started with the [ParheliaWeb API](https://parheliaweb.com) in 60 seconds.



This repository contains copy-paste code snippets for our transparent, developer-first APIs. No black boxes, no enterprise tax, and no hidden fees.



##  🔗 Official Resources



-  [Full API Documentation](https://parheliaweb.com/docs-email) - Complete endpoint reference, response schemas, and error codes.
-  [Transparent Pricing](https://parheliaweb.com/email-pricing) - Flat, predictable pricing. No "contact sales" gatekeeping.
-  [Why Choose ParheliaWeb?](https://parheliaweb.com/why-choose-us) - See how we compare to typical verification APIs (real SMTP checks, per-phase timing, GDPR compliant).



##  🚀 Quickstart: Email Validation



Grab your free API key (100 free verifications/month) from the [developer portal](https://parheliaweb.com/register).



###  cURL



*(The lang=zh parameter is optional and defaults to English)*



```bash
curl -X POST "https://parheliaweb.com/v1/email/validate" -H "x-api-key: YOUR_API_KEY" -H "Content-Type: application/json" -d '{"email": "test@example.com", "lang": "zh"}'
```



###  Python



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
    payload = {"email": email, "lang": "zh"}  # Optional: set "lang": "zh" for Chinese responses (defaults to English)

    response = requests.post(url, json=payload, headers=headers)
    return response.json()

if __name__ == "__main__":
    API_KEY = "YOUR_API_KEY_HERE"
    result = validate_email("test@example.com", API_KEY)
    print(result)
```



###  Example API Response



```json
{
  "status": "ok",
  "result": {
    "email": "test@spidernet.nl",
    "status": "invalid",
    "confidence": 95,
    "syntax_valid": true,
    "deliverability_score": 0,
    "is_role_based": false,
    "domain_check": {
      "passed": false,
      "whitelisted": false,
      "blacklisted": true,
      "blacklist_match": {
        "type": "static_domain",
        "domain": "spidernet.nl",
        "reason": "Migrated from legacy blacklist",
        "category": "spam",
        "severity": 5
      },
      "checks_performed": ["blacklist_hit"]
    },
    "mx_valid": false,
    "mx_servers": [],
    "smtp_check": {
      "performed": false,
      "result": null,
      "code": null,
      "message": "Skipped: domain rejected"
    },
    "risk_factors": [
      {
        "factor": "domain_rejected",
        "severity": "critical",
        "detail": {
          "type": "static_domain",
          "domain": "spidernet.nl",
          "reason": "Migrated from legacy blacklist",
          "category": "spam",
          "severity": 5
        }
      }
    ],
    "performance_ms": {
      "total": 0,
      "phases": {"cached": 0}
    },
    "first_seen": "2026-06-06 20:03:33",
    "cached": true
  }
}
```



##  📊 Quickstart: Business Data APIs



Track real-time startup funding, layoffs, M&A, IPOs, and regulatory fines. All 5 data APIs use the same simple GET request format.



Grab your free API key (100 free calls/day per API) from the [developer portal](https://parheliaweb.com/register).



###  cURL (Funding API Example)



*(The lang=zh parameter is optional and defaults to English)*



```bash
curl -H "x-api-key: YOUR_API_KEY" "https://parheliaweb.com/v1/funding?max_age_days=30&lang=zh"
```



###  Python (Funding API Example)



```python
import requests

def get_funding_data(api_key, max_days=30):
    """
    Get latest startup funding rounds using ParheliaWeb API.
    Get your free API key: https://parheliaweb.com/register
    """
    url = "https://parheliaweb.com/v1/funding"
    headers = {"x-api-key": api_key}
    params = {
        "max_age_days": max_days,
        "lang": "zh"  # Optional: set lang=zh for Chinese responses (defaults to English)
    }

    response = requests.get(url, headers=headers, params=params)
    return response.json()

if __name__ == "__main__":
    API_KEY = "YOUR_API_KEY_HERE"
    data = get_funding_data(API_KEY, max_days=30)
    for item in data.get("results", []):
        print(f"{item['company_name']} raised {item['funding_amount']}")
```



###  Example Response (Pro tier)



```json
{
  "user_tier": "pro",
  "count": 2,
  "max_age_days": 365,
  "last_crawled": "2026-05-28T12:04:02Z",
  "results": [
    {
      "company_name": "Squid",
      "funding_amount": "$6 million",
      "round_type": "Venture",
      "announcement_date": "2026-05-25",
      "source_url": "https://pulse2.com/...",
      "source_status": "active",
      "sector": "Fintech",
      "currency": "USD",
      "country": "US",
      "lead_investor": "Sequoia Capital",
      "is_extension": false,
      "investor_count": "5",
      "company_domain": "squid.com",
      "hiring_signal": true
    }
  ]
}
```



###  Available Data API Endpoints



-  Funding Rounds: GET /v1/funding
-  Layoffs: GET /v1/layoffs
-  Acquisitions: GET /v1/acquisitions
-  IPO Filings: GET /v1/ipos
-  Regulatory Fines: GET /v1/fines



##  🤝 Support



Built by a solo founder in the Netherlands. If you find a bug, have a feature request, or just want to talk about Python and APIs, reach out:



-  📧 Email: [info@parheliaweb.com](mailto:info@parheliaweb.com)
-  🌐 Website: [parheliaweb.com](https://parheliaweb.com)
