<template>
    <div class="modal-layer">
        <form v-on:submit.prevent="addBook" class="box-modal">
            <div class="top-box">
                <h3>Add Book</h3>
                <h3 class="cross-x" v-on:click="$emit('closeModalClick')">
                    <i class="far fa-times-circle"></i></h3>
            </div>
            <div class="input-box">
                <label for="a">Title</label>
                <input type="text" placeholder="input a title" v-model="addData.title">
            </div>
            <div class="input-box">
                <label for="a">Author</label>
                <input type="text" placeholder="input a Author" v-model="addData.author">
            </div>
            <div class="input-box">
                <label for="a">Image</label>
                <input type="text" placeholder="input a Publisher" v-model="addData.image">
            </div>
            <div class="input-box">
                <label for="a">Categories</label>
                <select v-model="addData.id_category" id="ctg">
                    <option value="1">Comedy</option>
                    <option value="2">Horor</option>
                    <option value="3">Art</option>
                    <option value="4">Science</option>
                    <option value="5">Education</option>
                </select>
            </div>
            <div class="input-box">
                <label for="a">Details</label>
                <textarea type="text"
                placeholder="input a Details" v-model="addData.description"> </textarea>
            </div>

            <button type="submit">Add</button>
            <button type="reset" class="btn-clear">Clear</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {

  data() {
    return {
      addData: {
        title: '',
        author: '',
        publisher: '',
        image: '',
        id_category: '',
        description: '',
      },
    };
  },
  methods: {
    addBook() {
      axios.post(`${process.env.VUE_APP_URL}/api/library/book/insert`, this.addData)
        .then((result) => {
          // eslint-disable-next-line no-console
          if (result.data.status === 200) {
            document.querySelector('.modal-layer').classList.remove('show-modal-layer');
            // eslint-disable-next-line no-alert
            swal('Berhasil', 'Berhasil Tmbah Buku', 'success')
              .then((sts) => {
                if (sts) {
                  this.$router.go('/dashboard');
                }
              });
          }
        });
    },
  },
};
</script>

<style scoped>
.modal-layer{
    width: 100vw;
    height: 100vh;
    display: none;
    background-color: rgba(0, 0, 0,.4);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    justify-content: center;
    align-items: center;
}
.show-modal-layer{
    display: flex!important;
}
.box-modal{
    width: 50%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 20px;
}
.top-box{
    width: 100%;
    /* background-color: yellow; */
    display: flex;
    justify-content: space-between;
}
.top-box h3{
    font-family: 'Airbnb Cereal App Book';
    font-size: 30px;
    color: #000;
}
.cross-x{
    color: rgb(190, 190, 190)!important;
    font-size: 35px!important;
    cursor: pointer;
}

.input-box{
    width: 100%;
    /* background-color: brown; */
    display: flex;
    flex-direction: column;
    padding: 5px 5px 10px 5px;
}
.input-box label{
    font-family: 'Airbnb Cereal App Book';
    font-size: 23px;
}
.input-box input{
    margin-top: 10px;
    height: 30px;
    border: 1px solid rgb(184, 184, 184);
    outline: none;
    border-radius: 7px;
    font-family: 'Airbnb Cereal App Book';
    font-size: 17px;
    padding: 10px;
}
.input-box select{
    margin-top: 10px;
    height: 50px;
    border: 1px solid rgb(184, 184, 184);
    outline: none;
    border-radius: 7px;
    font-family: 'Airbnb Cereal App Book';
    font-size: 17px;
    padding: 10px;
    -webkit-appearance: none;
}
.input-box select option{
    border: none;
    height: 50px;
}
.input-box textarea{
    margin-top: 10px;
    height: 150px;
    border: 1px solid rgb(184, 184, 184);
    outline: none;
    border-radius: 7px;
    font-family: 'Airbnb Cereal App Book';
    font-size: 17px;
    padding: 10px;
    resize: none;
}
.box-modal button{
    height: 50px;
    border: 1px solid rgb(0, 0, 0);
    outline: none;
    border-radius: 7px;
    font-family: 'Airbnb Cereal App Book';
    font-size: 17px;
    background-color: black;
    color: #fff;
}
.btn-clear{
    border: 2px solid rgb(184, 184, 184)!important;
    background: none!important;
    margin-top: 10px;
    color: #000!important;
}
</style>
