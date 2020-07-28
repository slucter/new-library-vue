<template>
    <div class="wrap-lb">
        <div class="s-left">
            <div class="l-top">
                <h1>Book is a window<br>to the world</h1>
            </div>
            <div class="l-bottom">
                <h3>Photo by George Pandirate on Unsplash</h3>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  mounted() {
    if (localStorage.token) {
      this.$router.push('/dashboard');
    }
  },
};
</script>

<style scoped>
.wrap-lb{
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: aquamarine;
}

.s-left{
    width: 60vw;
    height: 100%;
    background-image: url('../assets/img/table-lamp-near-bookshelves-1907786.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    position: relative;
}
.s-left::after{
    content: '';
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    top:0;
    right: 0;
    position: absolute;
}
.l-top{
    width: 100%;
    height: 50%;
    position: relative;
    z-index: 2;
    /* background-color: blue; */
}
.l-top h1{
    font-family: 'Airbnb Cereal App Medium';
    color: #fff;
    font-size: 55px;
    margin: 50px;
}
.l-bottom{
    width: 100%;
    height: 50%;
    /* background-color: rgb(42, 42, 83); */
    display: flex;
    align-items: flex-end;
    position: relative;
    z-index: 2;
}
.l-bottom h3{
    font-family: 'Airbnb Cereal App Medium';
    color: #fff;
    font-size: 15px;
    margin: 50px;
}
</style>
