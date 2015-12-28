module.exports = function (grunt) {

grunt.initConfig({

  express: {
      server: {
        options: {
          port: 9000,
          hostname:'localhost',
          bases: ['angular'],
          index: 'filters.html',
          open:true,
          livereload: true
        }
      }
    }
   ,

   watch: {
     options: {
        livereload: true,
     },
     files: ["./angular/*.html","./angular/*.js"]
 
   }


});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-express');

// Run grunt server to get going
grunt.registerTask('serv', ['express','watch']);

}