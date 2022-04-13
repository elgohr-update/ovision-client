import axios from 'axios';

class Api {
  fetcher = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  getRandomFox() {
    return this.fetcher.get('https://randomfox.ca/floof/');
  }
}

export default new Api();
