<template>
  <ul class="category">
    <li
        v-for="item in categories"
        :class="item.id === flag ? 'active border-bottom':'border-bottom'"
        :key="item.id"
    >
      <a href="javascript:void(0)" @click="changeflag(item.id)">
        {{item.name}}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListCategory',
  props: {
    categories: {
      type: Array,
      require: true
    },
    flag: {
      type: String,
      require: true
    }
  },
  methods: {
    changeflag (id) {
      this.$emit('func', id)
    }
  }
}
</script>

<style scoped lang="less">
  .category {
    position: absolute;
    height: 100%;
    width: 80rem/100;
    overflow-y: auto;
    background: #f8f8f8;
    li {
      line-height: 55rem/100;
      &.active {
        border-left: 4rem/100 solid yellow;
      }
      a {
        display: block;
        font-size: 16rem/100;
        color: black;
        text-align: center;
      }
    }
    li:first-child,li:last-child {
      background: url("../../../assets/images/new.jpg") no-repeat right top/auto 70%;
    }
  }
</style>
