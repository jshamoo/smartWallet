import * as Vue from 'vue';
import App from './App.vue';
const axios = require('axios').default;

const trans: Array<Object> = [];
const categories: Array<Object> = [];

new Vue({
  el: '#app',
  components: { App },
  template: '<App v-bind:trans="trans" v-bind:categories="categories"/>',
  data() {
    return {
      trans,
      categories,
    }
  },
  methods: {
    getAllTrans() {
      axios.get('/api')
        .then((res: any) => {
          console.log(res.data[0]);
          this.trans = res.data.slice(0, 15);
        })
        .catch((err: String) => console.error(err));
    },
    getAllCate() {
      axios.get('/api/cate')
        .then((res: any) => {
          this.categories = res.data;
        })
        .catch((err: String) => console.error(err));
    }
  },
  created() {
    this.getAllTrans();
    this.getAllCate();
  }

});
