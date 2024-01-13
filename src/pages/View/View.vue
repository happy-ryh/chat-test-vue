<template>
  <div>
    <el-row>
      <UserWindow></UserWindow>
      <UserWindow></UserWindow>
      <UserWindow></UserWindow>
      <UserWindow></UserWindow>
      <UserWindow></UserWindow>
    </el-row>
  </div>
</template>

<script>
import UserWindow from "../../components/UserWindow.vue";

export default {
name: "Home",
  components: {UserWindow},
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>