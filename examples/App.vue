<template>
  <div id="app">

<div class="row">
  <sy-button>1</sy-button>
  <sy-button type="primary">1</sy-button>
  <sy-button type="success">1</sy-button>
  <sy-button type="info">1</sy-button>
  <sy-button type="warning">1</sy-button>
  <sy-button type="danger">1</sy-button>
</div>

<div class="row">
  <sy-button>1</sy-button>
  <sy-button plain type="primary">1</sy-button>
  <sy-button plain type="success">1</sy-button>
  <sy-button plain type="info">1</sy-button>
  <sy-button plain type="warning">1</sy-button>
  <sy-button plain type="danger">1</sy-button>
</div>

<div class="row">
  <sy-button>1</sy-button>
  <sy-button round type="primary">1</sy-button>
  <sy-button round type="success">1</sy-button>
  <sy-button round type="info">1</sy-button>
  <sy-button round type="warning">1</sy-button>
  <sy-button round type="danger">1</sy-button>
</div>

<div class="row">
  <sy-button>1</sy-button>
  <sy-button circle type="primary">1</sy-button>
  <sy-button circle type="success">1</sy-button>
  <sy-button circle type="info">1</sy-button>
  <sy-button circle type="warning">1</sy-button>
  <sy-button circle type="danger">1</sy-button>
</div>

<div class="row">
  <sy-button @click="fn">1</sy-button>
  <sy-button circle icon="hm-icon-check" type="primary">1</sy-button>
  <sy-button circle icon="hm-icon-check" type="success">1</sy-button>
  <sy-button circle icon="hm-icon-check" type="info">1</sy-button>
  <sy-button circle icon="hm-icon-check" type="warning">1</sy-button>
  <sy-button circle icon="hm-icon-check" type="danger">1</sy-button>
</div>

<div class="row">
  <sy-button @click="fn">1</sy-button>
  <sy-button circle disabled icon="hm-icon-check" type="primary">1</sy-button>
  <sy-button circle disabled icon="hm-icon-check" type="success">1</sy-button>
  <sy-button circle disabled icon="hm-icon-check" type="info">1</sy-button>
  <sy-button circle disabled icon="hm-icon-check" type="warning">1</sy-button>
  <sy-button circle disabled icon="hm-icon-check" type="danger">1</sy-button>
</div>

  </div>
</template>

<script>
export default {
methods:{
  fn(){
    console.log('123');
}
},
}
</script>

<style lang="scss" scoped>
.row{
  margin-bottom: 20px;
  .sy-button{
    margin-right: 20px;
  }
}
</style>
