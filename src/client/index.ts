import * as Vue from 'vue';
import App from './App.vue';
// import axios from 'axios';
const axios = require('axios').default;

const trans: Array<Object> = [];

new Vue({
  el: '#app',
  components: { App },
  template: '<App v-bind:trans="trans"/>',
  data() {
    return {
      trans
    }
  },
  methods: {
    getAllTrans() {
      axios.get('/api')
        .then((res: any) => {
          this.trans = res.data.slice(0, 15);
        })
        .catch((err: String) => console.error(err));
    }
  },
  created() {
    this.getAllTrans();
  }

});
