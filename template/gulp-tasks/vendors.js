'use strict'
var gulp = require('gulp');
var concat = require('gulp-concat');
var merge = require('merge-stream');
const del = require('del');


gulp.task('clean:vendors', function () {
    return del([
      './assets/vendors/**/*'
    ]);
});

/*Building vendor scripts needed for basic template rendering*/
gulp.task('buildBaseVendorScripts', function() {
    return gulp.src([
        './node_modules/material-components-web/dist/material-components-web.min.js',
        './node_modules/jquery/dist/jquery.min.js', 
        './node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js'
    ])
      .pipe(concat('vendor.bundle.base.js'))
      .pipe(gulp.dest('./assets/vendors/js'));
});

/*Building vendor styles needed for basic template rendering*/
gulp.task('buildBaseVendorStyles', function() {
    return gulp.src(['./node_modules/perfect-scrollbar/css/perfect-scrollbar.css'])
      .pipe(concat('vendor.bundle.base.css'))
      .pipe(gulp.dest('./assets/vendors/css'));
});

/*Scripts for addons*/
gulp.task('buildOptionalVendorScripts', function() {
    var aScript1 = gulp.src(['./node_modules/jquery-toast-plugin/dist/jquery.toast.min.js'])
        .pipe(gulp.dest('./assets/vendors/jquery.toast'));
    var aScript2 = gulp.src(['./node_modules/sweetalert/dist/sweetalert.min.js'])
        .pipe(gulp.dest('./assets/vendors/sweetalert'));
    var aScript3 = gulp.src(['./node_modules/chart.js/dist/Chart.min.js'])
        .pipe(gulp.dest('./assets/vendors/chartjs'));
    var aScript4 = gulp.src(['./node_modules/jquery.flot/jquery.flot.js'])
        .pipe(gulp.dest('./assets/vendors/jquery.flot'));
    var aScript5 = gulp.src(['./node_modules/jquery.flot/jquery.flot.resize.js'])
        .pipe(gulp.dest('./assets/vendors/jquery.flot'));
    var aScript6 = gulp.src(['./node_modules/jquery.flot/jquery.flot.categories.js'])
        .pipe(gulp.dest('./assets/vendors/jquery.flot'));
    var aScript7 = gulp.src(['./node_modules/jquery.flot/jquery.flot.fillbetween.js'])
        .pipe(gulp.dest('./assets/vendors/jquery.flot'));
    var aScript8 = gulp.src(['./node_modules/jquery.flot/jquery.flot.stack.js'])
        .pipe(gulp.dest('./assets/vendors/jquery.flot'));
    var aScript9 = gulp.src(['./node_modules/jquery.flot/jquery.flot.pie.js'])
        .pipe(gulp.dest('./assets/vendors/jquery.flot'));
    var aScript10 = gulp.src(['node_modules/codemirror/lib/codemirror.js'])
        .pipe(gulp.dest('./assets/vendors/codemirror'));
    var aScript11 = gulp.src(['node_modules/codemirror/mode/javascript/javascript.js'])
        .pipe(gulp.dest('./assets/vendors/codemirror'));
    var aScript12 = gulp.src(['node_modules/codemirror/mode/shell/shell.js'])
        .pipe(gulp.dest('./assets/vendors/codemirror'));
    var aScript13 = gulp.src(['node_modules/jvectormap/jquery-jvectormap.min.js'])
        .pipe(gulp.dest('./assets/vendors/jvectormap'));
    var aScript14 = gulp.src(['node_modules/jvectormap/tests/assets/jquery-jvectormap-world-mill-en.js'])
        .pipe(gulp.dest('./assets/vendors/jvectormap'));
    var aScript15 = gulp.src(['node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'])
        .pipe(gulp.dest('./assets/vendors/bootstrap-datepicker'));
    var aScript16 = gulp.src(['node_modules/jquery-bar-rating/dist/jquery.barrating.min.js'])
        .pipe(gulp.dest('./assets/vendors/jquery-bar-rating'));
    var aScript17 = gulp.src(['node_modules/chart.js/dist/Chart.min.js'])
        .pipe(gulp.dest('./assets/vendors/chart.js'));
    var aScript18 = gulp.src(['node_modules/clipboard/dist/clipboard.min.js'])
        .pipe(gulp.dest('./assets/vendors/clipboard'));  
    var aScript19 = gulp.src(['node_modules/jquery-contextmenu/dist/jquery.contextMenu.min.js'])
        .pipe(gulp.dest('./assets/vendors/jquery-contextmenu'));
    var aScript20 = gulp.src(['node_modules/nouislider/distribute/nouislider.min.js'])
        .pipe(gulp.dest('./assets/vendors/nouislider'));
    var aScript21 = gulp.src(['node_modules/ion-rangeslider/js/ion.rangeSlider.min.js'])
        .pipe(gulp.dest('./assets/vendors/ion-rangeslider/js'));
    var aScript22 = gulp.src(['node_modules/dragula/dist/dragula.min.js'])
        .pipe(gulp.dest('./assets/vendors/dragula'));
    var aScript23 = gulp.src(['node_modules/c3/c3.js'])
        .pipe(gulp.dest('./assets/vendors/c3')); 
    var aScript24 = gulp.src(['node_modules/d3/dist/d3.min.js'])
        .pipe(gulp.dest('./assets/vendors/d3'));
    var aScript25 = gulp.src(['node_modules/chartist/dist/chartist.min.js'])
        .pipe(gulp.dest('./assets/vendors/chartist'));
    var aScript26 = gulp.src(['node_modules/justgage/raphael.min.js'])
      .pipe(gulp.dest('./assets/vendors/justgage'));
    var aScript27 = gulp.src(['node_modules/justgage/justgage.js'])
      .pipe(gulp.dest('./assets/vendors/justgage'));
    var aScript28 = gulp.src(['node_modules/morris.js/morris.min.js'])
    .pipe(gulp.dest('./assets/vendors/morris.js'));
    var aScript29 = gulp.src(['node_modules/raphael/raphael.min.js'])
        .pipe(gulp.dest('./assets/vendors/raphael'));
    var aScript30 = gulp.src(['node_modules/jquery-sparkline/jquery.sparkline.min.js'])
        .pipe(gulp.dest('./assets/vendors/jquery-sparkline')); 
    var aScript31 = gulp.src(['node_modules/colcade/colcade.js'])
        .pipe(gulp.dest('./assets/vendors/colcade'));
    var aScript32 = gulp.src(['node_modules/owl.carousel/dist/owl.carousel.min.js'])
        .pipe(gulp.dest('./assets/vendors/owl.carousel'));
    var aScript33 = gulp.src(['node_modules/jvectormap/jquery-jvectormap.min.js'])
        .pipe(gulp.dest('./assets/vendors/jvectormap'));
    var aScript34 = gulp.src(['node_modules/jvectormap/tests/assets/jquery-jvectormap-world-mill-en.js'])
        .pipe(gulp.dest('./assets/vendors/jvectormap'));
    var aScript35 = gulp.src(['node_modules/jvectormap/tests/assets/jquery-jvectormap-world-mill-en.js'])
        .pipe(gulp.dest('./assets/vendors/jvectormap'));
    var aScript36 = gulp.src(['node_modules/jquery-mapael/js/jquery.mapael.min.js'])
        .pipe(gulp.dest('./assets/vendors/jquery-mapael'));   
    var aScript37 = gulp.src(['node_modules/jquery-mapael/js/maps/france_departments.min.js'])
        .pipe(gulp.dest('./assets/vendors/jquery-mapael'));
    var aScript38 = gulp.src(['node_modules/jquery-mapael/js/maps/world_countries.min.js'])
        .pipe(gulp.dest('./assets/vendors/jquery-mapael'));
    var aScript39 = gulp.src(['node_modules/jquery-mapael/js/maps/usa_states.min.js'])
        .pipe(gulp.dest('./assets/vendors/jquery-mapael'));
    var aScript40 = gulp.src(["node_modules/datatables/media/js/jquery.dataTables.min.js"])
        .pipe(gulp.dest("./assets/vendors/datatables/js"));
    var aScript41 = gulp.src(['node_modules/jquery-bar-rating/dist/jquery.barrating.min.js'])
        .pipe(gulp.dest('./assets/vendors/jquery-bar-rating'));
    var aScript42 = gulp.src(['node_modules/jquery-sparkline/jquery.sparkline.min.js'])
        .pipe(gulp.dest('./assets/vendors/jquery-sparkline'));
    var aScript43 = gulp.src(['node_modules/jquery-sparkline/jquery.sparkline.min.js'])
        .pipe(gulp.dest('./assets/vendors/jquery-sparkline')); 
    var aScript44 = gulp.src(['node_modules/jquery-tags-input/dist/jquery.tagsinput.min.js'])
        .pipe(gulp.dest('./assets/vendors/jquery-tags-input'));
    var aScript45 = gulp.src(['node_modules/dropify/dist/js/dropify.min.js'])
        .pipe(gulp.dest('./assets/vendors/dropify'));
    var aScript46 = gulp.src(['node_modules/dropzone/dist/dropzone.js'])
        .pipe(gulp.dest('./assets/vendors/dropzone'));
    var aScript47 = gulp.src(['node_modules/jquery-file-upload/js/jquery.uploadfile.min.js'])
        .pipe(gulp.dest('./assets/vendors/jquery-file-upload'));
    var aScript48 = gulp.src(['node_modules/jquery.repeater/jquery.repeater.min.js'])
        .pipe(gulp.dest('./assets/vendors/jquery.repeater'));
    var aScript49 = gulp.src(["node_modules/@fullcalendar/core/main.js"])
        .pipe(gulp.dest("./assets/vendors/fullcalendar/core"));
    var aScript50 = gulp.src(["node_modules/@fullcalendar/daygrid/main.js"])
        .pipe(gulp.dest("./assets/vendors/fullcalendar/daygrid"));
    var aScript51 = gulp.src(["node_modules/@fullcalendar/timegrid/main.js"])
        .pipe(gulp.dest("./assets/vendors/fullcalendar/timegrid"));
    var aScript52 = gulp.src(["node_modules/@fullcalendar/list/main.js"])
        .pipe(gulp.dest("./assets/vendors/fullcalendar/list"));
    var aScript53 = gulp.src(["node_modules/moment/moment.js"])
        .pipe(gulp.dest("./assets/vendors/moment"));
    var aScript54 = gulp.src(['node_modules/jquery-asColorPicker/dist/jquery-asColorPicker.min.js'])
      .pipe(gulp.dest('./assets/vendors/jquery-asColorPicker'));
    var aScript55 = gulp.src(['node_modules/jquery-asGradient/dist/jquery-asGradient.min.js'])
      .pipe(gulp.dest('./assets/vendors/jquery-asGradient'));
    var aScript56 = gulp.src(['node_modules/jquery-asColorPicker/dist/jquery-asColorPicker.min.js'])
      .pipe(gulp.dest('./assets/vendors/jquery-asColorPicker'));
    var aScript57 = gulp.src(['node_modules/jquery-asColor/dist/jquery-asColor.min.js'])
      .pipe(gulp.dest('./assets/vendors/jquery-asColor'));
    return merge(aScript1, aScript2, aScript3, aScript4, aScript5, aScript6, aScript7, aScript8, aScript9, aScript10, aScript11, aScript12, aScript13, aScript14, aScript15, aScript16, aScript17, aScript18, aScript19, aScript20, aScript21, aScript22, aScript23, aScript24, aScript25, aScript26, aScript27, aScript28, aScript29, aScript30, aScript31, aScript32, aScript33, aScript34, aScript35, aScript36, aScript37, aScript38, aScript39, aScript40, aScript41, aScript42, aScript43, aScript44, aScript45, aScript46, aScript47, aScript48, aScript49, aScript50, aScript51, aScript52, aScript53, aScript54, aScript55, aScript56, aScript57);
});


