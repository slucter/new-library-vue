<template>
    <section class="content-wrap">
        <div class="banner-jumbo">
            <h3><b>Book</b> is a <b>window</b>
                to the <b>world</b></h3>
        </div>

        <div class="category-pannel">
            <div class="box-category">
                <a href="#">COMEDY</a>
            </div>
            <div class="box-category">
                <a href="#">ROMANCE</a>
            </div>
            <div class="box-category">
                <a href="#">EDUCATION</a>
            </div>
            <div class="box-category">
                <a href="#">MUSIC</a>
            </div>
            <div class="box-category">
                <a href="#">ART & MUSIC</a>
            </div>
            <div class="box-category">
                <a href="#">HOROR</a>
            </div>
            <div class="box-category">
                <a href="#">SCIENCE</a>
            </div>
            <div class="box-category">
                <a href="#">RELIGION</a>
            </div>
        </div>
        <Heading />
        <div class="card-list">
            <Card
            v-for="dataw in filterBook"
            :key="dataw.id"
            :thumb="dataw.image"
            :title="dataw.title"
            :author="dataw.author"
            :publisher="dataw.publisher"
            :category="dataw.category"
            :date="dataw.created_at.slice(0,9)"
            :params="dataw.uri_book"
            />
        </div>
        <Modal />
    </section>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import Heading from '../small/HeadingSection.vue';
import Card from '../small/CardBook.vue';
import Modal from '../small/ModalCRUD.vue';

export default {
  name: 'DashContent',
  data() {
    return {
      bookSkuy: [],
    };
  },
  components: {
    Heading,
    Card,
    Modal,
  },
  computed: {
    ...mapState(['srcVal']),
    filterBook() {
      return this.bookSkuy.filter((e) => e.title.match(this.srcVal));
    },

  },
  methods: {
    getBooks() {
      axios.get('http://localhost:2000/api/library/book/')
        .then((result) => {
          this.bookSkuy = result.data.result;
        });
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
}

.box-category a{
    text-decoration: none;
    font-family: 'Airbnb Cereal App Book';
    color: #000;
    font-size: 18px;
    text-decoration: none;
}
.card-list{
    width: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
