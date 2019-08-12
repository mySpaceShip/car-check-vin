import Vue from 'vue';
import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

axios.interceptors.response.use(response => response, (error) => {
  if (error.response === undefined) {
    Vue.notify({
      type: 'error',
      title: 'Ошибка на уровне сети',
      text: 'Произошла сетевая ошибка, свяжитесь с администратором системы',
    });

    return Promise.reject(error);
  }
  if (error.response.status === 422) {
    Vue.notify({
      type: 'error',
      title: 'Введены некорректные данные',
      text: 'Проверьте все поля и исправьте ошибки',
    });

    return Promise.reject(error);
  }
  if (error.response.status >= 500) {
    Vue.notify({
      type: 'error',
      title: 'Произошла ошибка при обработке запроса',
      text: 'Скорее всего ваши данные не были обработаны, сообщите о данной проблеме администратору',
    });

    return Promise.reject(error);
  }

  if (error.response.status >= 404) {
    Vue.notify({
      type: 'error',
      title: 'Страница не найдена',
      text: 'Запрашиваемая информация не найдена на нашем сервере',
    });

    return Promise.reject(error);
  }

  return Promise.reject(error);
});
