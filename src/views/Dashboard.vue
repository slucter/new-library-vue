<template>
  <div>
    <Ndash />
    <Aside />
    <Content />
    <Modal />
  </div>
</template>

<script>
import Ndash from '../components/modul/NavDashboard.vue';
import Aside from '../components/modul/Aside.vue';
import Content from '../components/modul/DashContent.vue';
import Modal from '../components/small/ModalCRUD.vue';

export default {

  components: {
    Ndash,
    Aside,
    Content,
    Modal,
  },
};
</script>

<style scoped>

</style>
