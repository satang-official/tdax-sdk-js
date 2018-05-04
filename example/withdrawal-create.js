var lib = require('../lib')

const config = {
  apikey: '',
  secret: '',
  userid: ''
}


const withdrawal = {
  Type: 'StellarAddress',
  Fields: {
    Address: 'GDHISAMF43GJN3Q2F2WEOFASN4HHM5S435X4GQL62FBMZCY7IHWPEQ5X',
    Tag: '100',
    Amount: '20000000'
  }
}


lib.withdrawal.create(config, withdrawal)
  .then(r => {
    console.log('Create Withdrawal Completed,', r)
  })
  .catch(e => {
    console.log('Create Withdrawal failed,', e)
  })