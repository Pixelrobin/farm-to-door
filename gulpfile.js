const path = require("path");

const gulp       = require("gulp");
const pug        = require("gulp-pug");
const livereload = require("gulp-livereload");
const webpack    = require("gulp-webpack");

gulp.task("js", function() {
    return gulp.src('js/client.js')
        .pipe(webpack({
            watch: true,
            
            output: {
                filename: 'bundle.js',
            },
        }))
        .pipe(gulp.dest('js/'));
})

gulp.task("views", function() {
    return gulp.src("views/*.pug")
        .pipe(pug({}))
        .pipe(gulp.dest("."))
        .pipe(livereload());
});

gulp.task("default", ["views"], function() {
    livereload.listen({basePath: "."});
    gulp.watch("views/**/*.pug", ["views"]);
    gulp.watch("css/**/*.css", ["views"]);
})