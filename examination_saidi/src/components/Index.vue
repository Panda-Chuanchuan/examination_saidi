<template>
  <div class="index_page container-fluid"> 
    <div class="img_box">
      <img src="../assets/index_img.png" class="img-fluid" alt="responsive img"><br>
      <span @click="goListPage">GO LISTPAGE</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index_page',
  data() {
    return {}
  },
  methods:{
    goListPage() {
      this.$router.push('/list')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index_page {
    height: 100%;
    padding-top: 60px;
    text-align: center;
  }
  .img_box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .img_box span {
    color: #eee;
    cursor: pointer;
    font-weight: bold;
  }
  .img_box span:hover {
    text-decoration: underline;
  }
</style>
