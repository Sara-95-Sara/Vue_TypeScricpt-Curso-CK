import axios, { AxiosHeaders } from "axios";

const fakeShopApi = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/',
    // params: {
    //     key: 'lasdkfjlsdkjfgñslkhjgvlfdskhgñ349u039dfv8fhrh0943'
    // },
    // headers: {
    //     'x-token': 'kodsjflksdjfklsdjfklñsdj'
    // }
});
fakeShopApi.interceptors.request.use((config) => {
    // TODO
    const token = localStorage.getItem('token') ?? ''; // ?? si es null sea vacio.
    if(token) {
      (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`); // JWT
    } else {
      return config;
    }
    
    return config;
  });
export default fakeShopApi;