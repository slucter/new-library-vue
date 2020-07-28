<template>
  <div>
    <Ndash />
    <Aside @addBookClick="addBook"/>
    <Content />
    <Modal @closeModalClick="modalClose"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import swal from 'sweetalert';
import Ndash from '../components/modul/NavDashboard.vue';
import Aside from '../components/modul/Aside.vue';
import Content from '../components/modul/DashContent.vue';
import Modal from '../components/small/ModalCRUD.vue';

export default {
  data() {
    return {
      welcome: 1,
    };
  },
  components: {
    Ndash,
    Aside,
    Content,
    Modal,
  },
  computed: {
    ...mapState(['addStatus']),
  },
  methods: {
    addBook() {
      document.querySelector('.modal-layer').classList.add('show-modal-layer');
    },
    modalClose() {
      document.querySelector('.modal-layer').classList.remove('show-modal-layer');
    },
  },
  mounted() {
    if (localStorage.token) {
      if (localStorage.welcome) {
        swal('Welcome Administrator!')
          .then((t) => {
            if (t) {
              localStorage.removeItem('welcome');
            } else {
              localStorage.removeItem('welcome');
            }
          });
      } else {
        // eslint-disable-next-line no-console
        console.log('Loged In');
      }
    } else {
      this.$router.push('/login');
    }
  },
};
</script>

<style scoped>
.noneFlash{
  display: none!important;
}
.flashDataAdd{
  width: 400px;
  height: 60px;
  background-color:green;
  display: flex;
  align-items: center;
  position: fixed;
  right: 10px;
  bottom: 10px;
  border-radius: 10px;
}
.flashDataAdd h3{
  color: #fff;
  font-family: arial;
  font-size: 18px;
  margin-left: 10px;
}
</style>
