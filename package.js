Package.describe({
  "summary": "Reactive Data Source for Search",
  "version": "1.2.1",
  "git": "https://github.com/Sewdn/search-source.git",
  "name": "sewdn:search-source"
});

Npm.depends({
  "body-parser": "1.10.1"
});

Package.onUse(function(api) {
  configurePackage(api);
  api.export(['SearchSource']);
});

Package.onTest(function(api) {
  configurePackage(api);

  api.use(['tinytest', 'mongo-livedata'], ['client', 'server']);
});

function configurePackage(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use([
    'tracker', 'underscore', 'mongo', 'reactive-var',
    'http'
  ], ['client']);
  api.use('meteorhacks:picker@1.0.1', 'server');

  api.add_files([
    'lib/server.js',
  ], ['server']);

  api.add_files([
    'lib/client.js',
  ], ['client']);
}
