var gulp = require('gulp');
	jade = require('gulp-jade')
	sass = require('gulp-sass')
	imagemin = require('gulp-imagemin')
	pngcrush = require('imagemin-pngcrush');

gulp.task('styles', function(){
	return gulp.src('./src/sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('build/development/css'));
});

gulp.task('content', function(){
	return gulp.src('./src/templates/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('build/development'));
});

/*
gulp.task('images', function(){
	return gulp.src('./src/images/*')
		.pipe(imagemin({
			progressive: true,
			use: [pngcrush()]
		}))
		.pipe(gulp.dest('build/development/images'));
});
*/

gulp.task('default', function(){
	gulp.run('styles','content');
	gulp.watch('./src/sass/**', function(event){
		gulp.run('styles');
	});
	gulp.watch('./src/templates/**', function(event){
		gulp.run('content');
	});
	//gulp.watch('./src/')
});