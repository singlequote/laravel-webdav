const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

let path = "vendor/singlequote/laravel-filemanager/src/resources/";

mix.sass(`${path}sass/filemanager.scss`  , 'public/vendor/laravel-filemanager/filemanager.min.css');
mix.js(`${path}js/filemanager.js`        , 'public/vendor/laravel-filemanager/filemanager.min.js');

