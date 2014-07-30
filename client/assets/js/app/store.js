/* /store.js 
*/
//App.ApplicationAdapter = DS.FixtureAdapter;
/*
App.ApplicationSerializer = DS.RESTSerializer.extend({
	primaryKey: '_id',
});*/

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://pagerlist.firebaseio.com')
});

