import axios from 'axios'
/*************
 *HOST
 *************/
const LOCAL_HOST = 'localhost:8000'
const DEV_HOST = 'vue-inv.jp'
const PRO_HOST = 'vue-inv.jp'

/** API_URL **/
export const API_URL = (() => {
  let hostName = window.location.hostname

  switch (hostName) {
    case DEV_HOST:
      return 'https://' + DEV_HOST
    case PRO_HOST:
      return 'https://' + PRO_HOST
    default:
      // デフォルトは開発に接続
      return 'http://' + LOCAL_HOST
  }
})()

/*************
 *HOST
 *************/
axios.defaults.baseURL = API_URL
export {axios}

/*************
 *SERVER STATES
 *************/
export const OK = 200
export const CREATED = 201
export const NOT_FOUND = 404
export const UNAUTHORIZED = 419
export const UNPROCESSABLE_ENTITY = 422
export const INTERNAL_SERVER_ERROR = 500
