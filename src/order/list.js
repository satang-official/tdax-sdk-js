import urljoin from 'url-join'
import axios from 'axios'
import { URL } from '../constants'
import { sign } from '../signature'

/**
 * Retrieves list of open orders
 * @param {object} config {apikey,secret,userid}
 * @return {Promise<object>} [OrderObject]
 */
export const list = (config) => {
  const { apikey, secret } = config

  const url = urljoin(URL, 'orders')


  const headers = Object.assign({}, {
    headers: {
      Authorization: `TDAX-API ${apikey}`,
      Signature: sign(secret, '')
    },
    params:{
      Symbol:'XLM_THB',
      Offset:0,
      Limit:20,
      // Limit:-1,
      Status:'open'
    }
  })

  return axios.get(url, headers)
    .then(res => res.data)
}