<template>
    <div class="edit"> 
        <Header msg="Edit offer"/>
        <EditOffer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import EditOffer from '@/components/EditOffer.vue'

export default {
  name: 'Edit',
  components: {
    Header,
    EditOffer
  }
}
</script>

<style scoped>

</style>