/* /controllers/loginController.js 
*/
// use the provided mixins in the login controller
App.LoginController = Ember.Controller.extend(Ember.SimpleAuth.LoginControllerMixin, {
  authenticatorFactory: 'authenticator:oauth2-password-grant'
});