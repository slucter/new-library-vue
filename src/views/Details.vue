<template>
    <div>
        <div class="wrap-top-cover">
            <div class="nav-cover">
                <router-link to="/dashboard" class="rounded-back">
                <i class="fas fa-chevron-left"></i></router-link>
                <div class="menu-cover">
                    <a @click="clickEdit" >Edit</a>
                    <a @click="deleteBook(detailsBook)">Delete</a>
                </div>
            </div>

            <div class="thumb-detail">
                <img :src="detailsBook.image" alt="thumb">
            </div>
        </div>

        <div class="wrap-bottom">
            <div class="category-list">
                <a href="#">{{detailsBook.category}}</a>
            </div>

            <div class="title-book">
                <h3>{{detailsBook.title}}</h3>
            </div>
            <div class="detail-create">
                <h3>{{detailsBook.created_at.slice(0,9)}} |
                    Publish by {{detailsBook.publisher}}</h3>
            </div>
            <div class="details-book">
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste enim,
                    ducimus cupiditate corrupti alias soluta vitae facilis beatae, dolores
                    ipsam exercitationem minima id deserunt explicabo aperiam repellendus.
                    Asperiores et, vel est perferendis ab officiis minima illo excepturi
                    soluta veniam cupiditate ad qui odit id pariatur suscipit magni enim?
                    Sint aperiam, quibusdam, vero libero eligendi provident fuga delectus
                    ipsa eos voluptatum deserunt illum corrupti totam voluptas alias reprehenderit
                    minus quos ut nesciunt ex commodi itaque id voluptatem nobis.
                    Nobis ea iste aliquam enim ducimus, esse nostrum odio unde,
                    laboriosam neque ex modi impedit a libero dolorum dolorem
                    nesciunt tempore rerum odit.<br><br>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quis commodi est neque esse soluta! Possimus, maiores dignissimos
                nisi libero odit non totam obcaecati perferendis sequi ea vitae nulla
                quasi, eveniet inventore dolores veniam temporibus,
                sint asperiores itaque dolorum! Officia fuga blanditiis amet
                optio quasi eaque quae minima odio. Dicta, adipisci beatae! Non excepturi
                error, alias eius quidem modi fugit. Molestias ex reprehenderit deserunt,
                possimus, quas reiciendis maiores nihil nostrum explicabo nemo voluptate,
                eligendi praesentium itaque! Voluptas facilis, qui ipsam eveniet tenetur
                mollitia, blanditiis dolore laudantium, at exercitationem esse eius obcaecati?
                Velit, culpa nihil dolorem debitis optio maxime officia at ipsam delectus
                explicabo nobis nemo saepe labore, itaque deserunt distinctio id enim libero,
                omnis sint ducimus aliquam illum maiores? Explicabo beatae molestias dignissimos
                rerum consectetur asperiores, ipsam sed dolorum veritatis temporibus, iure maiores
                reprehenderit delectus, unde enim dolore? Iure, ducimus provident.</h3>
            </div>

   </div>
   <Modal v-bind:detailsBook="detailsBook"/>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import Modal from '../components/small/updateBook.vue';

export default {

  data() {
    return {
      detailsBook: [],
      testaja: ' apa aja deh',
    };
  },
  components: {
    Modal,
  },
  methods: {
    detBooks() {
      axios.get(`http://localhost:2000/api/library/book/details/${this.$route.params.slug}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.detailsBook = res.data.response[0];
        });
    },
    clickEdit() {
      document.querySelector('.modal-layer').classList.add('show-modal');
    },
    deleteBook(p) {
      swal({
        title: 'Apakah Anda yakin ?',
        icon: 'warning',
        text: 'Klik yes untuk melanjutkan!',
        dangerMode: true,
      }).then((sts) => {
        if (sts) {
          axios.delete(`http://localhost:2000/api/library/book/delete/${p.id}`)
            .then((s) => {
              if (s.data.status === 200) {
                swal('Berhasil Menghapus!', 'Buku Telah Dihapus', 'success')
                  .then((t) => {
                    if (t) {
                      this.$router.push('/dashboard');
                    }
                  });
              }
            });
        } else {
          // eslint-disable-next-line no-console
          console.log('batal menghapus');
        }
      });
    },
  },
  mounted() {
    this.detBooks();
  },
};
</script>

<style scoped>
.wrap-top-cover{
    display: flex;
    width: 100vw;
    background-color: rgb(86, 94, 131);
    flex-direction: column;
    height: 30vh;
    position: relative;
}
.wrap-top-cover::after{
    content:'';
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(0, 0, 0,.3),rgb(255, 255, 255, 0));
    position: absolute;
    bottom:0;
    right: 0;
}
.nav-cover{
    display: flex;
    width: 100%;
    height: 80px;
    /* background-color: rgb(73, 23, 23); */
    justify-content: space-between;
    align-items: center;
}

.rounded-back{
    text-decoration: none;
    font-family: 'Airbnb Cereal App Bold';
    color: #000;
    font-size: 30px;
    background-color: #fff;
    padding: 10px 20px 10px 20px;
    border-radius: 100px;
    margin-left: 50px;
}
.menu-cover{
    width: 220px;
    /* background-color: rgb(146, 80, 80); */
    display: flex;
    justify-content: space-between;
    margin-right: 50px;
}
.menu-cover a{
    text-decoration: none;
    font-family: 'Airbnb Cereal App Bold';
    color: rgb(255, 255, 255);
    font-size: 30px;
    cursor: pointer;
}

