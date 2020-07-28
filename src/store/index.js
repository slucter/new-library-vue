import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: ['hello'],
    allBook: [],
    srcVal: '',
    whatCategory: '',
  },
  mutations: {
    SEARCH_VALUES(state, data) {
      state.srcVal = data;
    },
    ON_CATEGORY(state, data) {
      state.whatCategory = data;
      // eslint-disable-next-line no-console
      console.log(state.whatCategory);
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
