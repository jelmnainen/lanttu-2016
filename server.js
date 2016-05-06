const path = require('path');
const express = require('express');

const root = path.join(__dirname, 'dist');
const port = process.env.PORT || 8080;

const request = require('request');
const Promise = require('bluebird');

const API_KEY = "a4c3d157961b7db2d0fd9a98611aa0738ba896386bf56e94aa4af7fea094e1c9";
const space_id = "50is5y5r38dm";


function get_content_fetch_url(content_type) {
  return `https://cdn.contentful.com/spaces/${space_id}/entries?access_token=${API_KEY}&content_type=${content_type}`;
}

function prequest (url) {
  return new Promise((resolve, reject) => {
    request.get(url, (err, req, body) => {
      if (err) return reject(err);
      return resolve(body);
    });
  });
}

function get_content(content_type) {
  return prequest(get_content_fetch_url(content_type))
  .then(r => JSON.parse(r))
  .then(r => {
    return {
        items: r.items.map(item => item.fields),
        assets: r.includes.Asset.map(asset => Object.assign(asset.fields, {id: asset.sys.id})).reduce((o, v, i) => {
          o[v.id] = v;
          return o;
        }, {})
    };
  })
}


function get_news() {
  return get_content('news')
}

function get_compos() {
  return get_content('compos')
}

function get_news() {
  return get_content('news')
}

function get_partners() {
  return get_content('partners')
}
function get_instructions() {
  return get_content('instructions')
}

function get_frontpage() {
  return get_content('frontpageGreetings')
}

const app = express();

app.get('/api/compos', (req, res) => {
  get_compos().then(c => res.send(c))
});

app.get('/api/news', (req, res) => {
  get_news().then(c => res.send(c))
});

app.get('/api/partners', (req, res) => {
  get_partners().then(c => res.send(c))
});
app.get('/api/instructions', (req, res) => {
  get_instructions().then(c => res.send(c))
});
app.get('/api/frontpage', (req, res) => {
  get_frontpage().then(c => res.send(c))
});


if (process.env.NODE_ENV === 'production') {

  app.use(express.static(root));

} else {

  const webpack = require('webpack');
  const config = require('./webpack.config');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    watchOptions: {
      poll: true,
    },
  }));
  app.use(require('webpack-hot-middleware')(compiler));

}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

if (!module.parent) {
  app.listen(port, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`Listening on localhost:${port}`);
  });
}

module.exports = app;
