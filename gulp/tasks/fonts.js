import fonter from 'gulp-fonter'
import ttfToWoff2 from 'gulp-ttf2woff2'


export const fontsConvert = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'Fonts',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(app.gulp.dest(`${app.path.buildFolder}/fonts/`))
        .pipe(fonter({
            formats: ["woff"]
        }))
        .pipe(app.gulp.dest(`${app.path.buildFolder}/fonts/`))
        .pipe(fonter({
            formats: ["eot"]
        }))
        .pipe(app.gulp.dest(`${app.path.buildFolder}/fonts/`))
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        .pipe(ttfToWoff2())
        .pipe(app.gulp.dest(`${app.path.buildFolder}/fonts/`))



}