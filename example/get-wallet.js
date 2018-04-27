var lib = require('../lib')

const config = {
  apikey: '',
  secret: '',
  userid: ''
}

lib.user.get(config)
  .then(r => {
    console.log('Get Completed,', r)
  })
  .catch(e => {
    console.log('Get failed,', e)
  })