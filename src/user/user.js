import urljoin from 'url-join'
import axios from 'axios'
import { URL } from '../constants'
import { sign } from '../signature'

/**
 * Retrieves User detail
 * @param {object} config {apikey,secret,userid}
 * @return {Promise<object>} User detail object.
 */
export const get = (config) => {
  const { apikey, userid, secret } = config

  const url = urljoin(URL, 'users', userid)
  const headers = Object.assign({}, {
    headers: {
      Authorization: `TDAX-API ${apikey}`,
      Signature: sign(secret, '')
    }
  })

  return axios.get(url, headers)
    .then(res => res.data)
}