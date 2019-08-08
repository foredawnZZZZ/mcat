<template>
  <div class="list">
    <list-cateGory :categories="categories" :flag="flag" @func="changeflag"/>
    <list-shoplist :shoplist="shoplist"/>
  </div>
</template>

<script>
import ListCateGory from './components/Category'
import ListShoplist from './components/Shoplist'
export default {
  name: 'List',
  data () {
    return {
      categories: [],
      products: {},
      flag: ''
    }
  },
  components: {
    ListCateGory: ListCateGory,
    ListShoplist: ListShoplist
  },
  computed: {
    shoplist () {
      if (this.products[this.flag]) {
        return this.products[this.flag]
      } else {
        return []
      }
    }
  },
  methods: {
    changeflag (id) {
      this.flag = id
    }
  },
  mounted () {
    this.$http.jsonp('http://localhost:3008/list?').then(res => {
      const {categories, products} = res.data
      this.categories = categories
      this.flag = categories[0].id
      this.products = products
    })
  }
}
</script>

<style scoped lang="less">
  .list {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
