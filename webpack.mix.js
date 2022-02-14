let mix = require('laravel-mix');

mix.js('src/script.js', 'dist/app.js').setPublicPath('dist');
mix.postCss('src/style.css', 'dist/app.css', 
    [
        require('tailwindcss'),
        require('postcss-import'),
        require('autoprefixer'),
        require('postcss-nested')
    ])