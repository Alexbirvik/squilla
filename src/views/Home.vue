<template>
    <div> 
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
        <Header msg="Тестовое задание на Vue.js"/>
        <Table />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Table from '@/components/Table.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Table
  }
}
</script>
