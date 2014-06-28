/* /app-init.js 
*/
window.App = Ember.Application.create();

App.Router.reopen({
  rootURL: '/index.html'
});
