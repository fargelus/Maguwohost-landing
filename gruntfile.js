module.exports = function(grunt) {
	
	grunt.initConfig({		
		
		pug: {
			
			options: {
				pretty: true
			},

			compile: {
				options: {
					data: {
						debug: false
					}
				}
			},

			files: {
				src: "src/pug/main.pug",
				dest: "dev/index.html"
			}			
		},

		sass: {

			dist: {

				options: {
					style: "expanded"
				},

				files: {
					"dev/all.css": "src/scss/main.scss"
				}
			}			
		},

		watch: {
			src: {
				files: "src/pug/main.pug",
				tasks: ["pug"]
			},
			
			css:{
				files: "src/scss/main.scss",
				tasks: ["sass"]
			}			
		},

		browserSync: {

			bsFiles: {
				src: ["dev/index.html", "dev/all.css"]
			},

			options: {
				watchTask: true,
				server: './dev'
			}
		}
	});


	grunt.loadNpmTasks("grunt-contrib-pug");
	grunt.loadNpmTasks("grunt-contrib-sass");	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-browser-sync");

	grunt.registerTask("default", ["browserSync", "watch"]);
};