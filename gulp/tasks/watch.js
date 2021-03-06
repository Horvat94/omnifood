	var gulp = require('gulp'),//spremenljivka gulp
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

	gulp.task('watch', function(){//funkcija posluša spremembe, ki jih shranimo
    
    browserSync.init({//avtomatsko osveževanje strani
    	notify: false,//skrije obvestilo v brskalniku
        server: {//strežnik na računalniku zažene brskalnik
            baseDir: "./"//povemo kje se nahaja naš html
        }

    });
    
	watch('./index.html',function(){
	   browserSync.reload(); //osvveži brskalnik
	});

    
	watch('./resources/css/**/*.css',function(){
		gulp.start('cssInject');// zažene določen gulp task.. metoda potrebuje ime narejeneega taska
	});
});

gulp.task('cssInject',['styles'], function(){// , dependencies, dokler se ne zažene styles task se css-inject ne bo izvedel, tako se lahko style.css pravočasno ustvari in ga pipamo v browsersync
	gulp.src("./resources/css/temp/styles/style.css")//vzamemo vsebino kompilanega css in jih predamo browsersync tako da lahko injecta na stran med procesom
		.pipe(browserSync.stream())//z pipo ga pretočimo v browsersync
		;
});