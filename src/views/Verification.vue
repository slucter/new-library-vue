<template>
    <div class="wrap-verif">
    <h2>Verification {{status}} !</h2>
    <p v-if="response === 200">
        Thanks for confirm the registration account from MacaBook Library.
        <br>Now you can find some book for your loan
    </p>
     <p v-else-if="response === 201">
         There is an error on the proccess.
    </p>
    <p style="color: rgba(0,0,0,.3); margin-top: 20px;">
        This is will automately redirect to login page</p>
</div>
</template>

<script>
import axios from 'axios';
import jwt from 'jsonwebtoken';
import swal from 'sweetalert';

export default {
  data() {
    return {
      response: 0,
      status: '',
    };
  },
  async mounted() {
    const md5 = localStorage.procVerif;
    const tokenya = localStorage.token;
    const prms = this.$route.params.salting;
    const hash = await jwt.verify(md5, 'irhashGans').md5;
    if (prms.match(hash)) {
      this.status = 'Success';
      this.response = 200;
      axios.get(`${process.env.VUE_APP_URL}/api/library/user/updateVerify/?token=${tokenya}`)
        .then((rst) => {
          if (rst.data.status === 200) {
            swal('Silahkan Login').then((r) => {
              if (r) {
                localStorage.removeItem('procVerif');
                localStorage.removeItem('token');
                this.$router.push('/login');
              }
            });
          } else {
            swal('Opps Terjadi Token Error!');
          }
        });
    } else {
      this.response = 201;
      this.status = 'Failed';
      localStorage.removeItem('procVerif');
      localStorage.removeItem('token');
      setTimeout(() => {
        this.$router.push('/register');
      }, 2000);
    }
  },
};
</script>
<style scoped>
 h2{
       font-family: arial;
       margin-bottom: 20px;
     }
     p{
       font-family: arial;
     }
     .wrap-verif{
       background: #c3ffbd;
       padding: 50px;
     }
</style>
