import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 5c2044aad9878d3c9de119300662a56bbf6fdd32ec1bd9e49828209f190fedf2'
  }
})