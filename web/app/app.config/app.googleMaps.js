module.exports = [
  'uiGmapGoogleMapApiProvider',
  function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyAuSQEEsGScfCtwfmanmr0o_qnZnGXhUdg',
      // v: '3.20',
      libraries: 'places'
    });
  }
];
