'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('src/assets/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/app-asets/css'));
};

exports.buildStyles = buildStyles;

function defaultTask() {
    gulp.default('src/assets/**/*.scss', ['sass']);
    gulp.watch('src/assets/**/*.scss', ['sass']);
}

exports.watch = defaultTask;

exports.default = defaultTask