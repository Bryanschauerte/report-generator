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

gulp.task('clientJS', function() {
	gulp.src('./main/client/**/*.js')
			.pipe(babel({
				presets: ['es2015']
			}))
			.pipe(ngAnnotate())
			.pipe(concat('src.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('./public/scripts/'));
});

gulp.task('serverJS', function() {
	gulp.src('./main/server/**/*.js')
			.pipe(babel({
				presets: ['es2015']
			}))
			.pipe(gulp.dest('./server/'));
});

gulp.task('sass', function() {
	gulp.src('./main/styles/*.scss')
			.pipe(sass())
			.pipe(uglifyCss())
			.pipe(concat('styles.css'))
			.pipe(gulp.dest('./public/styles/'));
});

gulp.task('default', ['clientJS', 'serverJS', 'sass']);