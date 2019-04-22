<template>
  <div class="container">
    <div class="header">
      <div>
        <router-link to="/" tag="i" class="iconfont icon-shouye"></router-link>
      </div>
      <div class="music-info">
        <p>{{ playUrl.songinfo.title }}</p>
        <p>{{ playUrl.songinfo.author }}</p>
      </div>
      <div class="search">
        <router-link tag="i" to="/search" class="iconfont icon-sousuo"></router-link>
      </div>
    </div>
    <div class="body">
      <div class="song-img">
        <img :src="playUrl.songinfo.pic_big">
        <LRC :currentTime="currentTime" :durationTime="durationTime" :songid="this.$route.params.songid"/>
      </div>
      <div class="icon">
        <i class="iconfont icon-shoucang2"></i>
        <i class="iconfont icon-xiazai"></i>
      </div>
    </div>
    <div class="play">
      <audio ref="player" :src="playUrl.bitrate.show_link" controls autoplay></audio>
    </div>
  </div>
</template>
<script>
  import '../assets/font/iconfont.css'
  import LRC from '../components/Lrc'
  export default {
    name: 'MusicPlay',
    components:{
      LRC
    },
    data() {
      return {
        playUrl: {
          songinfo:{
            title:'',
          author:''
          },
          bitrate:{
            show_link:''
          }
        },
        currentTime: 0,
        durationTime: 0
      }
    },
    mounted() {
      this.$axios.get(this.URL + '/v1/restserver/ting', {
        params: {
          method: 'baidu.ting.song.play',
          songid: this.$route.params.songid
        }
      })
        .then(result => {
          this.playUrl = result.data
        })
        .catch(error => {
          console.log(error)
        }),
        this.addEventListeners();
    },
  beforeDestroyed(){
    this.removeEventListeners();
  },
    methods:{
      addEventListeners(){
      this.$refs.player.addEventListener('timeupdate', this._currentTime),
      this.$refs.player.addEventListener('canplay', this._durationTime)
     },
     removeEventListeners: function () {
       this.$refs.player.removeEventListener('timeupdate', this._currentTime)
       this.$refs.player.removeEventListener('canplay', this._durationTime)
     },
    _currentTime(){
      this.currentTime = this.$refs.player.currentTime
      // currentTime是audio标签提供的获取当前播放时间的方法
    },
   _durationTime(){
    this.durationTime = this.$refs.player.duration
    // duration是audio标签提供的获得歌曲播放整体时间的方法
    }
    }
  }
</script>
<style lang="less" scoped>
  .container {
    i {
      font-size: 30px;
    }
    .header {
      padding: 15px;
      display: flex;
      text-align: center;
      .music-info {
        flex: 1;
      }
    }
    .body {
      margin-top: 30px;
      padding: 15px;
      .song-img {
        text-align: center;
        img {
          width: 50%;
          height: auto;
          border-radius: 5px;
          box-shadow: 0 0 10px 0 rgba(50, 50, 50, .31);
        }
      }
      .icon {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
      }
    }
    .play {
      width: 100%;
      text-align: center;
    }
  }
</style>