process.env.VUE_ENV = 'server';

const express = require('express');
const app = express();
const vm = require('./dist/server-entry')['default'];
const renderer = require('vue-server-renderer').createRenderer();
const fs = require('fs');

function page(appHtml) {
  const indexTemplate = fs.readFileSync('./index.html', 'utf8');
  return indexTemplate.replace('<!-- CONTENT_PLACEHOLDER -->', appHtml);
}

app.get('/', function (req, res) {
  renderer.renderToString(vm, (err, html) => {
    res.send(page(html));
  })
});

app.use(express.static(__dirname));

app.listen(8080, function () {
  console.log('Vue app with server rendering listening on port 8080!');
});
