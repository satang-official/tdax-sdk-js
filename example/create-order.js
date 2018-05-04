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
  Price: 9987654,
  Qty: 1e7,
}

lib.order.create(config,order)
  .then(r => {
    console.log('Create Order Completed,', r)
  })
  .catch(e => {
    console.log('Create Order Failed,', e)
  })