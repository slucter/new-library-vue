<template>
    <div>
        <Ndash />
        <Aside />
        <div class="wrap-loan">
            <h1>History Loan</h1>
            <div class="head-table">
                <div class="cm-h flex-05">
                    <h3>No</h3>
                </div>
                <div class="cm-h flex-2">
                    <h3>Buku</h3>
                </div>
                <div class="cm-h flex-2">
                    <h3>Peminjam</h3>
                </div>
                <div class="cm-h flex-1">
                    <h3>Tanggal Pinjam</h3>
                </div>
                <div class="cm-h flex-1">
                    <h3>Pengembalian Buku</h3>
                </div>
                <div class="cm-h flex-1" v-if="token.role === 2">
                    <h3>Aksi</h3>
                </div>
            </div>

            <div class="head-table tbl"
            v-for="data in loans" :key="data.id_loan">
                <div class="cm-h flex-05">
                    <h3 class="lighter">{{countd}}</h3>
                </div>
                <div class="cm-h flex-2">
                    <h3 class="lighter">{{data.title}}</h3>
                </div>
                <div class="cm-h flex-2">
                    <h3 class="lighter">{{data.fullname}}</h3>
                </div>
                <div class="cm-h flex-1">
                    <h3 class="lighter">{{data.start_at === '0' ? 'pending' : data.start_at}}</h3>
                </div>
                <div class="cm-h flex-1">
                    <h3 class="lighter">{{data.end_at === '0' ? 'pending' : data.end_at}}</h3>
                </div>
                <div class="cm-h flex-1" v-if="token.role === 2">
                    <button @click="confirmBook(data)"
                    :class="data.confirmed === 0 ? 'unConfirm': 'confirmed'">Confirm</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import jwt from 'jsonwebtoken';
import swal from 'sweetalert';
import Ndash from '../components/modul/NavDashboard.vue';
import Aside from '../components/modul/Aside.vue';

export default {
  data() {
    return {
      loans: '',
      countd: 1,
      token: '',
    };
  },
  components: {
    Ndash,
    Aside,
  },
  methods: {
    confirmBook(data) {
      if (data.confirmed !== 1) {
        axios.post(`${process.env.VUE_APP_URL}/api/library/loan/confirm/${data.id_loan}`)
          .then((result) => {
            if (result.data.result === 1) {
              swal('Loan Confirmed!').then((rst) => {
                if (rst) {
                  this.$router.go();
                }
              });
            }
          });
      } else {
        swal('Oops!', 'Already Confirmed', 'warning');
      }
    },
  },
  async mounted() {
    const myToken = localStorage.token;
    const tokenKey = await jwt.verify(myToken, 'irhashGans');
    this.token = tokenKey;
    if (tokenKey.role === 2) {
      axios.get(`${process.env.VUE_APP_URL}/api/library/loan/all`).then((result) => {
        this.loans = result.data.loans;
      });
    } else {
      axios.get(`${process.env.VUE_APP_URL}/api/library/loan/id/${tokenKey.id}`)
        .then((rst) => {
          this.loans = rst.data.loans;
        });
    }
  },
};
</script>

<style scoped>
.confirmed{
    /* background-color: red!important; */
    color:rgb(200, 200, 200)!important;
    border: 1px solid rgb(185, 185, 185)!important;
    cursor: not-allowed!important;
}
.wrap-loan{
    width: 90%;
    /* background-color: rgb(104, 60, 60); */
    display: flex;
    margin: 0px auto;
    position: relative;
    padding-top: 140px;
    flex-direction: column;
}
.wrap-loan h1{
    font-family: Arial, Helvetica, sans-serif;
}
.head-table{
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: flex;
    box-shadow: 0px 0px 20px 2px rgba(0,0,0,.1);
    margin-top: 20px;
}
.tbl{
    margin-top:0!important;
}
.cm-h{
    border: 1px solid rgb(206, 206, 206);
    display: flex;
    justify-content: center;
    align-items: center;
}
.cm-h button{
    padding: 10px;
    border: 1px solid rgb(32, 32, 32);
    background: none;
    margin: 5px;
    border-radius: 10px;
    cursor: pointer;
}
.cm-h h3{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
}
.flex-05{
    flex: 0.5!important;
}
.flex-1{
    flex: 1!important;
}
.flex-2{
    flex: 2!important;
}
.lighter{
    font-size: 17px!important;
    font-weight: lighter;
}
</style>
