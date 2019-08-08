<template>
  <div class="shoplist">
    <div class="header border-bottom clearfix">
      <div>全部分类</div>
      <div>综合排序</div>
    </div>
    <ul class="main">
      <li class="border-bottom"
          v-for="item in shoplist"
          :key="item.id"
      >
        <div class="imgbox">
          <img :src="item.img" alt="">
        </div>
        <div class="box">
          <h3>{{item.name}}</h3>
          <p>{{item.specifics}}</p>
          <p><span>¥{{item.partner_price}}</span> <del>{{item.price}}</del></p>
        </div>
        <add-del :itemid="item.id" />
      </li>
    </ul>
  </div>
</template>

<script>
import AddDel from './AddDel'
export default {
  name: 'ListShoplist',
  props: {
    shoplist: {
      type: Array,
      require: true
    }
  },
  components: {
    AddDel: AddDel
  }
}
</script>

<style scoped lang="less">

  .shoplist {
    height: 100%;
    position: relative;
    margin-left: 80rem/100;
    .header{
      line-height: 36rem/100;
      position: absolute;
      width: 100%;
      background-color: #fff;
      z-index: 2;
      div {
        float: left;
        width: 50%;
        text-align: center;
      }
    }
    .main {
      padding-top: 36rem/100;
      height: 100%;
      overflow-y: auto;
      li {
        height: 100rem/100;
        position: relative;
        padding-top: 15rem/100;
        .imgbox {
          float: left;
          width: 75rem/100;
          img {
            margin: 5rem/100 auto 0;
            width: 55rem/100;
            height: 55rem/100;
          }
        }
        .box {
          overflow: hidden;

          h3 {
            font-size: 16rem/100;
            margin-bottom: 6rem/100;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          p {
            color: #999;
            line-height: 20rem/100;
            font-size: 14rem/100;
          }

          p:last-child {
            span {
              color: red;
            }
          }
        }
      }
    }
  }
</style>
