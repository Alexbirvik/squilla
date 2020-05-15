<template>
  <div class="table">
    <router-link :to="{name: 'add'}">
      <button>Create new offer</button>
    </router-link>
    <button class="button_get" @click="FETCH_ROWS()">Get offers</button>
    <h2 v-if="!rows.length">There are no offers...</h2>
    <table>
      <thead>
        <tr>
          <th v-on:click="sortTable(col)" v-for="(col, index) in columns" :key="index">{{col}}
            <div class="arrow" v-if="col == sortColumn" v-bind:class="ascending ? 'arrow_up' : 'arrow_down'"></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in get_rows()" :key="index">
          <td v-for="(col, index) in columns" :key="index">{{row[col]}}</td>
          <router-link :to="{name: 'edit', params: {index: row.Min}}">
            <button>Edit</button>
          </router-link>
          <button class="del" v-on:click="deleteRow(index)">Del</button>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <div v-if="rows.length" class="total">{{"Total: " + rows.length}}</div>
      <div class="number"
         v-for="i in num_pages()"
         v-bind:class="[i == currentPage ? 'active' : '']"
         :key="i"
         v-on:click="change_page(i)">{{i}}
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'

export default {
  name: 'Table',
  // mounted() {
  //   this.FETCH_ROWS()
    // .then((res) => {
    //   if (res.rows) {
    //     console.log("Data is here!")
    //   }
    // })
  // },
  data() {
    return {
      currentPage: 1,
      elementsPerPage: 10,
      ascending: false,
      sortColumn: '',
    }
  },
  methods: {
    ...mapActions([
      'FETCH_ROWS',
      'DELETE_ROW'
    ]),
    sortTable(col) {
      if (this.sortColumn === col) {
        this.ascending = !this.ascending;
      } else {
        this.ascending = true;
        this.sortColumn = col;
      }

      const ascending = this.ascending;

      this.rows.sort(function(a, b) {
        if (a[col] > b[col]) {
          return ascending ? 1 : -1
        } else if (a[col] < b[col]) {
          return ascending ? -1 : 1
        }
        return 0;
      })
    },
    num_pages() {
      return Math.ceil(this.rows.length / this.elementsPerPage);
    },
    get_rows() {
      var start = (this.currentPage-1) * this.elementsPerPage;
      var end = start + this.elementsPerPage;
      return this.rows.slice(start, end);  
    },
    change_page(page) {
      this.currentPage = page
    },
    deleteRow(index) {
      this.DELETE_ROW(index)
    },
    edit() {
      this.$router.push('/edit')
    }
  },
  computed: {
    ...mapGetters([
      'VALID_ROWS'
    ]),
    ...mapState([
      'rows'
    ]),
    columns() {
      if (this.rows.length == 0) {
        return []
      }
      return Object.keys(this.rows[0])
    }
  }
}
</script>

<style scoped>
button {
  margin: 10px;
  border: solid 1px #339FA6;
  color: #ffffff;
  padding: 8px 12px 8px;
  background-color: #339FA6;
  text-transform: uppercase;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
}
table {
  margin: auto;
}
td, th {
  padding: 10px 20px;
}
table th:hover {
  background:  #c4eaed;
  cursor: pointer;
}
.arrow {
  border: solid #76cfd5;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.arrow_down {
   transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.arrow_up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}
.number {
  display: inline-block;
  padding: 4px 10px;
  color: #FFF;
  border-radius: 4px;
  background: #339FA6;
  margin: 0px 5px;
  cursor: pointer;
}
.number:hover, .number.active {
  background: #9ddde1;
}
.pagination {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.del {
  background-color: #ff7675;
  border: 2px solid #ff7675;
  margin-left: 10px;
}
.total {
  margin-right: 10px;
  font-weight: bold;
}
.button_get {
  color: #339FA6;
  background-color: #ffffff;
}
</style>
