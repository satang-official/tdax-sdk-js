var lib = require('../lib')

const config = {
  apikey: '',
  secret: '',
  userid: ''
}


lib.order.list(config)
  .then(r => {
    console.log('List Order Completed,', r)
  })
  .catch(e => {
    console.log('List Order Failed,', e)
  })