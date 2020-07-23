<template>
    <nav>
        <div class="menu-cat">
            <div class="cat-ls">
                <a>All Categories</a>
            </div>
            <div class="cat-ls">
                <a>All Time</a>
            </div>
        </div>
        <form class="nav-search">
            <input type="text" v-model="searchValuew" placeholder="Search ...">
            <button type="submit"></button>
        </form>
        <div class="nav-logo">
            <img src="../../assets/img/logo.png" alt="logo">
            <a href="#">Library</a>
        </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
    //   searchValuew: '',
    };
  },
  computed: {
    searchValuew: {
      get() {
        return this.$store.state.srcVal;
      },
      set(value) {
        this.$store.commit('SEARCH_VALUES', value);
      },
    },
  },
};
</script>

<style scoped>
nav{
    width: 100vw;
    height: 90px;
    background-color: #fff;
    display: flex;
    position: fixed;
    box-shadow: 0px 5px 20px 10px rgba(0,0,0,0.2);
}

.menu-cat{
    flex: 1.5;
    height: 100%;
    /* background-color: rosybrown; */
    display: flex;
    justify-content: flex-end;
}
.cat-ls{
    /* background-color: royalblue; */
    padding: 5px;
    align-items: center;
    display: flex;
    margin-left: 10px;
}
.cat-ls a{
    font-family: 'Airbnb Cereal App Medium';
    color: #000;
    font-size: 20px;
}
.nav-search{
    flex: 2;
    height: 100%;
    /* background-color: rgb(233, 147, 147); */
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.nav-search input{
    width: 80%;
    height: 60%;
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
.nav-search button{
    width: 9%;
    height: 63%;
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
.nav-logo{
    flex: 1;
    height: 100%;
    /* background-color: rgb(255, 86, 86); */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
}
.nav-logo img{
    width: 70px;
    height: 70px;
}
.nav-logo a{
    font-family: 'Airbnb Cereal App Bold';
    color: #000;
    font-size: 30px;
    text-decoration: none;
}

@media(max-width: 414px){
      .menu-cat{
        display: none;
    }
    .nav-search{
        display: none;
    }
    .nav-logo{
        flex: 1;
    }
    .nav-logo img{
        width: 40px;
        height: 40px;
    }
    .nav-logo a{
        font-family: 'Airbnb Cereal App Bold';
        color: #000;
        font-size: 20px;
        text-decoration: none;
    }
    .mobile-view{
        display: flex;
    }
}
</style>
