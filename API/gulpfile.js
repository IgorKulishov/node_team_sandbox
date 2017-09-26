var gulp = require('gulp'),
	nodemon = require('nodemon'),
	jsFiles = ['/.js", "src/**/*.js'];

gulp.task('default', () => {
	nodemon({
		script:'app.js',
		ext:'js',
		env:{
			PORT:8000,
			mongodburl:'mongodb://localhost:27017/expenses'
		}

	}).on('restart', () => {
		console.log('Restarting');
	}) 
})