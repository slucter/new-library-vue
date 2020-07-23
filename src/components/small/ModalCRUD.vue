<template>
    <div class="modal-layer">
        <form  @submit="addBook" class="box-modal">
            <div class="top-box">
                <h3>Add Book</h3>
                <h3 class="cross-x">X</h3>
            </div>
            <div class="input-box">
                <label for="a">Title</label>
                <input type="text" placeholder="input a title" name="title">
            </div>
            <div class="input-box">
                <label for="a">Author</label>
                <input type="text" placeholder="input a Author" name="author">
            </div>
            <div class="input-box">
                <label for="a">Publisher</label>
                <input type="text" placeholder="input a Publisher" name="publisher">
            </div>
            <div class="input-box">
                <label for="a">Categories</label>
                <select name="categories" id="ctg">
                    <option value="1">Comedy</option>
                    <option value="1">Horor</option>
                    <option value="1">Art & Music</option>
                </select>
            </div>
            <div class="input-box">
                <label for="a">Details</label>
                <textarea type="text" placeholder="input a Details" name="details"> </textarea>
            </div>

            <button type="submit">Add</button>
            <button type="reset" class="btn-clear">Clear</button>
        </form>
    </div>
</template>

<script>
export default {

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
    height: 50px;
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
