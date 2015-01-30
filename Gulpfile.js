// File: Gulpfile.js
'use strict';

var gulp				= require('gulp'),
	connect				= require('gulp-connect'),
	stylus				= require('gulp-stylus'),
	nib					  = require('nib'),
	jshint				= require('gulp-jshint'),
	stylish				= require('jshint-stylish'),
	inject				= require('gulp-inject'),
	wiredep				= require('wiredep').stream,

// Busca errores en el JS y nos los muestra por pantalla
gulp.task('jshint', function() {
	return gulp.src('./assets/js/**/*.js')
	.pipe(jshint('.jshintrc'))
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(jshint.reporter('fail'));
});

// Preprocesa archivos Stylus a CSS y recarga los cambios
gulp.task('css', function() {
	gulp.src('./stylus/main.styl')
	.pipe(stylus({
		use: nib(),
		compress: true }))
	.pipe(gulp.dest('./assets/css/'))
	.pipe(connect.reload());
});

// Inyecta las librerias que instalemos vía Bower
gulp.task('bowerinject', function () {
	gulp.src('default.hbs')
	.pipe(wiredep({
		directory: '/',
	}))
	.pipe(gulp.dest('default.hbs'));
});

// Busca en las carpetas de estilos y javascript los archivos que hayamos creado
// para inyectarlos en el index.html
gulp.task('inject', function() {
	var sources = gulp.src(['./assets/js/**/*.js','./assets/css/**/*.css']);
	return gulp.src('/default.hbs')
	.pipe(inject(sources, {
		read: true,
	}))
	.pipe(gulp.dest('/'));
});


// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function() {
	gulp.watch(['./stylus/**/*.styl'], ['css', 'inject']);
	gulp.watch(['./assets/js/**/*.js', './Gulpfile.js'], ['jshint', 'inject']);
	gulp.watch(['./bower.json'], ['bowerinject']);
});



gulp.task('default', ['bowerinject', 'inject', 'watch']);


