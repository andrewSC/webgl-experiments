requirejs.config({
  baseUrl: 'assets/js',
  shim: {
    'threeCore': { exports: 'THREE' }
  },
  paths: {
    threeCore: 'lib/three',
    jquery: 'lib/jquery-2.1.1.min'
  }
});
