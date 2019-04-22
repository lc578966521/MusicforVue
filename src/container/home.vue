<template>
    <div class="index">
      <TodayRecommended title="今日推荐" type="1"/>
      <NewSongCourier />
      <CarouselSwiper />
      <MusicList />
      <keep-alive>
          <router-view />
      </keep-alive>
      <TodayRecommended title="热门歌单" type="24"/>
    </div>
  </template>
  
  <script>
  // 导入今日推荐组件
  import TodayRecommended from '../components/TodayRecommended'
  // 导入新歌速递组件
  import NewSongCourier from '../components/NewSongCourier'
  // 导入轮播图组件
  import CarouselSwiper from '../components/CarouselSwiper'
  //导入音乐榜单组件
  import MusicList from '../container/musiclist/musiclist'

  export default {
    name: 'Home',
    components:{
      TodayRecommended,
      NewSongCourier,
      CarouselSwiper,
      MusicList
    }
  }
  </script>
  
  <style lang="less" scoped>
  </style>
  