import axios from 'axios';

export default function handler(req, res) {
  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
      from_currency: req.body.from_currency,
      function: 'CURRENCY_EXCHANGE_RATE',
      to_currency: req.body.to_currency,
    },
    headers: {
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    },
  };

  axios
    .request(options)
    .then(response => {
      console.log(response.data);
      res.status(200).json({
        exchangeRate:
          response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'],
      });
    })
    .catch(error => {
      res.status(500).json({ message: 'Internal Server Error' });
    });
}
