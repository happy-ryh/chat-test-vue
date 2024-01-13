<template>
  <div>
    <div>
      <HeaderTop></HeaderTop>
    </div>
    <div >
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/components/Header";
import axios from "axios";

export default {
  name: 'App',
  components: {
    HeaderTop
  },
  methods:{
    getData(){
      axios.get('http://localhost:8080/project/user/info').then(
          response =>{
            console.log(response.data);
          },
          error =>{
            console.log(error.message);
          }
      )
    }
  }
}
</script>

<style>
.backgroundImage{
  background-image: url("assets/backgroundVideo.gif");
  height: 1015px;
  width: 1920px;
  margin-left: 20px;
}
</style>
