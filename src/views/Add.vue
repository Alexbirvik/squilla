<template>
    <div class="add"> 
        <Header msg="Create new offer"/>
        <Form />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'Add',
  components: {
    Header,
    Form
  }
}
</script>