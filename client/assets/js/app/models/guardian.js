/* /models/guardian.js 
*/
App.Guardian = DS.Model.extend({
  name         : DS.attr('string'),
  phone        : DS.attr('string'),
  notes        : DS.attr('string'),
  children     : DS.hasMany('child', { async: true })
});

App.Guardian.FIXTURES = [{
	  id: 1,
	  name: 'Sponge Bob',
	  phone: '615-555-5555',
	  notes: '615-555-5555',
	  children: []
	}, {
	  id: 2,
	  name: 'John David',
	  phone: '615-555-5555',
	  notes: '615-555-5555',
	  children: []
	}
	];