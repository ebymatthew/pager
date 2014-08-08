module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    
    sass: {
      dist: {
        options: {
          style: 'compact'
        },
        files: {
          //'assets/css/style.css': 'assets/scss/style.scss'
        }
      }
    },
    
    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /assets\/js\/app\/templates\//
        },
        files: {
          'public/assets/js/templates.js': 'assets/js/app/templates/**/*.hbs'
        }
      }
    },
    
    concat: {
      styles: {
        src: [
          'bower_components/bootstrap/dist/css/bootstrap.css',
          'bower_components/bootstrap/dist/css/bootstrap-theme.css',
          'assets/css/theme.css',
        ],
        dest: 'public/assets/css/style.css'
      },
      libs: {
        src: [
          'bower_components/jquery/jquery.js',
          'bower_components/handlebars/handlebars.js',
          'bower_components/ember/ember.js',
          'bower_components/ember-data/ember-data.js',
          'bower_components/moment/moment.js',
          //'bower_components/ember-simple-auth/ember-simple-auth.js',
          //'bower_components/ember-simple-auth/ember-simple-auth-oauth2.js',
          'bower_components/jwt-decode/build/jwt-decode.min.js'
        ],
        dest: 'public/assets/js/libs.js'
      },
      app: {
        src: 'assets/js/app/**/*.js',
        dest: 'public/assets/js/app.js'
      }
    },
    
    copy: {
      main: {
        files: [
        {
           expand: true, 
           cwd: 'bower_components/bootstrap/dist/', 
           src: ['**',], 
           dest: 'public/assets/'
        },
        {
           src: ['index.html',], 
           dest: 'public/'
        },
        ]
      }
    },

    watch: {
      sass: {
        files: 'assets/scss/*.scss',
        tasks: ['sass']
      }, 
      emberTemplates: {
        files: 'assets/js/app/templates/**/*.hbs',
        tasks: ['emberTemplates']
      }, 
      concat: {
        files: ['assets/js/**/*.js', '!assets/js/app.js', '!assets/js/libs.js', '!assets/js/templates.js'],
        tasks: ['concat']
      }, 
      concat: {
        files: ['index.html',],
        tasks: ['copy']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'concat', 'emberTemplates', 'copy']);
};
