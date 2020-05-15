<template>
  <div class="edit_offer">
        <form class="edit-form">
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
            <div class="wrapper">
                <button @click="SaveRow()">Save</button>
                <button class="del" @click="cancel()" type="submit">Cancel</button>
            </div>
        </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'EditOffer',
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
      ...mapActions([
      'EDIT_ROW'
    ]),
      saveRow(index) {
          this.EDIT_ROW(index)
      },
      cancel() {
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
  width: 80px;
}
input, select {
  margin: 3px 10px 12px 10px;
}
label {
  font-weight: bold;
}
.edit-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  margin: 0 auto;
}
.del {
  background-color: #ff7675;
  border: 2px solid #ff7675;
  margin-left: 10px;
}
.wrapper {
    display: inline-block;
}
</style>