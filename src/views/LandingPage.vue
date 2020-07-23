<template>
    <div class="wrap">
        <div class="container">
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.wrap{
    display: flex;
    width: 100vw;
    height: 50vh;
    justify-content: center;
    align-items: center;
}
.container{
    width: 300px;
    height: 100px;
    background-color: rgba(0,0,0,.2);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.container:before{
    content:'';
    width: 20%;
    height: 50px;
    position: absolute;
    background-color: rgba(0,0,0,.4);
    left:-30px;
    top:85px;
}
.container:after{
    content:'';
    width: 20%;
    height: 50px;
    position: absolute;
    background-color: rgba(0,0,0,.4);
    right:-30px;
    bottom:85px;
}
.wrap a{
    padding:20px 50px 20px 50px;
    border: 2px solid #000;
    border-radius: 10px;
    text-decoration: none;
    color: #000;
    font-size: 15px;
    font-family: 'Courier New', Courier, monospace;
    margin: 10px;
}
</style>
