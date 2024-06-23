import axios from 'axios';
const cohereApi = axios.create({
    baseURL: 'https://api.cohere.com', // Your Cohere API endpoint
    headers: {
      'Authorization': 'Bearer i6gEYEaBF20ZbdZTofU9unDBtZC8npekHx51u8ne' // Replace with your actual API key
    }
  });
  
  cohereApi.post('/command', {
    text: "What is the capital of France?",
    model: "command"
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
