/* /store.js 
*/
App.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1'
});

App.ApplicationSerializer = DS.RESTSerializer.extend({
	primaryKey: '_id',
});