/*Styles for addons*/
gulp.task('buildOptionalVendorStyles', function() {
    var aStyle1 = gulp.src(['./node_modules/material-design-icons/iconfont/*'])
        .pipe(gulp.dest('./assets/vendors/material-design-icons/iconfont'));
    var aStyle2 = gulp.src(['./node_modules/@mdi/font/css/materialdesignicons.min.css'])
        .pipe(gulp.dest('./assets/vendors/mdi/css'));
    var aStyle3 = gulp.src(['./node_modules/@mdi/font/fonts/*'])
        .pipe(gulp.dest('./assets/vendors/mdi/fonts'));
    var aStyle4 = gulp.src(['./node_modules/jquery-toast-plugin/dist/jquery.toast.min.css'])
        .pipe(gulp.dest('./assets/vendors/jquery.toast'));
    var aStyle5 = gulp.src(['node_modules/codemirror/lib/codemirror.css'])
        .pipe(gulp.dest('./assets/vendors/codemirror'));
    var aStyle6 = gulp.src(['node_modules/codemirror/theme/dracula.css'])
        .pipe(gulp.dest('./assets/vendors/codemirror'));
    var aStyle7 = gulp.src(['node_modules/jvectormap/jquery-jvectormap.css'])
        .pipe(gulp.dest('./assets/vendors/jvectormap'));
    var aStyle8 = gulp.src(['node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'])
        .pipe(gulp.dest('./assets/vendors/bootstrap-datepicker'));
    var aStyle9 = gulp.src(['node_modules/jquery-bar-rating/dist/themes/css-stars.css'])
        .pipe(gulp.dest('./assets/vendors/jquery-bar-rating'));
    var aStyle10 = gulp.src(['node_modules/flag-icon-css/css/flag-icon.min.css'])
        .pipe(gulp.dest('./assets/vendors/flag-icon-css/css'));
    var aStyle11 = gulp.src(['node_modules/flag-icon-css/flags/**/*'])
        .pipe(gulp.dest('./assets/vendors/flag-icon-css/flags'));
    var aStyle12 = gulp.src(['node_modules/jquery-contextmenu/dist/jquery.contextMenu.min.css'])
        .pipe(gulp.dest('./assets/vendors/jquery-contextmenu'));
    var aStyle13 = gulp.src(['node_modules/nouislider/distribute/nouislider.min.css'])
        .pipe(gulp.dest('./assets/vendors/nouislider'));
    var aStyle14 = gulp.src(['node_modules/ion-rangeslider/css/ion.rangeSlider.css'])
        .pipe(gulp.dest('./assets/vendors/ion-rangeslider/css'));
    var aStyle15 = gulp.src(['node_modules/ion-rangeslider/img/*'])
        .pipe(gulp.dest('./assets/vendors/ion-rangeslider/img'));
    var aStyle16 = gulp.src(['node_modules/dragula/dist/dragula.min.css'])
        .pipe(gulp.dest('./assets/vendors/dragula')); 
    var aStyle17 = gulp.src(['node_modules/c3/c3.min.css'])
        .pipe(gulp.dest('./assets/vendors/c3'));
    var aStyle18 = gulp.src(['node_modules/chartist/dist/chartist.min.css'])
        .pipe(gulp.dest('./assets/vendors/chartist'));
    var aStyle19 = gulp.src(['node_modules/morris.js/morris.css'])
        .pipe(gulp.dest('./assets/vendors/morris.js'));
    var aStyle20 = gulp.src(['node_modules/owl.carousel/dist/assets/owl.carousel.min.css'])
        .pipe(gulp.dest('./assets/vendors/owl.carousel'));
    var aStyle21 = gulp.src(['node_modules/owl.carousel/dist/assets/owl.theme.default.min.css'])
        .pipe(gulp.dest('./assets/vendors/owl.carousel'));
    var aStyle22 = gulp.src(['node_modules/owl.carousel/dist/assets/owl.video.play.png'])
        .pipe(gulp.dest('./assets/vendors/owl.carousel'));
    var aStyle23 = gulp.src(["node_modules/datatables/media/css/jquery.dataTables.min.css"])
        .pipe(gulp.dest("./assets/vendors/datatables/css"));
    var aStyle24 = gulp.src(["node_modules/datatables/media/images/*"])
        .pipe(gulp.dest("./assets/vendors/datatables/images"));
    var aStyle25 = gulp.src(['./node_modules/font-awesome/css/font-awesome.min.css'])
        .pipe(gulp.dest('./assets/vendors/font-awesome/css'));
    var aStyle26 = gulp.src(['./node_modules/font-awesome/fonts/*'])
        .pipe(gulp.dest('./assets/vendors/font-awesome/fonts'));
    var aStyle27 = gulp.src(['node_modules/jquery-bar-rating/dist/themes/bars-horizontal.css'])
        .pipe(gulp.dest('./assets/vendors/jquery-bar-rating'));
    var aStyle28 = gulp.src(['node_modules/jquery-bar-rating/dist/themes/bars-movie.css'])
        .pipe(gulp.dest('./assets/vendors/jquery-bar-rating'));
    var aStyle29 = gulp.src(['node_modules/jquery-bar-rating/dist/themes/bars-pill.css'])
        .pipe(gulp.dest('./assets/vendors/jquery-bar-rating'));
    var aStyle30 = gulp.src(['node_modules/jquery-bar-rating/dist/themes/bars-reversed.css'])
        .pipe(gulp.dest('./assets/vendors/jquery-bar-rating'));
    var aStyle31 = gulp.src(['node_modules/jquery-bar-rating/dist/themes/bars-square.css'])
        .pipe(gulp.dest('./assets/vendors/jquery-bar-rating'));
    var aStyle32 = gulp.src(['node_modules/jquery-bar-rating/dist/themes/bootstrap-stars.css'])
        .pipe(gulp.dest('./assets/vendors/jquery-bar-rating'));
    var aStyle33 = gulp.src(['node_modules/jquery-bar-rating/dist/themes/fontawesome-stars-o.css'])
        .pipe(gulp.dest('./assets/vendors/jquery-bar-rating'));
    var aStyle34 = gulp.src(['node_modules/jquery-bar-rating/examples/css/examples.css'])
        .pipe(gulp.dest('./assets/vendors/jquery-bar-rating'));
    var aStyle35 = gulp.src(['node_modules/jquery-bar-rating/dist/themes/fontawesome-stars.css'])
        .pipe(gulp.dest('./assets/vendors/jquery-bar-rating'));
    var aStyle36 = gulp.src(['node_modules/jquery-bar-rating/dist/themes/bars-1to10.css'])
        .pipe(gulp.dest('./assets/vendors/jquery-bar-rating'));
    var aStyle37 = gulp.src(['node_modules/jquery-tags-input/dist/jquery.tagsinput.min.css'])
        .pipe(gulp.dest('./assets/vendors/jquery-tags-input'));
    var aStyle38 = gulp.src(['node_modules/dropify/dist/css/dropify.min.css'])
        .pipe(gulp.dest('./assets/vendors/dropify'));
    var aStyle39 = gulp.src(['node_modules/dropzone/dist/dropzone.css'])
        .pipe(gulp.dest('./assets/vendors/dropzone'));
    var aStyle40 = gulp.src(['node_modules/jquery-file-upload/css/uploadfile.css'])
        .pipe(gulp.dest('./assets/vendors/jquery-file-upload'));
    var aStyle41 = gulp.src(["node_modules/@fullcalendar/core/main.css"])
        .pipe(gulp.dest("./assets/vendors/fullcalendar/core"));
    var aStyle42 = gulp.src(["node_modules/@fullcalendar/daygrid/main.css"])
        .pipe(gulp.dest("./assets/vendors/fullcalendar/daygrid"));
    var aStyle43 = gulp.src(["node_modules/@fullcalendar/list/main.css"])
        .pipe(gulp.dest("./assets/vendors/fullcalendar/list"));
    var aStyle44 = gulp.src(["node_modules/@fullcalendar/timegrid/main.css"])
        .pipe(gulp.dest("./assets/vendors/fullcalendar/timegrid"));
    var aStyle45 = gulp.src(['node_modules/jquery-asColorPicker/dist/css/asColorPicker.min.css'])
        .pipe(gulp.dest('./assets/vendors/jquery-asColorPicker/css'));
    var aStyle46 = gulp.src(['node_modules/jquery-asColorPicker/dist/images/*'])
        .pipe(gulp.dest('./assets/vendors/jquery-asColorPicker/images'));
    return merge(aStyle1, aStyle2, aStyle3, aStyle4, aStyle5, aStyle6, aStyle7, aStyle8, aStyle9, aStyle10, aStyle11, aStyle12, aStyle13, aStyle14, aStyle15, aStyle16, aStyle17, aStyle18, aStyle19, aStyle20, aStyle21, aStyle22, aStyle23, aStyle24, aStyle25, aStyle26, aStyle27, aStyle28, aStyle29, aStyle30, aStyle31, aStyle32, aStyle33, aStyle34, aStyle35, aStyle36, aStyle37, aStyle38, aStyle39, aStyle40, aStyle41, aStyle42, aStyle43, aStyle44, aStyle45, aStyle46);
});

