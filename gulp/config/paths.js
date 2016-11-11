module.exports = {
    app : {

        index : './web/index.html',
        sass : './web/app/**/*.scss',
        sassGlobal: './web/style/**/*.scss',
        scripts : './web/app/**/*.js',
        templates : './web/app/**/*.html',
        fonts: './web/fonts/**/*',
        images: './web/img/**/*',
        vendor: './web/app/app.vendor/**/*.js',
        app : './web/app/app.js',
        appComponents: './web/app/app.components',
        appConfig: './web/app/app.config',
        appConstants: './web/app/app.constants',
        appDirectives: './web/app/app.directives',
        appFilters: './web/app/app.filters',
        appInterceptors: './web/app/app.interceptors',
        appServices: './web/app/app.services',
        bowerComponents : './bower_components'
    },
    dist : {
        index : './dist',
        sass : './dist/app',
        sassGlobal: './dist/style/',
        scripts : './dist/app',
        templates : './dist/app',
        vendor : './dist/vendor',
        fonts: './dist/fonts',
        images: './dist/img'
    }
};
