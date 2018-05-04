var lib = require('../lib')

const config = {
  apikey: '',
  secret: '',
  userid: ''
}


lib.withdrawal.list(config)
  .then(r => {
    console.log('List Withdrawal Completed,', r)
  })
  .catch(e => {
    console.log('List Withdrawal Failed,', e)
  })