//Copy essential map files
gulp.task('copyMapFiles', function() {
    var map1 = gulp.src('node_modules/jquery-contextmenu/dist/jquery.contextMenu.min.css.map')
        .pipe(gulp.dest('./assets/vendors/jquery-contextmenu'));
    var map2 = gulp.src('node_modules/jquery-contextmenu/dist/jquery.contextMenu.min.js.map')
        .pipe(gulp.dest('./assets/vendors/jquery-contextmenu'));
    var map3 = gulp.src('node_modules/chartist/dist/chartist.min.js.map')
        .pipe(gulp.dest('./assets/vendors/chartist'));
    var map4 = gulp.src('node_modules/jquery-asColorPicker/dist/jquery-asColorPicker.min.js.map')
        .pipe(gulp.dest('./assets/vendors/jquery-asColorPicker'));
    var map5 = gulp.src('node_modules/jquery-asColorPicker/dist/css/asColorPicker.min.css.map')
        .pipe(gulp.dest('./assets/vendors/jquery-asColorPicker/css'));
    var map6 = gulp.src('node_modules/jquery-asColor/dist/jquery-asColor.min.js.map')
        .pipe(gulp.dest('./assets/vendors/jquery-asColor'));
    return merge(map1, map2, map3, map4, map5, map6);
    
});

/*sequence for building vendor scripts and styles*/
gulp.task('bundleVendors', gulp.series('clean:vendors', 'buildBaseVendorStyles','buildBaseVendorScripts', 'buildOptionalVendorScripts', 'buildOptionalVendorStyles', 'copyMapFiles'));