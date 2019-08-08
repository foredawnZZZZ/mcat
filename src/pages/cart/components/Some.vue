<template>
  <div class="some">
    <p>
      <span>|</span>
      <span>闪送超市</span>
      <button class="fr">凑单专区</button>
    </p>
    <p class="one-txt-cut">￥0起送，22点后满￥69运费5元起，不满￥69运10元起</p>
    <p class="border-topbottom">
      <span>收货时间</span>
      <span>08:00-09:00</span>
      <span>可预订 &gt;</span>
    </p>
    <p class="border-bottom">
      <span>收货备注</span>
      <input type="text" placeholder="可输入100字以内特殊要求内容">
    </p>
  </div>
</template>

<script>
export default {
  name: 'CartSome'
}
</script>

<style scoped lang="less">
  .some {
    line-height: 37rem/100;
    font-size: 16rem/100;
    background-color: #fff;
    p:first-child {
      padding-left: 18rem/100;
      span:first-child{
        color: orange;
      }
      button{
        line-height: 34rem/100;
        font-size: 14rem/100;
        background-color: #fff;
        border: 1rem/100 solid orange;
        color:orange;
        border-radius: 10rem/100;
      }
    }
    p:nth-child(2) {
      padding-left: 19rem/100;
    }
    p:nth-child(3) {
      padding:0 18rem/100;
      height: 42rem/100;
      line-height: 42rem/100;
      span:first-child {
        float: left;
        padding-right: 10rem/100;
      }
      span:nth-child(2) {
        float: left;
        color: orange;
      }
      span:nth-child(3) {
        float: right;
      }
    }
    p:nth-child(4) {
      padding:0 18rem/100;
      height: 42rem/100;
      line-height: 42rem/100;
      span {
        float: left;
        padding-right: 10rem/100;
      }
      input {
        width: 230rem/100;
        padding-left: 10rem/100;
        border: 1rem/100 solid #333;
        border-radius: 5rem/100;
        line-height: 28rem/100;
      }
    }
  }
</style>
