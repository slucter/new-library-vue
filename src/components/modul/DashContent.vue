<template>
    <section class="content-wrap">
        <div class="banner-jumbo">
            <h3><b>Book</b> is a <b>window</b>
                to the <b>world</b></h3>
        </div>

        <div class="category-pannel">
            <div v-for="myCat in categoryList" :key="myCat.id" class="box-category">
                <a v-on:click="clickCategory(myCat.category)">{{ myCat.category }}</a>
            </div>

        </div>
        <Heading />
        <div class="card-list">
            <Card
            v-for="dataw in (whatCategory ? filterCategory : filterBook)"
            :key="dataw.id"
            :thumb="dataw.image"
            :title="dataw.title"
            :author="dataw.author"
            :category="dataw.category"
            :params="dataw.uri_book"
            />
        </div>
        <!-- <Modal /> -->
    </section>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import Heading from '../small/HeadingSection.vue';
import Card from '../small/CardBook.vue';
// import Modal from '../small/ModalCRUD.vue';

export default {
  name: 'DashContent',
  data() {
    return {
      bookSkuy: [],
      categoryList: [
        {
          id: 1,
          category: 'Horor',
        },
        {
          id: 2,
          category: 'Romance',
        },
        {
          id: 3,
          category: 'Education',
        },
        {
          id: 4,
          category: 'Music',
        },
        {
          id: 5,
          category: 'Science',
        },
        {
          id: 6,
          category: 'Art',
        },
      ],
    };
  },
  components: {
    Heading,
    Card,
    // Modal,
  },
  computed: {
    ...mapState(['srcVal', 'whatCategory']),
    filterBook() {
      return this.bookSkuy.filter((e) => e.title.match(this.srcVal));
    },
    filterCategory() {
      return this.bookSkuy.filter((e) => e.category.match(this.whatCategory));
    },
  },
  methods: {
    getBooks() {
      axios.get(`${process.env.VUE_APP_URL}/api/library/book/`)
        .then((result) => {
          this.bookSkuy = result.data.result;
        });
    },
    clickCategory(value) {
      this.$store.commit('ON_CATEGORY', value);
    },
  },
  mounted() {
    this.getBooks();
  },
};
</script>

<style scoped>
.content-wrap{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 80px 0px 0 0px;
}

.banner-jumbo{
    width: 100%;
    height: 200px;
    background-color: rgb(86, 94, 131);
    display: flex;
    justify-content: center;
    align-items: center;
}

.banner-jumbo h3{
    font-family: 'Airbnb Cereal App Book';
    color: #fff;
    font-size: 45px;
    text-decoration: none;
    font-weight: 200;
}

.category-pannel{
    width: 100%;
    background-color: rgb(86, 94, 131);
    display: flex;
    /* padding: 10px 300px 10px 300px; */
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
.box-category{
    padding: 20px 30px 20px 30px;
    margin: 10px;
    height: 20px;
    display: flex;
    background-color: #fff;
    align-items: center;
    border-radius: 50px;
    box-shadow: -1px 5px 25px -6px rgba(0,0,0,.5);
    cursor: pointer;
}

.box-category a{
    text-decoration: none;
    font-family: 'Airbnb Cereal App Book';
    color: #000;
    font-size: 18px;
    text-decoration: none;
}
.card-list{
    width: 85%;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    padding-bottom: 50px;
}
</style>
