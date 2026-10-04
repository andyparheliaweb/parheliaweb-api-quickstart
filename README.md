English | [简体中文](README.zh-CN.md)



# ParheliaWeb API Quickstart



Get started with the [ParheliaWeb API](https://parheliaweb.com) in 60 seconds.



This repository contains copy-paste code snippets for our transparent, developer-first APIs. No black boxes, no enterprise tax, and no hidden fees.



##  🔗 Official Resources



-  [Full API Documentation](https://parheliaweb.com/docs-email) - Complete endpoint reference, response schemas, and error codes.
-  [Transparent Pricing](https://parheliaweb.com/email-pricing) - Flat, predictable pricing. No "contact sales" gatekeeping.
-  [Why Choose ParheliaWeb?](https://parheliaweb.com/why-choose-us) - See how we compare to typical verification APIs (real SMTP checks, per-phase timing, GDPR compliant).



##  🚀 Quickstart: Email Validation



Grab your free API key (100 free verifications/month) from the [developer portal](https://parheliaweb.com/register).



All snippets below return **English responses** by default. To receive Chinese field values instead, add the optional `lang=zh` parameter to your request.



###  cURL



```bash
curl -X POST "https://parheliaweb.com/v1/email/validate" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
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
    payload = {"email": email}  # Optional: add "lang": "zh" for Chinese responses (defaults to English)

    response = requests.post(url, json=payload, headers=headers)
    return response.json()

if __name__ == "__main__":
    API_KEY = "YOUR_API_KEY_HERE"
    result = validate_email("test@example.com", API_KEY)
    print(result)
```



###  PHP



```php
<?php

function validate_email($email, $api_key) {
    /**
     * Validate an email address using ParheliaWeb API.
     * Get your free API key: https://parheliaweb.com/register
     */
    $url = "https://parheliaweb.com/v1/email/validate";

    $payload = json_encode([
        "email" => $email,
        // Optional: add "lang" => "zh" for Chinese responses (defaults to English)
    ]);

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 15,
        CURLOPT_HTTPHEADER     => [
            "x-api-key: " . $api_key,
            "Content-Type: application/json"
        ],
        CURLOPT_POSTFIELDS     => $payload
    ]);

    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($http_code !== 200) {
        throw new Exception("API error (HTTP " . $http_code . "): " . $response);
    }

    return json_decode($response, true);
}

// --- Usage ---
 $API_KEY = "YOUR_API_KEY_HERE";
 $result = validate_email("test@example.com", $API_KEY);

echo "Status: " . $result["result"]["status"] . "\n";
echo "Confidence: " . $result["result"]["confidence"] . "%\n";
echo "Deliverability: " . $result["result"]["deliverability_score"] . "%\n";
```



###  JavaScript (Node.js 18+)



```javascript
/**
 * Validate an email address using ParheliaWeb API.
 * Get your free API key: https://parheliaweb.com/register
 */
async function validateEmail(email, apiKey) {
    const response = await fetch("https://parheliaweb.com/v1/email/validate", {
        method: "POST",
        headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            // Optional: add lang: "zh" for Chinese responses (defaults to English)
        })
    });

    if (!response.ok) {
        throw new Error(`API error (HTTP ${response.status})`);
    }

    return response.json();
}

// --- Usage ---
const API_KEY = "YOUR_API_KEY_HERE";

validateEmail("test@example.com", API_KEY)
    .then(data => {
        console.log("Status:", data.result.status);
        console.log("Confidence:", data.result.confidence + "%");
        console.log("Deliverability:", data.result.deliverability_score + "%");
    })
    .catch(err => console.error(err));
```



###  Go



```go
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "log"
    "net/http"
)

// validateEmail validates an email address using ParheliaWeb API.
// Get your free API key: https://parheliaweb.com/register
func validateEmail(email, apiKey string) (map[string]interface{}, error) {
    payload, _ := json.Marshal(map[string]string{
        "email": email,
        // Optional: add "lang": "zh" for Chinese responses (defaults to English)
    })

    req, err := http.NewRequest("POST", "https://parheliaweb.com/v1/email/validate", bytes.NewBuffer(payload))
    if err != nil {
        return nil, err
    }
    req.Header.Set("x-api-key", apiKey)
    req.Header.Set("Content-Type", "application/json")

    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        return nil, err
    }
    defer resp.Body.Close()

    body, _ := io.ReadAll(resp.Body)
    if resp.StatusCode != 200 {
        return nil, fmt.Errorf("API error (HTTP %d): %s", resp.StatusCode, body)
    }

    var result map[string]interface{}
    if err := json.Unmarshal(body, &result); err != nil {
        return nil, err
    }
    return result, nil
}

func main() {
    apiKey := "YOUR_API_KEY_HERE"
    result, err := validateEmail("test@example.com", apiKey)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(result)
}
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



All snippets below return **English responses** by default. To receive Chinese field values instead, add the optional `lang=zh` parameter to your request.



###  cURL (Funding API Example)



```bash
curl -H "x-api-key: YOUR_API_KEY" \
  "https://parheliaweb.com/v1/funding?max_age_days=30"
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
        # Optional: add "lang": "zh" for Chinese responses (defaults to English)
    }

    response = requests.get(url, headers=headers, params=params)
    return response.json()

if __name__ == "__main__":
    API_KEY = "YOUR_API_KEY_HERE"
    data = get_funding_data(API_KEY, max_days=30)
    for item in data.get("results", []):
        print(f"{item['company_name']} raised {item['funding_amount']}")
```



###  PHP (Funding API Example)



```php
<?php

function get_funding_data($api_key, $max_days = 30) {
    /**
     * Get latest startup funding rounds using ParheliaWeb API.
     * Get your free API key: https://parheliaweb.com/register
     */
    $params = http_build_query([
        "max_age_days" => $max_days,
        // Optional: add "lang" => "zh" for Chinese responses (defaults to English)
    ]);
    $url = "https://parheliaweb.com/v1/funding?" . $params;

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 15,
        CURLOPT_HTTPHEADER     => ["x-api-key: " . $api_key]
    ]);

    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($http_code !== 200) {
        throw new Exception("API error (HTTP " . $http_code . "): " . $response);
    }

    return json_decode($response, true);
}

// --- Usage ---
 $API_KEY = "YOUR_API_KEY_HERE";
 $data = get_funding_data($API_KEY, 30);

foreach ($data["results"] as $item) {
    echo $item["company_name"] . " raised " . $item["funding_amount"] . "\n";
}
```



###  JavaScript (Funding API Example, Node.js 18+)



```javascript
/**
 * Get latest startup funding rounds using ParheliaWeb API.
 * Get your free API key: https://parheliaweb.com/register
 */
async function getFundingData(apiKey, maxDays = 30) {
    const params = new URLSearchParams({
        max_age_days: maxDays,
        // Optional: add lang: "zh" for Chinese responses (defaults to English)
    });

    const response = await fetch(
        `https://parheliaweb.com/v1/funding?${params.toString()}`,
        {
            headers: { "x-api-key": apiKey }
        }
    );

    if (!response.ok) {
        throw new Error(`API error (HTTP ${response.status})`);
    }

    return response.json();
}

// --- Usage ---
const API_KEY = "YOUR_API_KEY_HERE";

getFundingData(API_KEY, 30)
    .then(data => {
        data.results.forEach(item => {
            console.log(`${item.company_name} raised ${item.funding_amount}`);
        });
    })
    .catch(err => console.error(err));
```



###  Go (Funding API Example)



```go
package main

import (
    "encoding/json"
    "fmt"
    "io"
    "log"
    "net/http"
)

// getFundingData fetches latest startup funding rounds using ParheliaWeb API.
// Get your free API key: https://parheliaweb.com/register
func getFundingData(apiKey string, maxDays int) (map[string]interface{}, error) {
    url := fmt.Sprintf("https://parheliaweb.com/v1/funding?max_age_days=%d", maxDays)
    // Optional: append "&lang=zh" for Chinese responses (defaults to English)

    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        return nil, err
    }
    req.Header.Set("x-api-key", apiKey)

    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        return nil, err
    }
    defer resp.Body.Close()

    body, _ := io.ReadAll(resp.Body)
    if resp.StatusCode != 200 {
        return nil, fmt.Errorf("API error (HTTP %d): %s", resp.StatusCode, body)
    }

    var result map[string]interface{}
    if err := json.Unmarshal(body, &result); err != nil {
        return nil, err
    }
    return result, nil
}

func main() {
    apiKey := "YOUR_API_KEY_HERE"
    data, err := getFundingData(apiKey, 30)
    if err != nil {
        log.Fatal(err)
    }

    if results, ok := data["results"].([]interface{}); ok {
        for _, item := range results {
            row := item.(map[string]interface{})
            fmt.Printf("%v raised %v\n", row["company_name"], row["funding_amount"])
        }
    }
}
```



###  Example Response (Pro tier)



```json
{
  "user_tier": "pro",
  "count": 1,
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
