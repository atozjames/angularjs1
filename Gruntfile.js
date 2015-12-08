module.exports = function (grunt) {

var LIVERELOAD_PORT = 35729;

grunt.initConfig({
  
//   watch: {
//     files: ['**/*'],
//     tasks: ['jshint'],
//   },
   // connect: {
   //          server: {
   //              options: {
   //              	base:'angular',
   //                  keepalive: true
   //              }
   //          }
   //      }

   connect: {
     server: {
       options: {
         base: 'angular',
         // This will inject live reload script into the html
        // livereload: LIVERELOAD_PORT
        livereload: true,
        
       }
     }
   },
   
   watch: {
     options: {
       //livereload: LIVERELOAD_PORT
        livereload: true,
     },
     files: "./angular/*.html",
 
   }

});

grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-watch');

// Run grunt server to get going
  grunt.registerTask('server', [
    'connect',
    'watch'
  ]);

}