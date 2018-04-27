var lib = require('../lib')

const config = {
  apikey: '',
  secret: '',
  userid: ''
}

const orderid = 734682

lib.order.cancel(config, orderid)
  .then(r => {
    console.log('Cancel Completed,', r)
  })
  .catch(e => {
    console.log('Cancel failed,', e)
  })