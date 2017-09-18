module.exports = {
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
};