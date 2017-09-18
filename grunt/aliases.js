module.exports = {
  'default': ["browserSync", "watch"],
  'start': ["pug:dist", "sass", "imagemin", "copy"]
};