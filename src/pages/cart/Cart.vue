<template>
  <div class="cart">
    <cart-info/>
    <cart-some/>
    <cart-list/>
  </div>
</template>

<script>
import CartInfo from './components/Info'
import CartSome from './components/Some'
import CartList from './components/List'
export default {
  name: 'Cart',
  components: {
    CartInfo: CartInfo,
    CartSome: CartSome,
    CartList: CartList
  }
}
</script>

<style scoped lang="less">
  .cart {
    height: 100%;
    overflow-y: auto;
    background-color: #efefef
  }
</style>
