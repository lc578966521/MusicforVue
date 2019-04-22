<template>
    <div class="index">
      <ListToday type="1"/>
      <ListToday type="2"/>
      <ListToday type="24"/>
      <ListToday type="22"/>
      <ListToday type="25"/>
      <ListToday type="21"/>
    </div>
  </template>
  
  <script>
  import ListToday from '../components/ListToday'

  export default {
    name: 'List',
    components: {
      ListToday
    }
  }
  </script>
  
  <style lang="less" scoped>
  </style>
  