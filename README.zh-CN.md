[English](README.md) | 简体中文



📖 **完整文档:** [parheliaweb.com/zh/docs-email](https://parheliaweb.com/zh/docs-email) · 🌐 **官网:** [parheliaweb.com/zh](https://parheliaweb.com/zh/) · 🗺️ **中文网站地图:** [zh/sitemap.xml](https://parheliaweb.com/zh/sitemap.xml)



#  ParheliaWeb API 快速入门



60 秒内快速开始使用 [ParheliaWeb API](https://parheliaweb.com/zh/)。



本仓库包含为我们透明、开发者优先的 API 提供的可直接复制粘贴的代码片段。没有黑盒操作，没有企业级溢价，也没有隐藏费用。



##  🔗 官方资源



-  [完整 API 文档](https://parheliaweb.com/zh/docs-email) - 包含端点参考、响应架构和错误代码。
-  [透明定价](https://parheliaweb.com/zh/email-pricing) - 统一、可预测的定价。无需“联系销售”。
-  [为什么选择 ParheliaWeb？](https://parheliaweb.com/zh/why-choose-us) - 了解我们与其他普通验证 API 的对比（真实 SMTP 检查、各阶段计时、符合 GDPR）。



##  🚀 快速开始：邮箱验证



从[开发者门户](https://parheliaweb.com/zh/register)获取您的免费 API 密钥（每月 100 次免费验证）。



以下所有示例默认返回**中文响应**。如需英文字段值，只需移除请求中的 `lang` 参数（或将其设为 `en`）。



###  cURL



```bash
curl -X POST "https://parheliaweb.com/v1/email/validate" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "lang": "zh"}'
```



###  Python



```python
import requests

def validate_email(email, api_key):
    """
    使用 ParheliaWeb API 验证电子邮件地址。
    获取免费 API 密钥: https://parheliaweb.com/zh/register
    """
    url = "https://parheliaweb.com/v1/email/validate"
    headers = {
        "x-api-key": api_key,
        "Content-Type": "application/json"
    }
    payload = {"email": email, "lang": "zh"}  # 可选：添加 "lang": "zh" 返回中文响应（默认为英文）

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
     * 使用 ParheliaWeb API 验证电子邮件地址。
     * 获取免费 API 密钥: https://parheliaweb.com/zh/register
     */
    $url = "https://parheliaweb.com/v1/email/validate";

    $payload = json_encode([
        "email" => $email,
        "lang"  => "zh"  // 可选：设为 "en" 返回英文响应（默认为中文）
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
        throw new Exception("API 错误 (HTTP " . $http_code . "): " . $response);
    }

    return json_decode($response, true);
}

// --- 使用示例 ---
 $API_KEY = "YOUR_API_KEY_HERE";
 $result = validate_email("test@example.com", $API_KEY);

echo "状态: " . $result["result"]["status"] . "\n";
echo "置信度: " . $result["result"]["confidence"] . "%\n";
echo "投递评分: " . $result["result"]["deliverability_score"] . "%\n";
```



###  JavaScript (Node.js 18+)



```javascript
/**
 * 使用 ParheliaWeb API 验证电子邮件地址。
 * 获取免费 API 密钥: https://parheliaweb.com/zh/register
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
            lang: "zh"  // 可选：设为 "en" 返回英文响应（默认为中文）
        })
    });

    if (!response.ok) {
        throw new Error(`API 错误 (HTTP ${response.status})`);
    }

    return response.json();
}

// --- 使用示例 ---
const API_KEY = "YOUR_API_KEY_HERE";

validateEmail("test@example.com", API_KEY)
    .then(data => {
        console.log("状态:", data.result.status);
        console.log("置信度:", data.result.confidence + "%");
        console.log("投递评分:", data.result.deliverability_score + "%");
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

// validateEmail 使用 ParheliaWeb API 验证电子邮件地址。
// 获取免费 API 密钥: https://parheliaweb.com/zh/register
func validateEmail(email, apiKey string) (map[string]interface{}, error) {
    payload, _ := json.Marshal(map[string]string{
        "email": email,
        "lang":  "zh", // 可选：设为 "en" 返回英文响应（默认为中文）
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
        return nil, fmt.Errorf("API 错误 (HTTP %d): %s", resp.StatusCode, body)
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



###  API 响应示例



```json
{
  "status": "ok",
  "result": {
    "email": "test@spidernet.nl",
    "status": "无效",
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
        "reason": "从旧版黑名单迁移",
        "category": "垃圾邮件",
        "severity": 5
      },
      "checks_performed": ["黑名单命中"]
    },
    "mx_valid": false,
    "mx_servers": [],
    "smtp_check": {
      "performed": false,
      "result": null,
      "code": null,
      "message": "已跳过：域名已拒绝"
    },
    "risk_factors": [
      {
        "factor": "域名已拒绝",
        "severity": "严重",
        "detail": {
          "type": "static_domain",
          "domain": "spidernet.nl",
          "reason": "从旧版黑名单迁移",
          "category": "垃圾邮件",
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



##  📊 快速开始：商业数据 API



追踪实时的初创公司融资、裁员、并购、IPO 和监管罚款。所有 5 个数据 API 都使用相同的简单 GET 请求格式。



从[开发者门户](https://parheliaweb.com/zh/register)获取您的免费 API 密钥（每个 API 每天 100 次免费调用）。



以下示例默认返回**中文响应**。如需英文字段值，只需移除请求中的 `lang` 参数（或将其设为 `en`）。



###  cURL（融资 API 示例）



```bash
curl -H "x-api-key: YOUR_API_KEY" \
  "https://parheliaweb.com/v1/funding?max_age_days=30&lang=zh"
```



###  Python（融资 API 示例）



```python
import requests

def get_funding_data(api_key, max_days=30):
    """
    使用 ParheliaWeb API 获取最新的初创公司融资轮次。
    获取免费 API 密钥: https://parheliaweb.com/zh/register
    """
    url = "https://parheliaweb.com/v1/funding"
    headers = {"x-api-key": api_key}
    params = {
        "max_age_days": max_days,
        "lang": "zh"  # 可选：添加 lang=zh 返回中文响应（默认为英文）
    }

    response = requests.get(url, headers=headers, params=params)
    return response.json()

if __name__ == "__main__":
    API_KEY = "YOUR_API_KEY_HERE"
    data = get_funding_data(API_KEY, max_days=30)
    for item in data.get("results", []):
        print(f"{item['company_name']} raised {item['funding_amount']}")
```



###  PHP（融资 API 示例）



```php
<?php

function get_funding_data($api_key, $max_days = 30) {
    /**
     * 使用 ParheliaWeb API 获取最新的初创公司融资轮次。
     * 获取免费 API 密钥: https://parheliaweb.com/zh/register
     */
    $params = http_build_query([
        "max_age_days" => $max_days,
        "lang"         => "zh"  // 可选：设为 "en" 返回英文响应（默认为中文）
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
        throw new Exception("API 错误 (HTTP " . $http_code . "): " . $response);
    }

    return json_decode($response, true);
}

// --- 使用示例 ---
 $API_KEY = "YOUR_API_KEY_HERE";
 $data = get_funding_data($API_KEY, 30);

foreach ($data["results"] as $item) {
    echo $item["company_name"] . " raised " . $item["funding_amount"] . "\n";
}
```



###  JavaScript（融资 API 示例，Node.js 18+）



```javascript
/**
 * 使用 ParheliaWeb API 获取最新的初创公司融资轮次。
 * 获取免费 API 密钥: https://parheliaweb.com/zh/register
 */
async function getFundingData(apiKey, maxDays = 30) {
    const params = new URLSearchParams({
        max_age_days: maxDays,
        lang: "zh"  // 可选：设为 "en" 返回英文响应（默认为中文）
    });

    const response = await fetch(
        `https://parheliaweb.com/v1/funding?${params.toString()}`,
        {
            headers: { "x-api-key": apiKey }
        }
    );

    if (!response.ok) {
        throw new Error(`API 错误 (HTTP ${response.status})`);
    }

    return response.json();
}

// --- 使用示例 ---
const API_KEY = "YOUR_API_KEY_HERE";

getFundingData(API_KEY, 30)
    .then(data => {
        data.results.forEach(item => {
            console.log(`${item.company_name} raised ${item.funding_amount}`);
        });
    })
    .catch(err => console.error(err));
```



###  Go（融资 API 示例）



```go
package main

import (
    "encoding/json"
    "fmt"
    "io"
    "log"
    "net/http"
)

// getFundingData 使用 ParheliaWeb API 获取最新的初创公司融资轮次。
// 获取免费 API 密钥: https://parheliaweb.com/zh/register
func getFundingData(apiKey string, maxDays int) (map[string]interface{}, error) {
    url := fmt.Sprintf("https://parheliaweb.com/v1/funding?max_age_days=%d&lang=zh", maxDays)

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
        return nil, fmt.Errorf("API 错误 (HTTP %d): %s", resp.StatusCode, body)
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



###  响应示例（专业版）



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
      "round_type": "风险投资",
      "announcement_date": "2026-05-25",
      "source_url": "https://pulse2.com/...",
      "source_status": "active",
      "sector": "金融科技",
      "currency": "USD",
      "country": "美国",
      "region": "北美洲",
      "lead_investor": "Sequoia Capital",
      "is_extension": false,
      "investor_count": "5",
      "company_domain": "squid.com",
      "hiring_signal": true
    }
  ]
}
```



###  可用的数据 API 端点



-  融资轮次: GET /v1/funding
-  裁员: GET /v1/layoffs
-  收购: GET /v1/acquisitions
-  IPO 申报: GET /v1/ipos
-  监管罚款: GET /v1/fines



##  🤝 支持



由位于荷兰的独立创始人构建。如果您发现错误、有功能建议，或者只是想聊聊 Python 和 API，请随时联系我们：



-  📧 电子邮件: [info@parheliaweb.com](mailto:info@parheliaweb.com)
-  🌐 网站: [parheliaweb.com/zh/](https://parheliaweb.com/zh/)



##  🗺️ 全部中文页面



###  📖 文档



-  🚀 融资信号 API: [https://parheliaweb.com/zh/docs](https://parheliaweb.com/zh/docs)
-  📧 邮箱验证 API: [https://parheliaweb.com/zh/docs-email](https://parheliaweb.com/zh/docs-email)
-  📉 裁员追踪 API: [https://parheliaweb.com/zh/docs-layoffs](https://parheliaweb.com/zh/docs-layoffs)
-  ⚖️ 监管罚款 API: [https://parheliaweb.com/zh/docs-fines](https://parheliaweb.com/zh/docs-fines)
-  🤝 并购收购 API: [https://parheliaweb.com/zh/docs-acquisitions](https://parheliaweb.com/zh/docs-acquisitions)
-  📈 IPO 申报 API: [https://parheliaweb.com/zh/docs-ipos](https://parheliaweb.com/zh/docs-ipos)



###  💰 定价



-  融资定价: [https://parheliaweb.com/zh/funding-pricing](https://parheliaweb.com/zh/funding-pricing)
-  邮箱验证定价: [https://parheliaweb.com/zh/email-pricing](https://parheliaweb.com/zh/email-pricing)
-  裁员定价: [https://parheliaweb.com/zh/layoffs-pricing](https://parheliaweb.com/zh/layoffs-pricing)
-  罚款定价: [https://parheliaweb.com/zh/fines-pricing](https://parheliaweb.com/zh/fines-pricing)
-  并购定价: [https://parheliaweb.com/zh/acquisitions-pricing](https://parheliaweb.com/zh/acquisitions-pricing)
-  IPO 定价: [https://parheliaweb.com/zh/ipos-pricing](https://parheliaweb.com/zh/ipos-pricing)



###  🔗 其他



-  🏠 首页: [https://parheliaweb.com/zh/](https://parheliaweb.com/zh/)
-  ✨ 为什么选择我们: [https://parheliaweb.com/zh/why-choose-us](https://parheliaweb.com/zh/why-choose-us)
-  📚 数据方法论: [https://parheliaweb.com/zh/methodology](https://parheliaweb.com/zh/methodology)
-  🔑 注册获取免费密钥: [https://parheliaweb.com/zh/register](https://parheliaweb.com/zh/register)
-  🗺️ 网站地图: [https://parheliaweb.com/zh/sitemap.xml](https://parheliaweb.com/zh/sitemap.xml)



##  🔍 关于 ParheliaWeb



ParheliaWeb 是由荷兰独立开发者构建的透明商业数据 API 平台，专为出海团队打造。我们提供融资信号、裁员追踪、监管罚款、并购收购、IPO 申报和带 SMTP 验证的邮箱验证服务。



-  🌍 一个 API 密钥, 6 个 API
-  ✅ 数据经原始来源验证
-  🔒 符合 GDPR
-  💰 透明定价, 无隐藏费用



**联系我们:** [info@parheliaweb.com](mailto:info@parheliaweb.com) · [parheliaweb.com/zh/](https://parheliaweb.com/zh/)
