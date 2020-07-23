<template>
    <div class="s-right">
            <div class="r-logo">
                <img src="../../assets/img/logo.png" alt="logo">
            </div>
            <div class="r-heading">
                <h1>Register</h1>
                <p>Welcome back, please Register<br>for login to your Account</p>
            </div>
            <form action="" class="r-form">
                <div class="f-input">
                    <label for="fullname">FULL NAME</label>
                    <input type="text" placeholder="Your Full Name" name="fullname">
                </div>
                <div class="f-input">
                    <label for="username">USERNAME</label>
                    <input type="text" placeholder="Your Username" name="username">
                </div>
                <div class="f-input">
                    <label for="email">EMAIL</label>
                    <input type="text" placeholder="Your Email" name="email">
                </div>
                <div class="f-input">
                    <label for="password">PASSWORD</label>
                    <input type="text" placeholder="Your Password" name="password">
                </div>

                <div class="r-button">
                    <button type="submit"><a href="#">Register</a></button>
                    <button class="btn-reg"><a href="#">Login</a></button>
                </div>
            </form>
        </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.s-right{
    width: 40vw;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
}
.r-logo{
    width: 100%;
    height: 100px;
    /* background-color: rosybrown; */
    display: flex;
    justify-content: flex-end;
    /* padding-right: 30px; */
}
.r-logo img{
    margin-right: 30px;
}

.r-heading{
    width: 90%;
    height: 160px;
    /* background-color: salmon; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.r-heading h1{
    font-family: 'Airbnb Cereal App Bold';
    font-size: 50px;
    color: rgba(0, 0, 0, 0.8)
}
.r-heading p{
    font-family: 'Airbnb Cereal App Medium';
    font-size: 17px;
    color: rgba(0, 0, 0, 0.8)
}

.r-form{
    width: 90%;
    /* background-color: royalblue; */
    display: flex;
    flex-direction: column;
}
.f-input{
    width: 90%;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    justify-content: space-between;
}
.f-input input{
   height: 50px;
   border: none;
   outline: none;
   font-family: 'Airbnb Cereal App Medium';
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5)
}
.f-input label{
    height: 20px;
    font-family: 'Airbnb Cereal App Bold';
    font-size: 17px;
    color: rgba(0, 0, 0, 0.5)

 }

 .r-opt{
     width: 90%;
     height: 50px;
     /* background-color: rgb(77, 77, 77); */
     display: flex;
 }
 .opt-remember{
     flex: 1;
     height: 100%;
     /* background-color: saddlebrown; */
     display: flex;
     align-items: center;
 }
 .opt-remember input{
     width: 30px;
     height: 20px;
 }
 .opt-remember label{
    font-family: 'Airbnb Cereal App Medium';
    font-size: 15px;
    /* line-height: 30px; */
 }
 .opt-fpw{
    flex: 1;
    height: 100%;
    /* background-color: rgb(180, 117, 72); */
    justify-content: flex-end;
    align-items: center;
    display: flex;
    padding-right: 30px;
}
.opt-fpw a{
    font-family: 'Airbnb Cereal App Medium';
    font-size: 15px;
    color: rgba(0, 0, 0, 0.8)
}

.r-button{
    width: 90%;
    height: 90px;
    /* background-color: seagreen; */
    display: flex;
    align-items: center;
}
.r-button button{
    display: block;
    height: 50px;
    width: 110px;
    border: none;
    outline: none;
    background-color: #000;
    margin-right: 10px;
    border-radius: 7px;
}
.r-button button a{
    font-family: 'Airbnb Cereal App Medium';
    font-size: 15px;
    color: #fff;
}
.btn-reg{
    background-color: transparent!important;
    border: 2px solid black!important;
}
.btn-reg a{
    color: #000!important;
}
</style>
