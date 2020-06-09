const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '50a73ffd',
  apiSecret: 'GuAXCdfyNeuRz7cb',
});
nexmo.verify.request({
    number: '237683616156',
    brand: 'Vonage',
    code_length: '4'
  }, (err, result) => {
    console.log(err ? err : result)
  });
  nexmo.verify.control({
    request_id: 'REQUEST_ID',
    cmd: 'cancel'
  }, (err, result) => {
    console.log(err ? err : result)
  });
  nexmo.verify.check({
    request_id: 'REQUEST_ID',
    code: 'CODE'
  }, (err, result) => {
    console.log(err ? err : result)
  });