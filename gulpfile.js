const {src, dest, watch, series} = require('gulp');
const fileinclude = require('gulp-file-include')
const terser = require('gulp-terser')
const browserSync = require('browser-sync').create();


function file_include_task() {
	return src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./'));
}


function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

function watcher(cb) {
	watch('index.html', browserSyncReload);
}

function browser_sync(cb) {
	var browserSyncOptions = {
		browser: "google chrome",
    	server: "./",
    	notify: false
	};
	browserSync.init(browserSyncOptions);
	cb();
}

exports.default = series(
	file_include_task
)

