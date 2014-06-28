/* /models/child.js 
*/
App.Child = DS.Model.extend({
  name         : DS.attr('string'),
  notes         : DS.attr('string'),
  guardians     : DS.hasMany('guardian', { async: true })
});