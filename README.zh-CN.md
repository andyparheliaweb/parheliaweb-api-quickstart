[English](README.md) | [简体中文](README.zh-CN.md)



# ParheliaWeb API 快速入门



60秒内快速开始使用 [ParheliaWeb API](https://parheliaweb.com/zh/)。



本仓库包含为我们透明、开发者优先的 API 提供的可直接复制粘贴的代码片段。没有黑盒操作，没有企业级溢价，也没有隐藏费用。



## 🔗 官方资源



-  **[完整 API 文档](https://parheliaweb.com/zh/docs-email)** - 包含端点参考、响应架构和错误代码。
-  **[透明定价](https://parheliaweb.com/zh/email-pricing)** - 统一、可预测的定价。无需“联系销售”。
-  **[为什么选择 ParheliaWeb？](https://parheliaweb.com/zh/why-choose-us)** - 了解我们与其他普通验证 API 的对比（真实 SMTP 检查、各阶段计时、符合 GDPR）。



## 🚀 快速开始：邮箱验证



从[开发者门户](https://parheliaweb.com/zh/register)获取您的免费 API 密钥（每月 100 次免费验证）。



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
    使用 ParheliaWeb API 验证电子邮件地址。
    获取免费 API 密钥: https://parheliaweb.com/zh/register
    """
    url = "https://parheliaweb.com/v1/email/validate"
    headers = (
        "x-api-key": api_key,
        "Content-Type": "application/json"
    )
    payload = ("email": email)
response = requests.post(url, json=payload, headers=headers)
return response.json()
示例用法
if name == "main":
    API_KEY = "YOUR_API_KEY_HERE"
    result = validate_email("test@example.com", API_KEY)
    print(result)
```






## 📊 快速开始：商业数据 API



追踪实时的初创公司融资、裁员、并购、IPO 和监管罚款。所有 5 个数据 API 都使用相同的简单 `GET` 请求格式。



从[开发者门户](https://parheliaweb.com/zh/register)获取您的免费 API 密钥（每个 API 每天 100 次免费调用）。



### cURL (融资 API 示例)



```bash
curl -H "x-api-key: YOUR_API_KEY" \
  "https://parheliaweb.com/v1/funding?max_age_days=30"
```



### Python (融资 API 示例)



```python
import requests

def get_funding_data(api_key, max_days=30):
    """
    使用 ParheliaWeb API 获取最新的初创公司融资轮次。
    获取免费 API 密钥: https://parheliaweb.com/zh/register
    """
    url = "https://parheliaweb.com/v1/funding"
    headers = ("x-api-key": api_key)
    params = ("max_age_days": max_days)
response = requests.get(url, headers=headers, params=params)
return response.json()
示例用法

if name == "main":
    API_KEY = "YOUR_API_KEY_HERE"
    data = get_funding_data(API_KEY, max_days=30)
    for round in data.get("results", []):
        print(f"(round['company_name']) raised (round['funding_amount'])")
```



可用的数据 API 端点



-  **融资轮次**: `GET /v1/funding`
-  **裁员**: `GET /v1/layoffs`
-  **收购**: `GET /v1/acquisitions`
-  **IPO 申报**: `GET /v1/ipos`
-  **监管罚款**: `GET /v1/fines`



## 🤝 支持



由位于荷兰的独立创始人构建。如果您发现错误、有功能建议，或者只是想聊聊 Python 和 API，请随时联系我们：



-  📧 电子邮件: [info@parheliaweb.com](mailto:info@parheliaweb.com)
-  🌐 网站: [parheliaweb.com/zh/](https://parheliaweb.com/zh/)
