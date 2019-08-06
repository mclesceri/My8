import Vue from 'vue'
import VueResource from 'vue-resource'
import config from '../config'

Vue.use(VueResource)

export default {
  name: 'appService',

  setToken(token) {
    if (token !== '') {
      Vue.http.headers.common['Authorization'] = 'Bearer ' + token
    }
  },

  getContract(token) {
    this.setToken(token)
    // Initiate CA
    let url = config.ARGON_URL + '?app_id=' + config.APPLICATION_ID + '&&contract_id=' + config.CONTRACT_ID
    return Vue.http.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  decrypt(token, id) {
    this.setToken(token)
    let url = config.APPS_URL
    return Vue.http.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}
