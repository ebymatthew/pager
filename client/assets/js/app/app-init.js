/* /app-init.js 
*/
Ember.Application.initializer({
  name: 'authentication',
  initialize: function(container, application) {
    Ember.SimpleAuth.Authenticators.OAuth2.reopen({
        serverTokenEndpoint: '/token',
        refreshAccessTokens: false
    });
    
    // maintain a decoded version of the token on the session
    Ember.SimpleAuth.Session.reopen({
		profile: function() {
		    var token = this.get('access_token');
		    return token ? jwt_decode(token) : false;
		  }.property('access_token'),
	});

    Ember.SimpleAuth.setup(container, application, { // @todo at version 0.1.2 of Ember-simple-auth, add container
        authorizerFactory: 'authorizer:oauth2-bearer'
    });
  }
});

window.App = Ember.Application.create();

App.Router.reopen({
  rootURL: '/index.html'
});
