<template>
  <div id="app">
    <router-view />
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from "./components/tabBar/index";
export default {
  name: "App",
  components: {
    TabBar
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
html,
body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
img {
  height: 100%;
  width: 100%;
}
</style>