.thumb-detail{
    width: 300px;
    height: 400px;
    background-color: rgb(229, 182, 182);
    position: absolute;
    bottom: -250px;
    right: 30px;
    z-index: 10;
}
.thumb-detail img{
    width: 100%;
    height: 100%;
}
.wrap-bottom{
    width: 80vw;
    display: flex;
    /* background-color: rgb(88, 60, 60); */
    flex-direction: column;
    margin-left: 70px;
    /* padding: 10px 0 0 70px; */
}

.category-list{
    width: 100%;
    /* background-color: rgb(128, 67, 67); */
    display: flex;
    align-items: center;
    margin-top: 7px;
}
.category-list a{
    text-decoration: none;
    font-family: 'Airbnb Cereal App Bold';
    color: rgb(255, 255, 255);
    font-size: 15px;
    background-color: rgb(253, 207, 0);
    padding: 10px;
    border-radius: 20px;
    margin: 5px 7px 5px 0;
}

.title-book{
    width: 100%;
    /* background-color: rgb(206, 98, 98); */
    display: flex;
    align-items: center;
}
.title-book h3{
    font-family: 'Airbnb Cereal App Bold';
    color: rgb(0, 0, 0);
    font-size: 40px;
    margin: 5px 7px 5px 0;
}

.detail-create{
    width: 100%;
    align-items: center;
    /* background-color: salmon; */
    display: flex;
}
.detail-create h3{
    font-family: 'Airbnb Cereal App Bold';
    color: rgb(93, 93, 93);
    font-size: 15px;
    margin: 5px 7px 5px 0;
}

.details-book{
    width: 70%;
    /* background-color: seagreen; */
    display: flex;
    /* padding: 20px 600px 10px 0; */
}

.details-book h3{
    font-family: 'Airbnb Cereal App Book';
    color: rgb(0, 0, 0);
    font-size: 17px;
    line-height: 25px;
}

.footer-details{
    width: 100vw;
    background-color: rgb(236, 236, 236);
    display: flex;
    position: fixed;
    bottom: 0;
}

.footer-details button{
    width: 200px;
    height: 60px;
    background-color: rgb(253, 207, 0);
    font-family: 'Airbnb Cereal App Bold';
    color: #fff;
    font-size: 17px;
    border: none;
    outline: none;
    margin: 10px 0px 10px 70px;
}

@media(max-width: 414px){

    .nav-cover{
        display: flex;
        width: 100%;
        height: 70px;
        /* background-color: rgb(255, 255, 255); */
        justify-content: space-between;
        align-items: center;
        padding: 0 10px 0 10px;
    }
    .rounded-back{
        text-decoration: none;
        font-family: 'Airbnb Cereal App Bold';
        color: #000;
        font-size: 20px;
        background-color: #fff;
        padding: 6px 14px 6px 14px;
        border-radius: 100px;
    }
    .menu-cover{
        width: 150px;
        /* background-color: rgb(146, 80, 80); */
        display: flex;
        justify-content: space-between;
    }
    .menu-cover a{
        text-decoration: none;
        font-family: 'Airbnb Cereal App Bold';
        color: rgb(255, 255, 255);
        font-size: 20px;
    }
    .thumb-detail{
       display: none;
    }
    .wrap-bottom{
        width: 100vw;
        display: flex;
        /* background-color: rgb(88, 60, 60); */
        flex-direction: column;
        padding: 10px 8px 0 8px;
    }
    .category-list{
        width: 100%;
        /* background-color: rgb(128, 67, 67); */
        display: flex;
        align-items: center;
    }
    .category-list a{
        text-decoration: none;
        font-family: 'Airbnb Cereal App Bold';
        color: rgb(255, 255, 255);
        font-size: 13px;
        background-color: rgb(253, 207, 0);
        padding: 7px;
        border-radius: 20px;
        margin: 3px 7px 3px 0;
    }
    .title-book{
        width: 100%;
        /* background-color: rgb(206, 98, 98); */
        display: flex;
        align-items: center;
    }
    .title-book h3{
        font-family: 'Airbnb Cereal App Bold';
        color: rgb(0, 0, 0);
        font-size: 30px;
        margin: 5px 7px 5px 0;
    }
    .detail-create{
        width: 100%;
        align-items: center;
        /* background-color: salmon; */
        display: flex;
    }
    .detail-create h3{
        font-family: 'Airbnb Cereal App Bold';
        color: rgb(93, 93, 93);
        font-size: 13px;
        margin: 5px 7px 5px 0;
    }
    .details-book h3{
        font-family: 'Airbnb Cereal App Book';
        color: rgb(0, 0, 0);
        font-size: 13px;
        line-height: 25px;
        text-align: justify;
    }
    .details-book{
        width: 100%;
        /* background-color: seagreen; */
        display: flex;
        padding: 20px 0px 90px 0;
    }
    .footer-details{
        width: 100vw;
        background-color: rgb(236, 236, 236);
        display: flex;
        position: fixed;
        bottom: 0;
    }
    .footer-details button{
        width: 170px;
        height: 50px;
        background-color: rgb(253, 207, 0);
        font-family: 'Airbnb Cereal App Bold';
        color: #fff;
        font-size: 17px;
        border: none;
        outline: none;
        margin: 10px 0px 10px 8px;
    }
}
</style>
