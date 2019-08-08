<template>
  <div>
    <ul class="cartlist" v-if="cartList.length">
      <li class="clearfix"
          v-for="item of cartList"
          :key="item.id"
      >
        <div class="check">
          <button :class="item.checked ? 'checked' : ''" @click="changechecked(item.id,item.checked)"></button>
        </div>
        <div class="imgbox">
          <img :src="item.img" alt="">
        </div>
        <div class="box">
          <h3>{{item.name}}</h3>
          <p>{{item.price}}元</p>
        </div>
        <div class="btn-box">
          <button class="del" @click="del(item.id,item.num)">-</button>
          <span>{{item.num}}</span>
          <button class="add" @click="add(item.id,item.num)">+</button>
        </div>
      </li>
    </ul>
    <div class="settle clearfix">
      <button :class="all ? 'checked' : ''" @click="checkedall"></button>
      <span>全选</span>
      <span>共:</span>
      <span>¥{{price}}</span>
      <div>提交订单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartList',
  data () {
    return {
      getArr: []
    }
  },
  computed: {
    idStr () {
      let str = ''
      this.$store.state.mycart.forEach(item => { str += item.id + ',' })
      return str.slice(0, str.length - 1)
    },
    cartList () {
      let arr = []
      if (this.getArr.length) {
        this.$store.state.mycart.forEach(item => {
          const index = this.getArr.findIndex(item1 => item.id === item1.id)
          arr.push({
            id: item.id,
            num: item.num,
            checked: item.checked,
            price: this.getArr[index].partner_price,
            img: this.getArr[index].img,
            name: this.getArr[index].name
          })
        })
      }
      return arr
    },
    all () {
      return this.$store.state.mycart.every(item => item.checked === true)
    },
    price () {
      let price = 0
      this.cartList.forEach(item => {
        if (item.checked) {
          price += parseFloat(item.price) * 1000 * item.num
        }
      })
      return price / 1000
    }
  },
  methods: {
    add (id, num) {
      const num1 = num + 1
      this.$store.commit('changeCart', [id, num1])
    },
    del (id, num) {
      const num1 = num - 1
      this.$store.commit('changeCart', [id, num1])
    },
    changechecked (id, checked) {
      this.$store.commit('changechecked', [id, checked])
    },
    checkedall () {
      this.$store.commit('check', this.all)
    }
  },
  mounted () {
    this.$http.get('/api/home',
      {
        params: {
          _r: +new Date(),
          cart_pids: this.idStr,
          location: '121.5721941391567,31.21168025925351'
        }
      }).then(res => {
      this.getArr = res.data.data.cart_ids
    })
  }
}
</script>

<style scoped lang="less">
  .cartlist {
    background-color: #fff;
    li {
      height: 81rem/100;
      position: relative;
      .check {
        float: left;
        height: 100%;
        position: relative;
        width: 64rem/100;
        button {
          position: absolute;
          top: 50%;
          left: 50%;
          height: 30rem/100;
          width: 30rem/100;
          border-radius: 50%;
          transform: translate(-50%,-50%);
        }
        button.checked {
          background: url("../../../assets/images/checked.png") no-repeat center center /100% 100%;
        }
      }
      .imgbox {
        float: left;
        width: 62rem/100;
        height: 100%;
        img {
          margin: 10rem/100 auto 0;
          width: 60rem/100;
          height: 60rem/100;
        }
      }
      .box {
        overflow: hidden;
        float: left;
        width: 150rem/100;
        height: 100%;
        h3 {
          font-size: 16rem/100;
          margin-bottom: 6rem/100;
          line-height: 40rem/100;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        p {
          color: #999;
          line-height: 25rem/100;
          font-size: 14rem/100;
        }
      }
      .btn-box {
        position: absolute;
        width: 70rem/100;
        bottom: 10rem/100;
        line-height: 50rem/100;
        right: 10rem/100;
        font-size: 18rem/100;
        button {
          width: 24rem/100;
          line-height: 22rem/100;
          font-size: 20rem/100;
          border-radius: 50%;
          background-color: #fff;
          border: 1rem/100 solid orange;
          color: orange;
        }
      }
    }
  }
  .settle {
    background-color: #fff;
    height: 55rem/100;
    line-height: 54rem/100;
    border-top: 1rem/100 solid #ccc;
    font-size: 16rem/100;
    button {
      float: left;
      height: 30rem/100;
      width: 30rem/100;
      border-radius: 50%;
      margin-top: 11rem/100;
      margin-left: 16rem/100;
    }
    button.checked {
      background: url("../../../assets/images/checked.png") no-repeat center center /100% 100%;
    }
    span:nth-child(2){
      float: left;
      margin-left: 30rem/100;
    }
    span:nth-child(3){
      float: left;
      margin-left: 30rem/100;

    }
    span:nth-child(4){
      float: left;
      color: red;
    }
    div {
      float: right;
      width: 96rem/100;
      background-color: yellow;
      height: 100%;
      line-height: 54rem/100;
      border:none;
      font-size: 16rem/100;
      text-align: center;
    }
  }
</style>
