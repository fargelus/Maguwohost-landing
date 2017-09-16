module.exports = function(grunt) {
	
	grunt.initConfig({		
		
		pug: {
			
			dist: {
				options: {
					pretty: true
				},			

				files: [{
					expand: true,
					cwd: 'src/pug',
					src: '*.pug',
					dest: 'build/',
					ext: '.html'
				}]
			}
		},

		sass: {

			dist: {
				files: [{
					expand: true,
					cwd: 'src/scss',
					src: ['*.scss'],
					dest: 'build/css',
					ext: '.css'
				}]
			}			
		},		

		browserSync: {

			bsFiles: {
				src: ["build/index.html", "build/css/main.css"]
			},

			options: {
				watchTask: true,
				server: './build'
			}
		},

		imagemin:{			
			dynamic: {

				files: [{
					expand: true,
					cwd: "src/images",
					src: ["*.{png,jpg,gif,svg}"],
					dest: "build/images"
				}]
			}			
		},

		watch: {					

			src: {
				files: "src/pug/*.pug",
				tasks: ["pug"]
			},
			
			css:{
				files: "src/scss/*.scss",
				tasks: ["sass"]
			},

			images: {
				files: "src/images/*.{png,jpg,svg,gif}",
				tasks: ["imagemin"]
			},

			scripts: {
				files: "src/js/*.js",
				tasks: ["copy"]
			}
		},

		copy:{
			main:{
				files: [{
						expand: true,
						cwd: "src/js/",
						src: "**",
						dest: "build/js"
					}
				]
			}
		}
	});


	grunt.loadNpmTasks("grunt-contrib-pug");
	grunt.loadNpmTasks("grunt-contrib-sass");	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-browser-sync");	
	grunt.loadNpmTasks("grunt-contrib-imagemin");	
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask("default", ["browserSync", "watch"]);
};