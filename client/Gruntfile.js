module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    
    sass: {
      dist: {
        options: {
          style: 'compact'
        },
        files: {
          'assets/css/style.css': 'assets/scss/style.scss'
        }
      }
    },
    
    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /assets\/js\/app\/templates\//
        },
        files: {
          'assets/js/templates.js': 'assets/js/app/templates/**/*.hbs'
        }
      }
    },
    
    concat: {
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
        dest: 'assets/js/libs.js'
      },
      app: {
        src: 'assets/js/app/**/*.js',
        dest: 'assets/js/app.js'
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
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ember-templates');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'concat', 'emberTemplates']);
};
