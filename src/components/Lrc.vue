<template>
  <div>
    {{getAllkey}}
    <!-- <p class="lrc-p" v-show="(parseInt(currentTime) >= keyArr[key]) && (parseInt(currentTime) < keyarr[key+1])" v-for="(item,key,index) in lrcData" :key="index">
      {{ item }}
    </p> -->
    <p class="lrc-p" v-show="parseInt(currentTime) >= keyArr[index] && parseInt(currentTime) < keyArr[index+1]"  v-for="(item,key,index) in lrcData" :key="index">{{ item }}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        lrc:{},
        lrcData:{},
        keyArr:[]
      }
    },
    props:{
      songid:String,
      currentTime:{
        type:[String,Number],
        default:0
      },
      durationTime:{
        type:[String,Number],
        default:0
      }
    },
    mounted(){
      this.$axios.get(this.URL+'/v1/restserver/ting',{
        params:{
          method:'baidu.ting.song.lry',
          songid:this.songid
        }
      })
      .then(result=>{
        this.lrc = result.data
        this.disposeLrc();
        // console.log(this.lrcData)
      })
      .catch(error=>{
        console.log(error)
      })
    },
    computed:{
      getAllkey(){
        for(var i in this.lrcData){
          this.keyArr.push(i);
        }
        // console.log(this.keyArr);
      }
    },
    methods:{
      disposeLrc(){
        var lrcArr = this.lrc.lrcContent.split('\n');//把数据分隔成一段段的数组
        // "[ti:为悦己者容 (弦乐版) (《面具背后》电视剧片尾曲)]"
        // "[offset:0]"
        // "[00:00.20]为悦己者容 (弦乐版) - 崔子格"
        // "[00:01.70]词：陈立志"
        var lrcObj = {}
        for(var i = 0 ; i < lrcArr.length; i++){
          var timeReg = lrcArr[i].match(/\[\d*:\d*.\d*\]/);
          // console.log(String(timeReg))
          // [00:00.20]
          if(!timeReg) continue;
          // 配置到的替换为空剩下的为纯文本内容
          var text = lrcArr[i].replace(String(timeReg),'');
          // var a = String(timeReg)
          // var b = String(a.match(/\[\d*/))
          // console.log(b.slice(1)*60);
          // console.log()
          // console.log(String(String(timeReg).match(/\[\d*/)))
          var min = String(String(timeReg).match(/\[\d*/)).slice(1);
          var sec = String(String(timeReg).match(/\:\d*/)).slice(1);
          var time = Number(min)*60+Number(sec);
          // console.log(time);
          lrcObj[time] = text;
        }
        this.lrcData = lrcObj;
      }
      
    }
  }
</script>
<style lang="less" scoped>
  p{
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    margin-top: 10px;
  }
</style>