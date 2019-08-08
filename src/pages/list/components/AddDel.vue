<template>
  <div class="btn-box">
    <button class="add fr" @click="add" >+</button>
    <button class="del fl" @click="del" v-show="num">-</button>
    <span v-show="num">{{num}}</span>
  </div>
</template>

<script>
export default {
  name: 'AddDel',
  props: {
    itemid: {
      type: String,
      require: true
    }
  },
  methods: {
    add () {
      const num = this.num + 1
      this.$store.commit('changeCart', [this.itemid, num])
    },
    del () {
      const num = this.num - 1
      this.$store.commit('changeCart', [this.itemid, num])
    }
  },
  computed: {
    num () {
      const index = this.$store.state.mycart.findIndex(item => item.id === this.itemid)
      if (index > -1) {
        return this.$store.state.mycart[index].num
      } else {
        return 0
      }
    }
  }
}
</script>

<style scoped lang="less">
  .btn-box {
    position: absolute;
    width: 80rem/100;
    bottom: 0;
    line-height: 50rem/100;
    height: 50rem/100;
    text-align: center;
    right: 5rem/100;
    font-size: 18rem/100;
    button {
      margin-top: 12rem/100;
      width: 24rem/100;
      line-height: 22rem/100;
      font-size: 20rem/100;
      border-radius: 50%;
      background-color: #fff;
      border: 1rem/100 solid orange;
      color: orange;
    }
    span {
      float: left;
      width: 32rem/100;
      text-align: center;
    }
  }
</style>
