var gulp = require('gulp'),//spremenljivka gulp
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssVars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),// spremenljivki watch dodamo zahtevek za watch
	cssImport = require('postcss-import'),
	mixins = require('postcss-mixins');

gulp.task('styles', function(){//ko se shrani gledano datoteko prekopira v novo datoteko..
	//gulp.src()- kje črpati vodo , gulp.dest()-kam hočemo postaviti vodo, pipe()
	return gulp.src('./resources/css/style.css')
	.pipe(postcss([cssImport,mixins,nested,cssVars,autoprefixer]))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');//če pride do kakšne napake normalno deluje naprej
	})
	.pipe(gulp.dest('./resources/css/temp/styles'));//gulp.src()- je asyncrona funkcija zato uporabimo return
	
});