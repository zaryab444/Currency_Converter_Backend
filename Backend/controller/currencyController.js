// controllers/currencyController.js
const axios = require('axios');

const apiUrl = 'https://api.freecurrencyapi.com/v1/latest';

exports.convertCurrency = async (req, res) => {
  try {
    const { from, to } = req.query;
    const apiKey = process.env.API_KEY;
    const response = await axios.get(`${apiUrl}?apikey=${apiKey}&base_currency=${from}&currencies=${to}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching currency data');
  }
};
