/* /store.js 
*/
//App.ApplicationAdapter = DS.FixtureAdapter;
/*
App.ApplicationSerializer = DS.RESTSerializer.extend({
	primaryKey: '_id',
});*/

App.FB = new Firebase('https://pagerlist.firebaseio.com');
App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: App.FB,
});

