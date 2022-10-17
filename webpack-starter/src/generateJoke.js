import axios from 'axios';

function generateJoke() { 

  const config = { 
    headers: {
      Accept: 'application/json',
    }
  };

  axios.get('https://icanhazdadjoke.com', config).then(resp => { 
    document.getElementById('joke').innerHTML = resp.data.joke;
  });
  return "I don't trust stairs. They're always up to something";
}

export default generateJoke;