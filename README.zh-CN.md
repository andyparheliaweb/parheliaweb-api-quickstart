[English](README.md) | [简体中文](README.zh-CN.md)

# ParheliaWeb API 快速入门

60秒内快速开始使用 ParheliaWeb API。

本仓库包含为我们透明、开发者优先的 API 提供的可直接复制粘贴的代码片段。没有黑盒操作，没有企业级溢价，也没有隐藏费用。

## 🔗 官方资源

- [完整 API 文档](https://parheliaweb.com/zh/docs) - 包含端点参考、响应架构和错误代码。
- [透明定价](https://parheliaweb.com/zh/email-pricing) - 统一、可预测的定价。无需"联系销售"。
- [为什么选择 ParheliaWeb？](https://parheliaweb.com/zh/why-choose-us) - 了解我们与其他普通验证 API 的对比（真实 SMTP 检查、各阶段计时、符合 GDPR）。

## 🚀 快速开始：邮箱验证

从[开发者门户](https://parheliaweb.com/zh/register)获取您的免费 API 密钥（每月 100 次免费验证）。

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
    使用 ParheliaWeb API 验证电子邮件地址。
    获取免费 API 密钥: https://parheliaweb.com/zh/register
    """
    url = "https://parheliaweb.com/v1/email/validate"
    headers = {
        "x-api-key": api_key,
        "Content-Type": "application/json"
    }
    payload = {"email": email}
    
    response = requests.post(url, json=payload, headers=headers)
    return response.json()

# 示例用法
if __name__ == "__main__":
    API_KEY = "YOUR_API_KEY_HERE"
    result = validate_email("test@example.com", API_KEY)
    print(result)
```

### Node.js

```javascript
const axios = require('axios');

/**
 * 使用 ParheliaWeb API 验证电子邮件地址。
 * 获取免费 API 密钥: https://parheliaweb.com/zh/register
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
    console.error('验证错误:', error.response?.data || error.message);
    throw error;
  }
};

// 示例用法
const API_KEY = 'YOUR_API_KEY_HERE';
validateEmail('test@example.com', API_KEY)
  .then(result => console.log(result))
  .catch(err => console.error(err));

module.exports = { validateEmail };
```

## 🧠 ParheliaWeb 的与众不同之处

大多数邮箱验证 API 只返回简单的 valid（有效）或 invalid（无效）布尔值。我们不这样做。

因为 Microsoft 和 Yahoo 等邮件提供商为了防止目录收集攻击，在 SMTP 握手期间几乎接受所有地址，所以简单的布尔值通常是一个谎言。我们的 API 返回透明的风险评分和明确的风险因素（例如 `opaque_provider`、`catch_all_domain`），为您提供做出发送/不发送决策所需的准确数据。

## 📦 批量处理

需要验证列表？使用我们的批量端点。在单个请求中最多发送 100 个电子邮件地址：

```bash
curl -X POST "https://parheliaweb.com/v1/email/validate/batch" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"emails": ["test1@example.com", "test2@example.com"]}'
```

## 🤝 支持

由位于荷兰的独立创始人构建。如果您发现错误、有功能建议，或者只是想聊聊 Python 和 API，请随时联系我们：

- 📧 电子邮件: info@parheliaweb.com
- 🌐 网站: [parheliaweb.com/zh](https://parheliaweb.com/zh)
