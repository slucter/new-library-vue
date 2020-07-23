import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: ['hello'],
    allBook: [],
    srcVal: '',
  },
  mutations: {
    SEARCH_VALUES(state, data) {
      state.srcVal = data;
    },
  },
  actions: {
    actionLogin(context, data) {
      return new Promise((resolve) => {
        axios.post('http://localhost:2000/api/library/user/login', data)
          .then((result) => {
            resolve(result);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
          });
      });
    },
  },
  modules: {
  },
});
