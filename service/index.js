const { sdk } = require('@cto.ai/sdk')
const site = require('node-static');
const http = require('http');

const file = new(site.Server)();

http.createServer(function(req, res) {
  file.serve(req, res);

  const config = require('./config.json');
  const pkg = require('./package.json')

  if(config.CTOAI_API_URL === 'https://api.cto.ai') {
    sdk.track('Deployment', {
      pipeline_id: 'cto-ai/blued',
      stage: 'Deployment',
      status: 'Succeeded',
      stage_ref: pkg.version
    })
  } else {
    sdk.track('Deployment', {
      pipeline_id: 'cto-ai/blued',
      stage: 'Deployment',
      status: 'Failure',
      stage_ref: pkg.version
    })
  }

  console.log('server started!')
  console.log(process.env)
}).listen(8080);

process.on('uncaughtException', err => {
  sdk.track('Deployment', {
    pipeline_id: 'cto-ai/blued',
    stage: 'Deployment',
    status: 'Failure',
    stage_ref: pkg.version
  })

})
