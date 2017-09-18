module.exports = {
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
};