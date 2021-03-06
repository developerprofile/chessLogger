module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        env: {
            dist: '',       // main distribution directory
           
        },
	    docular: {
	    	docular_webapp_target: 'ngdocular',
	        baseUrl: 'http://192.168.0.123:8082/GrifNas/chess/ngdocular', //base tag used by Angular
	        showAngularDocs: true, //parse and render Angular documentation
	        showDocularDocs: true, //parse and render Docular documentation
	        groups: [] //groups of documentation to parse
	    },
	    ngdocs:{
	    	options: {
	    		dest: 'ngdocs',
	    		html5Mode: true
	    	},
            all: ['js/*.js']
	    	
	    },
	    jsdoc: {
	    	options: {
	    		configure: './jsdoc.json'
	    	}
	    }
	});
	
	grunt.loadNpmTasks('grunt-docular');
	grunt.loadNpmTasks('grunt-ngdocs');
	grunt.loadNpmTasks('grunt-jsdoc');
	
	grunt.registerTask('default',['jsdoc']);
}