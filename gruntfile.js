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
				tasks: ["copy:js"]
			},

			fonts: {
				files: "src/fonts/*",
				tasks: ["copy:fonts"]
			}
		},

		copy:{
			js:{
				files: [{
						expand: true,
						cwd: "src/js/",
						src: "**",
						dest: "build/js"
					}					
				]
			},

			fonts:{
				files: [{
						expand: true,
						cwd: "src/fonts/",
						src: "*",
						dest: "build/fonts"
					}
				]
			}
		}
	});

	require('load-grunt-tasks')(grunt);
	grunt.registerTask("default", ["browserSync", "watch"]);
};