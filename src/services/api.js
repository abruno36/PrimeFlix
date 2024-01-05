import axios from 'axios';

//Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=fcbbf31507dbbaf66db119ed616fdb9e&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;