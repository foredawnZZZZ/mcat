<template>
  <div class="info clearfix">
    <div class="one">
      <p>收&nbsp;货&nbsp;人</p>
      <p>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</p>
      <p>收货地址</p>
    </div>
    <div class="two">
      <p>刘玺&nbsp;先生</p>
      <p>13868686868</p>
      <p>上海市浦东新区航头镇航都路18号-黑马程序员</p>
    </div>
    <div class="three">
      <span>修改&nbsp;&nbsp;&gt;</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CartInfo'
}
</script>

<style scoped lang="less">
  .info {
    margin: 12rem/100 0;
    background: url("../../../assets/images/place.png")left top,url("../../../assets/images/place.png")left bottom;
    background-repeat: repeat-x;
    background-position: left top, left bottom;
    background-size: auto 3rem/100;
    padding: 3rem/100 0;
    background-color: #fff;
    font-size: 14rem/100;
    line-height: 32rem/100;
    div {
      float: left;
    }
    .one {
      width: 100rem/100;
      padding-left: 20rem/100;
    }
    .two {
      width: 200rem/100;
    }
    .three {
      width: 60rem/100;
      position: relative;
      span{
        position: absolute;
        top: 50%;
        bottom: 50%;
        transform: translate(50% 50%);
      }
    }
  }
</style>
