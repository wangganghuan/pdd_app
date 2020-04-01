<template>
  <!-- 首页 -->
  <div class="home-page">
    <van-tabs>
      <van-tab v-for="(item,index) in titleTab" :title="item.title" :key="index">内容 {{ index }}</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import "vant/lib/index.css";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);

export default {
  data() {
    return {
      titleTab: [
        { title: "热门", id: 1 },
        { title: "男装", id: 2 },
        { title: "女装", id: 3 },
        { title: "手机", id: 4 },
        { title: "鞋包", id: 5 },
        { title: "食品", id: 6 },
        { title: "母婴", id: 7 },
        { title: "百货", id: 8 },
        { title: "内衣", id: 9 },
        { title: "电器", id: 10 },
        { title: "家纺", id: 11 },
        { title: "水果", id: 12 },
        { title: "家具", id: 13 },
        { title: "美妆", id: 14 },
        { title: "家装", id: 15 },
        { title: "运动", id: 16 },
        { title: "车品", id: 17 },
        { title: "医药", id: 18 },
        { title: "电脑", id: 19 },
        { title: "海淘", id: 20 }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.home-page /deep/ {
  .van-tabs__nav {
    .van-tab--active {
      color: red;
      font-size: 0.42rem;
      font-weight: 700;
    }
  }
  .van-tab {
    line-height: 1.173333rem;
  }
  .van-tabs--line .van-tabs__wrap {
    height: 1.173333rem;
  }
  .van-tab__text {
    font-size: 0.42rem;
  }
  .van-ellipsis {
    color: rgb(68, 68, 68);
  }
}
</style>