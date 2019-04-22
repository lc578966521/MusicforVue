<template>
  <div class="container">
    <h3 class="title">{{this.$route.params.title}}</h3>
    <scroller :on-refresh='refresh' ref="scrillerVue">
      <ul>
        <router-link tag="li" :to="{name:'MusicPlay',params:{songid:item.song_id}}" v-for="(item, index) in moreList" :key="index">
          <img :src="item.pic_premium" :alt="item.title">
          <p class="song">{{ item.title }}</p>
          <p class="author">{{ item.author }}</p>
        </router-link>
      </ul>
    </scroller>
  </div>
</template>

<script>
  export default {
    name: 'MoreList',
    data() {
      return {
        moreList: [],
        url: this.URL + '/v1/restserver/ting',
        offsetCount: 12
      }
    },
    mounted() {
      this.$axios.get(this.url, {
        params: {
          method: 'baidu.ting.billboard.billList',
          type: this.$route.params.type,
          size: 12,
          offset: 0
        }
      })
        .then(result => {
          this.moreList = result.data.song_list
          console.log(result.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      refresh(done) {
        this.$axios.get(this.url, {
          params: {
            method: 'baidu.ting.billboard.billList',
            type: this.$route.params.type,
            size: 12,
            offset: this.offsetCount
          }
        }).then(result => {
          console.log(result.data.song_list.length)
          console.log(this.offsetCount)
          if (result.data.song_list.length >= 12) {
            this.offsetCount += 12;
            console.log(this.offsetCount)
          }
          this.moreList = result.data.song_list
          done()
        })
          .catch(error => {
            console.log(error);
          })
      }
    }
  }
</script>

<style lang="less" scoped>
  .container {
    padding-top: 10px;
    margin-bottom: 10px;
    background-color: #fff;

    h3.title {
      font-size: 18px;
      text-align: left;
      margin-left: 17px;
      margin-bottom: 5px;
    }
    ._v-container{
      top: 90px;
      background-color: #fff;
    }
    ul {
      border-top: 1px solid #eee;
      padding-top: 10px;
      display: flex;
      flex-wrap: wrap;
      /* justify-content: space-around; */

      li {
        width: 45%;
        margin-bottom: 5px;
        margin-left:3.5%;
        p {

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .song {
          font-size: 16px;
        }

        .author {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
</style>