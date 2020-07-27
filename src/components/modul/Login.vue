/* eslint-disable no-console */
<template>
    <div class="s-right">
            <div class="r-logo">
                <img src="../../assets/img/logo.png" alt="logo">
            </div>
            <div class="r-heading">
                <h1>Login</h1>
                <p>Welcome back, please login<br>to your Account</p>
            </div>
            <form action="" class="r-form" @submit.prevent="goLogin">
                <div class="f-input">
                    <label for="username">USERNAME / EMAIL</label>
                    <input type="text" placeholder="Your Username" v-model="datas.email">
                </div>
                <div class="f-input">
                    <label for="pasowrd">PASSWORD</label>
                    <input type="text" placeholder="Your Password" v-model="datas.password">
                </div>

                <div class="r-opt">
                    <div class="opt-remember">
                        <input type="checkbox" checked="checked" v-model="datas.remember">
                        <label for="remember">Remember me</label>
                    </div>
                    <div class="opt-fpw">
                        <a href="#">Forgot Password</a>
                    </div>
                </div>
                <div class="r-button">
                    <button type="submit">Login</button>
                    <button class="btn-reg"><a href="#">Register</a></button>
                </div>
            </form>
            <div v-if="code === 0" class="flash-data display">
                <h3>{{ flashData }}</h3>
            </div>
            <div v-else-if="code === 1" class="flash-data success">
                <h3>{{ flashData }}</h3>
            </div>
            <div v-else-if="code === 2" class="flash-data gagal">
                <h3>{{ flashData }}</h3>
            </div>
             <div v-else-if="code === 3" class="flash-data gagal">
                <h3>{{ flashData }}</h3>
            </div>
        </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      datas: {
        email: '',
        password: '',
        remember: '',
      },
      flashData: false,
      code: 0,
      isTrue: false,

    };
  },
  methods: {
    goLogin() {
      const dataLog = this.datas;
      this.$store.dispatch('actionLogin', dataLog)
        .then((result) => {
          this.actionSuccess(result);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
    actionSuccess(res) {
      if (res.data.code === 1) {
        localStorage.token = res.data.response.token;
        localStorage.welcome = true;
        this.code = 1;
        this.flashData = 'Berhasil Login';
        setTimeout(() => {
          this.$router.replace(this.$route.query.redirect || '/dashboard');
        }, 1000);
      }
      if (res.data.code !== 1) {
        this.code = 2;
        this.flashData = 'Login Gagal';
      }
      if (res.data.response.is_active === 0) {
        this.needActive(res);
      }
    },
    needActive() {
      // eslint-disable-next-line no-console
      this.code = 3;
      this.flashData = 'Cek email untuk aktivasi akun!';
    },
  },
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
    position: relative;
}
.flash-data{
    position: absolute;
    bottom: 20px;
    right:0;
    width: 60%;
    height: 50px;
    border-radius: 1px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 1s;
}
.success{
    background-color: rgba(0, 179, 30, 0.883);
    transition: 1s;
}
.gagal{
    background-color: rgba(248, 0, 0, 0.7);
    transition: 1s;
}
.display{
    display:none!important;
    transition: 1s;
}
.flash-data h3{
    font-family: 'Airbnb Cereal App Bold';
    font-size: 20px;
    color: #fff;
    transition: 1s;
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
    font-family: 'Airbnb Cereal App Medium';
    font-size: 15px;
    color: #fff;
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
