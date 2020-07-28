<template>
    <div class="card-book">
      <div class="thumb-book">
        <router-link :to="'/details/'+params" class="available">
          Available
        </router-link>
        <router-link :to="'/details/'+params">
          <img :src="thumb" alt="avenger">
        </router-link>
      </div>
      <div class="desc-card">
        <h3>{{ title }}</h3>
        <div class="card-bottom">
          <h3><i class="fas fa-bookmark"></i></h3>
          <p>{{ author }} | <b>{{ category }}</b></p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['thumb', 'title', 'author', 'category', 'params'],
};
</script>

<style scoped>
.card-book{
      width: 300px;
      box-shadow: 0px 0px 20px 2px rgba(0,0,0,.1);
      display:  flex;
      flex-direction: column;
      justify-content: center;
      margin: 20px 0 0 0;
    }
    .thumb-book{
      width: 100%;
      height: 300px;
      background: #cacaca;
      display: flex;
      position: relative;
    }
    .thumb-book img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .thumb-book a{
      text-decoration: none;
      color: #fff;
      font-family: arial;
    }
    .available{
      background: red;
      position: absolute;
      right: 7px;
      top:7px;
      width: 100px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
    }
    .desc-card{
      width: 100%;
      height: 75px;
      display: flex;
      flex-direction: column;
    }
    .desc-card h3{
      /* background: brown; */
      font-family: arial;
      font-size: 20px;
      padding: 0;
      margin: 7px 3px 5px 3px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .desc-card .card-bottom{
      width: 100%;
      height: 50%;
      /* background: #caca; */
      display: flex;
      position: relative;
    }
    .desc-card .card-bottom p{
      font-family: arial;
      font-size: 13px;
      margin: 7px 3px 5px 3px;
      color: rgba(0,0,0,.8)
    }
    .desc-card .card-bottom h3{
      position: absolute;
      font-size: 20px;
      right: 10px;
      bottom: 0px;
      cursor: pointer;
    }
</style>
