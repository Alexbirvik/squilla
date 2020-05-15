import Vue from 'vue'
// import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        rows: []
    },
    mutations: {
        UPDATE_ROWS(state, rows) {
            state.rows = rows
        },
        CREATE_ROW(state, row) {
            state.rows.unshift(row)
        },
        REMOVE_ROW(state, index) {
            state.rows.splice(index, 1)
        },
        SAVE_ROW(state, row) {
            state.rows.forEach(r => {
                if(r.Min == row.Min)
                r = row
                state.rows.push(r)
            })
        }
    },
    actions: {
        ADD_ROW({commit}, row) {
            commit('CREATE_ROW', row)
        },
        DELETE_ROW({commit}, index) {
            commit('REMOVE_ROW', index)
        },
        EDIT_ROW({commit}, newRow) {
            commit('SAVE_ROW', newRow)
        },
        FETCH_ROWS({commit}) {
            return fetch("http://my-json-server.typicode.com/alexbirvik/fakedata/db")
                .then((res) => {
                  console.log(res)
                  return res.json()
                })
                .then((res) => {
                  console.log(res)
                  commit('UPDATE_ROWS', res.rows)
                  return res
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })

        }
        // fetchRows({commit}) {
        //     return axios("http://my-json-server.typicode.com/alexbirvik/fakedata/db", {
        //         method: "GET"
        //     })
        //         .then((res) => {
        //             commit("updateRows", res)
        //         })
        // }
    },
    getters: {
        VALID_ROWS(state) {
            return state.rows.filter(r => {
                return r.Min && r.Max && r.Percent && r.Frequancy
            })
        }
    }
})

export default store;

