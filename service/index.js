const {sdk} = require('@cto.ai/sdk');
const site = require('node-static');
const http = require('http');

const file = new(site.Server)();

const requestListener = function(req, res) {
  file.serve(req, res);
};

const server = http.createServer(requestListener);
server.listen(8080, function() {
  const config = require('./config.json');
  const pkg = require('./package.json');

  if (config.CTOAI_API_URL === 'https://api.cto.ai') {
    sdk.track('Deployment', {
      pipeline_id: 'cto-ai/debug-service',
      stage: 'Deployment',
      status: 'Succeeded',
      stage_ref: pkg.version,
    });
  } else {
    sdk.track('Deployment', {
      pipeline_id: 'cto-ai/debug-service',
      stage: 'Deployment',
      status: 'Failure',
      stage_ref: pkg.version,
    });
  }

  console.log('server started!');
});


