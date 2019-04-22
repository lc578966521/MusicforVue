<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  /* 初始化 */
*{
  margin: 0;
  padding: 0;
}
html,body{
  font-size: 16px;
  font-family:Arial, "微软雅黑";
  overflow-x:hidden;
  margin:0 auto;
  max-width:640px; 
  min-width:320px;
  color:#555;
  background:#f1f1f1;
  height:100%;
  -webkit-tap-highlight-color:rgba(0,0,0,0);/*去掉背景蓝色*/
}
img{
  border:none;
  max-width:100%;
  vertical-align:middle;
}
ul,ol,li{
  list-style: none;
}
input,textarea{
  font-size:1em;
  line-height:1.5em;
}
input,select,textarea{
  outline:none;
  border:none;
  background:none;
}
a{
  outline:0;
  color: #222;
  cursor:pointer;
  text-decoration:none;
}

a:hover{
  color:#f00;
}
em,i{
  font-style:normal;
}
.clearfix::after{
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
}
.fl{
  float:left;
}
.fr{
  float:right;
}
/* .router-link-active{
  color: #222 !important;
} */
</style>
