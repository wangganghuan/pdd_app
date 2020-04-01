<template>
  <!-- 底部导航 -->
  <div class="bottom-tab">
    <div class="bottom-tab-div" @click="switchTo('/homepage')">
      <div class="bottom-tab-img">
        <img src="../../img/home.png" alt v-if="'/homepage'!=pitchOn" />
        <img src="../../img/homePage.png" alt v-if="'/homepage'==pitchOn" />
      </div>
      <span class="bottom-tab-text" :class="{on:'/homepage'==$route.path}">首页</span>
    </div>

    <div class="bottom-tab-div" @click="switchTo('/searchpage')">
      <div class="bottom-tab-img">
        <img src="../../img/attention.png" alt v-if="'/searchpage'!=pitchOn" />
        <img src="../../img/attentionPage.png" alt v-if="'/searchpage'==pitchOn" />
      </div>
      <span class="bottom-tab-text" :class="{on:'/searchpage'==$route.path}">关注</span>
    </div>
    <div class="bottom-tab-div" @click="switchTo('/recommendpage')">
      <div class="bottom-tab-img">
        <img src="../../img/classify.png" alt v-if="'/recommendpage'!=pitchOn" />
        <img src="../../img/classifyPage.png" alt v-if="'/recommendpage'==pitchOn" />
      </div>
      <span class="bottom-tab-text" :class="{on:'/recommendpage'==$route.path}">搜索</span>
    </div>
    <div class="bottom-tab-div" @click="switchTo('/chatpage')">
      <div class="bottom-tab-img">
        <img src="../../img/chat.png" alt v-if="'/chatpage'!=pitchOn" />
        <img src="../../img/classifyPage.png" alt v-if="'/chatpage'==pitchOn" />
      </div>
      <span class="bottom-tab-text" :class="{on:'/chatpage'==$route.path}">聊天</span>
    </div>
    <div class="bottom-tab-div" @click="switchTo('/personalcenterpage')">
      <div class="bottom-tab-img">
        <img src="../../img/personalcenter.png" alt v-if="'/personalcenterpage'!=pitchOn" />
        <img src="../../img/personalcenterPage.png" alt v-if="'/personalcenterpage'==pitchOn" />
      </div>
      <span class="bottom-tab-text" :class="{on:'/personalcenterpage'==$route.path}">个人中心</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBar",
  data() {
    return {
      pitchOn: "/homepage"
    };
  },
  methods: {
    switchTo(data) {
      this.pitchOn = data;
      this.$router.replace(data);
    }
  }
};
</script>
<style lang="scss" scoped>
.bottom-tab {
  width: 100%;
  height: 1.333333rem;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
}
.bottom-tab-img {
  height: 0.626667rem;
  width: 0.626667rem;
  margin-bottom: 0.096667rem;
}
.bottom-tab-text {
  font-size: 0.186667rem;
  width: 100%;
  color: #666;
}
.bottom-tab-div {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.on {
  color: red;
}
</style>