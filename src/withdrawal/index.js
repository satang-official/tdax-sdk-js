import urljoin from 'url-join'
import axios from 'axios'
import bn from 'bignumber.js'
import { URL } from '../constants'
import { sign } from '../signature'

// export
export { list } from './list'

/**
 * Create new order
 * @param {object} config
 * @param {object} withdrawal
 * @return {Promise<object>} created order object.
 */
export const create = (config, withdrawal) => {
  const { apikey, secret } = config

  // TODO: Move this to shared var for all file in order
  const url = urljoin(URL, 'withdrawals')

  withdrawal.Nonce = +(new Date())
  bn.config({ EXPONENTIAL_AT: 50 })
  if (withdrawal.Fields.Amount) {
    withdrawal.Fields.Amount = new bn(withdrawal.Fields.Amount).toString()
  }

  const headers = Object.assign({}, {
    headers: {
      Authorization: `TDAX-API ${apikey}`,
      Signature: sign(secret, withdrawal)
    }
  })

  return axios.post(url, withdrawal, headers)
    .then(res => res.data)
}
