var   gulp = require('gulp')
	, babel = require('gulp-babel')
	, concat = require('gulp-concat')
	, ngAnnotate = require('gulp-ng-annotate')
	, sass = require('gulp-sass')
	, uglify = require('gulp-uglify')
	, uglifyCss = require('gulp-uglifycss')
	, watcher = gulp.watch(['./main/**/*.js', './main/styles/*.scss'], ['default']);

watcher.on('change', function( event ) {
	console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
});

gulp.task('handleJS', function() {
	gulp.src('./main/**/*.js')
			.pipe(ngAnnotate())
			.pipe(concat('src.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('./public/scripts/'));
});

gulp.task('sass', function() {
	gulp.src('./main/styles/*.scss')
			.pipe(sass())
			.pipe(uglifyCss())
			.pipe(concat('styles.css'))
			.pipe(gulp.dest('./public/styles/'))
});

gulp.task('default', ['handleJS', 'sass']);