var gulp = require('gulp')
var uglifyjs  = require('gulp-uglify')
var babel     = require('gulp-babel')

gulp.task("minjs",function(){
    return gulp.src("src/scroll.js")
    .pipe(babel())
    .pipe(uglifyjs())
    .pipe(gulp.dest("dist/"));
});