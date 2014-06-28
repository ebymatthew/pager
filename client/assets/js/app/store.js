/* /store.js 
*/
//App.ApplicationAdapter = DS.FixtureAdapter;
/*
App.ApplicationSerializer = DS.RESTSerializer.extend({
	primaryKey: '_id',
});*/

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'https://pager-c9-ebymatthew.c9.io/api'
});

