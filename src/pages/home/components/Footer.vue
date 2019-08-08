<template>
  <ul class="footer">
    <li>
      <img src="../../../assets/images/menu-icon/navs-item-home.png" alt="">
      <p>首页</p>
    </li>
    <li>
      <router-link to="/list">
        <div :class="$route.path==='/list'?'active':''"></div>
        <p>闪送超市</p>
      </router-link>
    </li>
    <li>
      <router-link to="/cart">
        <div :class="$route.path==='/cart'?'active':''"></div>
        <span>{{num}}</span>
        <p>购物车</p>
      </router-link>
    </li>
    <li>
      <img src="../../../assets/images/menu-icon/navs-item-mine.png" alt="">
      <p>我的</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HomeFooter',
  computed: {
    num () {
      let num = 0
      this.$store.state.mycart.forEach(item => { num += item.num })
      return num
    }
  }
}
</script>

<style scoped lang="less">
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60rem/100;
    display: flex;
    li {
      flex: 1;
      div {
        width: 33rem/100;
        height: 33rem/100;
        margin: 0 auto;
      }
      img {
        display: block;
        width: 36rem/100;
        margin: 0 auto;
      }
      p {
        line-height: 19rem/100;
        font-size: 14rem/100;
        text-align: center;
        color: #777777;
      }
    }
    li:nth-child(2) {
       display: block;
       div{
         background:url("../../../assets/images/menu-icon/navs-item-menu.png") no-repeat center center/100% 100%;
       }
       div.active {
         background:url("../../../assets/images/menu-icon/navs-item-menu-active.png") no-repeat center center/100% 100%;
       }
     }
    li:nth-child(3) {
      display: block;
      position: relative;
      div{
        background:url("../../../assets/images/menu-icon/navs-item-cart.png") no-repeat center center/100% 100%;
      }
      div.active {
        background:url("../../../assets/images/menu-icon/navs-item-cart-active.png") no-repeat center center/100% 100%;
      }
      span {
        position: absolute;
        top: 1rem/100;
        right: 3rem/100;
        background-color: #f40;
        border-radius: 50%;
        color: #fff;
        line-height: 24rem/100;
        width: 24rem/100;
        text-align: center;
        font-size: 14rem/100;
      }
    }
  }
</style>
