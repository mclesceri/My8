function getApiUrl() {
  let hn = window.location.hostname
  if (hn === 'localhost') {
    // return 'http://localhost:8888/api/'
  } else {
    return 'https://api.digi.me'
  }
}
const API_URL = getApiUrl()
export default {
  APPLICATION_NAME: 'My8',
  APPLICATION_ID: 'HhHFI2UTVcyAKYFtlp1hpNAUIb51EiuA',
  CONTRACT_ID: 'y3lHtFPSLnfo7EldRkOVLXeIP7qPflxt',
  P12_PASSPHRASE: 'monkey periscope',
  P12_FILENAME: 'y3lHtFPSLnfo7EldRkOVLXeIP7qPflxt',
  P12_EXTENSION: '.p12',
  ARGON_URL: API_URL
}
