import urljoin from 'url-join'
import axios from 'axios'
import bn from 'bignumber.js'
import { URL } from '../constants'
import { sign } from '../signature'

export const create = (config, order) => {
  const { apikey, secret } = config

  const url = urljoin(URL, 'orders')

  order.Nonce = +(new Date())
  bn.config({ EXPONENTIAL_AT: 50 })
  if (order.Qty) {
    order.Qty = new bn(order.Qty).toString()
  }

  const headers = Object.assign({}, {
    headers: {
      Authorization: `TDAX-API ${apikey}`,
      Signature: sign(secret, order)
    }
  })

  return axios.post(url, order, headers)
    .then(res => res.data)
}