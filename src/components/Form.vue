<template>
  <div class="form">
    <form @submit.prevent="submit">
      <label for="Min">Min sum</label>
      <input id="Min" name="Min" v-model="Min" type="number"/>
      <label for="Max">Max sum</label>
      <input id="max" name="Max" v-model="Max" type="number"/>
      <label for="Percent">Percent</label>
      <input id="Percent" name="Percent" v-model="Percent" type="number"/>
      <label for="Frequancy">Frequancy</label>
        <select id="Frequancy" v-model="Frequancy">
          <option disabled value="">Частота выплат</option>
          <option>единовременно</option>
          <option>ежемесячно</option>
          <option>каждые две недели</option>
        </select>
      <button type="submit">Add offer</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Form',
  props: {
    Min: Number,
    Max: Number,
    Percent: Number,
    Frequancy: String
  },
  data() {
    return {
     
    }
  },
  computed: {
    
  },
  methods: {
    ...mapMutations([
      'CREATE_ROW'
    ]),
    submit() {
      this.CREATE_ROW({
        Min: this.Min,
        Max: this.Max,
        Percent: this.Percent,
        Frequancy: this.Frequancy
      })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
button {
  margin-bottom: 20px;
  border: solid 1px #339FA6;
  color: #ffffff;
  padding: 8px 12px 8px;
  background-color: #339FA6;
  text-transform: uppercase;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  margin: 20px;
}
input, select {
  margin: 3px 10px 12px 10px;
}
label {
  font-weight: bold;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  margin: 0 auto;
}
</style>
