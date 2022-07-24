import gulp from 'gulp'
import {plugins} from "./gulp/config/plugins.js";
import {path} from "./gulp/config/path.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins:plugins
}

// imports
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { fontsConvert } from "./gulp/tasks/fonts.js";
import { spriteSvg } from "./gulp/tasks/spriteSvg.js";
import { zip } from "./gulp/tasks/zip.js";




// watcher

function watcher () {
    gulp.watch(path.watch.files,copy);
    gulp.watch(path.watch.html,html);
    gulp.watch(path.watch.scss,scss);
    gulp.watch(path.watch.js,js);
    gulp.watch(path.watch.images,images);
}

// export { spriteSvg }

const mainTasks = gulp.series(fontsConvert,gulp.parallel(copy,html,scss,js,images,spriteSvg));

const dev = gulp.series(reset,mainTasks,gulp.parallel(watcher,server));

const build = gulp.series(reset,mainTasks);

const deployZIP = gulp.series(reset,mainTasks,zip);

export { dev }
export { build }
export { deployZIP }

// default task
gulp.task('default',dev);