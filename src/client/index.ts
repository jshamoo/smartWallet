import * as Vue from 'vue';
import App from './App.vue';
const axios = require('axios').default;


interface Category {
  budget: string,
  createdAt: string,
  id: number,
  name: string,
  updatedAt: string,
}

interface Record {
  Category: Category,
  CategoryId: number,
  amount: string,
  createdAt: string,
  date: string,
  description: string,
  id: number,
  updatedAt: string,
}

// interface SelectedCategories {
//   [id: number]: string,
// };
// {1: Grocery, 2: Grocery: 3}

const trans: Array<Record> = [];
const categories: Array<Category> = [];

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
          this.trans = res.data.slice(0, 15);
        })
        .catch((err: string) => console.error(err));
    },
    getAllCate() {
      axios.get('/api/cate')
        .then((res: any) => {
          this.categories = res.data;
        })
        .catch((err: string) => console.error(err));
    },
  },
  created() {
    this.getAllTrans();
    this.getAllCate();
  }

});
