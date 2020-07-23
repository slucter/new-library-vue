<template>
    <div class="card-book">
                <div class="thumb-book">
                    <a href="#">
                        <img
                        :src="thumb"
                        alt="thumb">
                    </a>
                </div>
                <div class="title-book">
                    <a href="#">{{ title }}</a>
                </div>
                <div class="about-book">
                    <div class="wrap-detail-card">
                        <div class="wdc-left">
                            <h3>Author</h3>
                        </div>
                        <div class="wdc-right">
                            <a href="#">{{ author }}</a>
                        </div>
                    </div>

                    <div class="wrap-detail-card">
                        <div class="wdc-left">
                            <h3>Publisher</h3>
                        </div>
                        <div class="wdc-right">
                            <a href="#">{{ publisher }}</a>
                        </div>
                    </div>

                    <div class="wrap-detail-card">
                        <div class="wdc-left">
                            <h3>Category</h3>
                        </div>
                        <div class="wdc-right">
                            <a href="#">{{ category }}</a>
                        </div>
                    </div>

                    <div class="wrap-detail-card">
                        <div class="wdc-left">
                            <h3>Date</h3>
                        </div>
                        <div class="wdc-right">
                            <a href="#">{{ date }}</a>
                        </div>
                    </div>
                </div>
                <div class="buttons-card">
                    <router-link :to="'/details/'+params">Details</router-link>
                    <a href="#">Borrow</a>
                </div>
            </div>
</template>

<script>
export default {
  props: ['thumb', 'title', 'author', 'publisher', 'category', 'date', 'params'],
};
</script>

<style scoped>
.card-book{
    width: 300px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;
    box-shadow: -1px 5px 25px -6px rgba(0,0,0,.8);
    margin: 20px;
}
.thumb-book{
    width: 100%;
    height: 200px;
    background-color: seagreen;
    display: flex;
}
.thumb-book img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.title-book{
    width: 100%;
    background-color: rgb(246, 246, 246);
    /* padding: 5px; */
    margin-bottom: 10px;
}
.title-book a{
    font-family: 'Airbnb Cereal App Book';
    color: #000;
    font-size: 20px;
    text-decoration: none;
}

.about-book{
    width: 100%;
    height: 180px;
    /* background-color: slategray; */
    display: flex;
    flex-direction: column;
}
.wrap-detail-card{
    width: 100%;
    height: 40px;
    display: flex;
    /* background-color: saddlebrown; */
    border-bottom: 2px solid #fff;
}
.wdc-left{
    width: 40%;
    height: 100%;
    background-color: rgb(230, 230, 230);
    padding-left: 20px;
    display: flex;
    align-items: center;
}
.wdc-left h3{
    font-family: 'Airbnb Cereal App Bold';
    color: #000;
    font-size: 16px;
}
.wdc-right{
    width: 60%;
    height: 100%;
    background-color: rgb(243, 243, 243);
    display: flex;
    align-items: center;
}
.wdc-right a{
    font-family: 'Airbnb Cereal App Book';
    color: #000;
    font-size: 14px;
    text-decoration: none;
}

.buttons-card{
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
}
.buttons-card a{
    text-decoration: none;
    border: 1px solid rgba(0,0,0,.3);
    color: rgb(80, 80, 80);
    padding: 0px 40px 0px 40px;
    line-height: 70px;
    font-family: 'Airbnb Cereal App Book';
    font-size: 17px;
    text-decoration: none;
}
</style>
