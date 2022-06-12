import axios from 'axios';

export default function handler(req, res) {
  const options = {
    method: 'GET',
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    },
  };

  axios
    .request(options)
    .then(response => {
      // console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(error => {
      // console.error(error);
      res.status(404).json({ message: 'Something went wrong' });
    });
}
