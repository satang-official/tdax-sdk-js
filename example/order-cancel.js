var lib = require('../lib')

const config = {
  apikey: '',
  secret: '',
  userid: ''
}

const orderid = 765939

lib.order.cancel(config, orderid)
  .then(r => {
    console.log('Cancel Order Completed,', r)
  })
  .catch(e => {
    console.log('Cancel Order Failed,', e)
  })