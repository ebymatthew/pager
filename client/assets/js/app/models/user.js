/* /models/user.js 
*/
App.User = DS.Model.extend({
  name         : DS.attr('string'),
  email         : DS.attr('string'),
  admin         : DS.attr('boolean', {defaultValue: false})
});

App.User.FIXTURES = [{
  id: 1,
  name: 'Sponge Bob',
  email: 'bob@sponge.com',
  admin: true
}, {
  id: 2,
  name: 'John David',
  email: 'john@david.com',
  admin: false
}
];