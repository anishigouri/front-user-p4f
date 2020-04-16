import axios from 'axios-jsonp-pro';

export default function callApi(url, dispatch) {
  return new Promise((resolve, reject) => {
    dispatch({ type: 'LOADING', data: true });
    axios.jsonp(`https://jsonplaceholder.typicode.com/${url}`).then((response) => {
      dispatch({ type: 'LOADING', data: false });
      resolve(response);
    }).catch((error) => {
      dispatch({ type: 'LOADING', data: false });
      alert('Erro de conexão com o servidor');
      reject(error);
    });
  });
}
