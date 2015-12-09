module.exports = function (grunt) {

grunt.initConfig({

  express: {
      server: {
        options: {
          port: 9000,
          hostname:'localhost',
          bases: ['angular'],
          livereload: true
        }
      }
    }
   ,

   watch: {
     options: {
        livereload: true,
     },
     files: "./angular/*.html",
 
   }


});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-express');

// Run grunt server to get going
grunt.registerTask('serv', ['express','watch']);

}