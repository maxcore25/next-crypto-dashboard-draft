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
      // setArticles(response.data.slice(0, 7));
      res.status(200).json(response.data);
    })
    .catch(error => {
      console.error(error);
    });

  // res.status(200).json({ name: 'crypto-news' });
}
