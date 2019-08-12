import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reports: [],
    user: {name: 'name', password: '123'},
    login: false,
  },
  getters: {
    allReports(state) {
      return state.reports
    },

    getUser(state) {
      return state.user
    },

  },
  mutations: {
    updateReports(state, reports) {
      state.reports = reports
    },

    loginUser(state, value) {
      state.login = value
      localStorage.setItem('login', state.login)
    },

    addReport(state, newReport) {
      state.reports.unshift(newReport)
      localStorage.setItem('reports', JSON.stringify(state.reports))
    },

    removeReport(state, report) {
      const reportIndex = state.reports.findIndex(match => match.date === report)
      state.reports.splice(reportIndex, 1)
      localStorage.setItem('reports', JSON.stringify(state.reports))

    }
  },
  actions: {
    async getReports({commit}) {
      const reports = localStorage.getItem('reports')
      if (!reports) {
        const res = await axios.get('http://localhost:3000/reports/')
        localStorage.setItem('reports', JSON.stringify(res.data))
      }
      commit('updateReports', JSON.parse(reports))
    },
  },
});
