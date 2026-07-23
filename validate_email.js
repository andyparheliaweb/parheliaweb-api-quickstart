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
