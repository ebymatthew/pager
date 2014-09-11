/* /router.js 
*/
App.Router.map(function(){
  this.route('login');
  this.resource('accounts', function(){
	    this.resource('account', { path:'/:account_id' }, function(){
	      this.route('edit');
	    });
	    this.route('create');
	  });
  this.resource('users', function(){
	    this.resource('user', { path:'/:user_id' }, function(){
	      this.route('edit');
	    });
	    this.route('create');
	  });
  this.resource('guardians', function(){
	    this.resource('guardian', { path:'/:guardian_id' }, function(){
	      this.route('edit');
	    });
	    this.route('create');
	  });
  this.resource('children', function(){
	    this.resource('child', { path:'/:child_id' }, function(){
	      this.route('edit');
	    });
	    this.route('create');
	  });
});
