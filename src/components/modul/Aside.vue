<template>
    <aside id="aside-tgl">
        <div class="burger-section">
            <span v-on:click="btnBurger"></span>
        </div>
        <div class="profile-section">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/10f13510774061.560eadfde5b61.png" alt="profile">
            <h3>{{dataUser.fullname}}</h3>
        </div>
        <div class="search-section mobile-view">
            <input type="text" placeholder="cari buku">
            <button type="submit"></button>
        </div>
        <div class="menu-section">
            <div class="link-menunav">
                <router-link to="/loan">History</router-link>
            </div>

            <div class="link-menunav" v-if="token.role === 2">
                <a href="#" v-on:click="$emit('addBookClick')">Add Book</a>
            </div>

            <div class="link-menunav mobile-view">
                <a href="#">Bokmark</a>
            </div>

            <div class="link-menunav mobile-view">
                <a href="#">Explore</a>
            </div>

            <div class="link-menunav">
                <a @click="logOut" style="color: red; cursor: pointer;">Log Out</a>
            </div>
        </div>
    </aside>
</template>

<script>
import swal from 'sweetalert';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export default {
  name: 'Aside',
  data() {
    return {
      dataUser: '',
      token: '',
    };
  },
  methods: {
    btnBurger() {
      document.querySelector('aside').classList.toggle('aside-tgl');
      document.querySelector('.burger-section').classList.toggle('burger-tgl');
    },
    logOut() {
      localStorage.removeItem('token');
      swal('Bye Bye ^_^').then((l) => {
        if (l) {
          this.$router.push('/login');
        } else {
          this.$router.push('/login');
        }
      });
    },
    async getDataUser() {
      const tokenLocal = localStorage.token;
      const tokenw = await jwt.verify(tokenLocal, 'irhashGans').id;
      axios.get(`${process.env.VUE_APP_URL}/api/library/user/search/${tokenw}`)
        .then((result) => {
          // eslint-disable-next-line no-console
        //   console.log(result);
          // eslint-disable-next-line prefer-destructuring
          this.dataUser = result.data.rst[0];
        });
    },
  },
  async mounted() {
    this.getDataUser();
    const myToken = localStorage.token;
    const tokenKey = await jwt.verify(myToken, 'irhashGans');
    this.token = tokenKey;
    // eslint-disable-next-line no-console
    console.log(process.env.VUE_APP_URL);
  },
};
</script>

<style scoped>
aside{
    display: flex;
    height: 100vh;
    width: 20vw;
    background-color: rgb(255, 255, 255);
    flex-direction: column;
    position: fixed;
    flex-direction: column;
    z-index: 100;
    box-shadow: 7px 0 19px -4px rgba(0,0,0,.3);
    left: -50%;
    transition: 1s;
}
.aside-tgl{
    left:0!important;
}

.burger-section{
    width: 100%;
    height: 90px;
    background-color: rgb(255, 255, 255);
    display: flex;
    position: relative;
}
.burger-tgl span{
    right: 20px!important;
    position: absolute;
    background-color: transparent!important;
}

.burger-tgl span::before{
    content: '';
    width: 70%!important;
    height: 100%;
    background-color: rgb(0, 0, 0);
    position: absolute;
    top: 0 !important;
    transform: rotate(45deg);
     transition: 2s;
}
.burger-tgl span::after{
    content: '';
    width: 70%!important;
    height: 100%;
    background-color: rgb(0, 0, 0);
    position: absolute;
    top: 0 !important;
    transform: rotate(-45deg);
    transition: 2s;
}
.burger-section span{
    width: 50px;
    height: 5px;
    background-color: rgba(0,0,0,1);
    position: absolute;
    right: -170%;
    top: 42px;
    transition: 0s;
    cursor: pointer;
}
.burger-section span::before{
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    position: absolute;
    top:-10px;
    transition: 1s;
}
.burger-section span::after{
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    position: absolute;
    top:10px;
    transition: 1s;
}

.profile-section{
    width: 100%;
    flex: 1;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
}
.profile-section img{
    width: 150px;
    height: 150px;
    border-radius: 100px;

}
.profile-section h3{
    font-size: 30px;
    font-family: 'Airbnb Cereal App Bold';
    margin-top: 15px;
}
.search-section{
    width: 100%;
    flex: .5;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
}
.search-section input{
    width: 70%;
    height: 60px;
    outline: none;
    border-left: 1px solid #cacaca;
    border-top: 1px solid #cacaca;
    border-bottom: 1px solid #cacaca;
    border-right: none;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    padding-right: 20px;
    padding-left: 10px;
    font-family: 'Airbnb Cereal App Medium';
    color: #000;
    font-size: 17px;

}
.search-section button{
    width: 20%;
    height: 60px;
    outline: none;
    border-right: 1px solid #cacaca;
    border-top: 1px solid #cacaca;
    border-bottom: 1px solid #cacaca;
    border-left: none;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background-image: url('../../assets/img/magnifying-glass.png');
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: 25px;
    background-position-x: 20px;
    background-position-y: 12px;
}
.menu-section{
    width: 100%;
    flex: 3;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.link-menunav{
    display: block;
    width: 90%;
    background-color: rgb(255, 255, 255);
    padding: 10px 5px 10px 0px;
}
.link-menunav a{
    font-family: 'Airbnb Cereal App Medium';
    color: #000;
    font-size: 25px;
    text-decoration: none;
}

.mobile-view{
    display: none;
}
</style>
