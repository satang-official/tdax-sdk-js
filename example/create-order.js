var lib = require('../lib')

const config = {
  apikey: '',
  secret: '',
  userid: ''
}

const order = {
  Type: 'LIMIT',
  Side: 'sell',
  Symbol: 'XLM',
  Market: 'THB',
  Price: 987654,
  Qty: 1e7,
}

lib.order.create(config,order)
  .then(r => {
    console.log('Create Completed,', r)
  })
  .catch(e => {
    console.log('Create failed,', e)
  })