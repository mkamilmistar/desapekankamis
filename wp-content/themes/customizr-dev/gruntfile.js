//@todo add a grunt log task before build : git log --pretty=format:"%h %s" --graph --since="2014-11-15"
//@todo save description in package json and copy in different place on each builds
//@todo add customizr.pot in replace version file list
module.exports = function(grunt) {
  var path = require('path');
  var _     = require('lodash');
  var global_config = {
    // path to task.js files, defaults to grunt dir
      configPath: path.join(process.cwd(), 'grunt-tasks-config/'),
      // auto grunt.initConfig
      init: true,
      // data passed into config ( => the basic grunt.initConfig(config) ). Can be used afterwards with < %= test % >
      data: {
        pkg: grunt.file.readJSON( 'package.json' ),
        paths : {
          theme_assets : 'assets/',
          theme_js_assets : 'assets/front/js/',

          sass_modern : 'assets/**/scss/',
          front_css_modern : 'assets/front/css/',

          less_classic : 'inc/assets/less/',
          front_css_classic : 'inc/assets/css/',

          front_js_classic : 'inc/assets/js/',

          admin_css : 'assets/back/css/',
          admin_js : 'assets/back/js/',

          dev_php_classic : 'inc/_dev/',
          inc_php_classic : 'inc/',

          core_php : 'core/',
          core_php_dev : 'core/_dev/',

          lang : 'inc/lang/',

          // New customizer
          czr_assets : 'assets/czr/',
        },
        vars : {
          textdomain : 'customizr'
        },
        //default less modifiers
        is_rtl: 'true',
        //check if a custom color is requested
        skin_name : ( grunt.option.flags()[0] && -1 != grunt.option.flags()[0].indexOf('#') ) ? [ 'custom-skin-' , grunt.option.flags()[0].replace(/-|#/g, '') ].join('') : "grey",
        skin_color : ( grunt.option.flags()[0] && -1 != grunt.option.flags()[0].indexOf('#') ) ? grunt.option.flags()[0].replace(/-/g, '') : "grey",
        //https://www.npmjs.org/package/grunt-ssh
        //Check if the context var is set and == travis => avoid travis error with ftpauth no found
        //credentials : 'travis' == grunt.option('context') ? {} : grunt.file.readJSON('.ftpauth'),
        customizr_tasks : {
          //DEV : clean the build and watch changes (see watch task)
          //'customizr4_dev': ['clean:free' , 'watch'],
          'customizr_dev': ['clean:free' ,'watch'],
          'common_css' : ['less:dev_common' , 'cssmin:dev_common' ],

          //PROD
          'prod_php' : [
            'concat:init_php_classic',
            'concat:front_php_classic',
            'concat:admin_php',
            'concat:customize_php',
            //modern style
            'concat:fmk_php_modern',
            'concat:utils_php_modern',
            'lineending:concatenated_php'
          ],
          'prod_front_css': [
            'multi:prod_skins',
            'less:prod_common',
            'less:prod_common_rtl',
            'cssmin:prod_skins' ,
            'cssmin:prod_common',
            'cssmin:prod_common_rtl',
            //modern style
            'sass:front',
            'sass:front_rtl',
            'sass:front_ms_respond',
            'concat:front_css_modern',
            'concat:front_rtl_css_modern',
            'lineending:front_css_modern',
            'cssmin:prod_front_modern'
          ],
          'prod_front_js': [
            'jshint',
            'concat:front_main_parts_js_classic',
            'concat:front_js_classic',
            'lineending:front_js',
            // 'uglify:part_front_js',
            // 'uglify:main_front_js',
            'uglify:main_front_js_classic',
            //modern style
            'concat:front_main_fmk_js_modern',
            'concat:front_js_modern',
            'lineending:front_js_modern',
            'uglify:fmk_front_js_modern',
            'uglify:main_front_js_modern',
            //'uglify:libs_front_js'
          ],
          'prod_admin_css_js' : [
            'cssmin:prod_admin_css',

            // 'concat:czr_css',
            // 'cssmin:prod_czr_css',

            // 'concat:czr_control_js',
            // 'concat:czr_control_js_modern',
            //'comments:czr_control_js',
            //'comments:czr_control_js_modern',

            // 'concat:czr_preview_js',
            // 'concat:czr_preview_js_modern',

            'lineending:czr_js',
            'uglify:prod_admin_js',
            'uglify:prod_czr_js'
          ],

          //https://www.npmjs.org/package/grunt-gitinfo
          //Get Git info from a working copy and populate grunt.config with the data
          'prod_build':  [
            //'gitinfo',
            'replace',
            'addtextdomain',
            'makepot',
            'potomo',
            'clean:free',
            'clean:in_customizr_pro',
            'copy',
            //'clean:customizr_pro_lang',
            'compress'
          ],
          //final build meta task
          'customizr_build' : [
            'prod_php',
            'prod_front_css',
            'prod_front_js',
            'prod_admin_css_js',
            'comments',
            'prod_build'
          ],

          //TRAVIS ci virtual machine build check on js @todo check other resources?
          'travis' : ['jshint'],

          //CUSTOM SKIN : call it with grunt custom_skin --#hexcolor
          'custom_skin' : ['less:custom_skin' , 'cssmin:custom_skin' ],
        },
        uglify_requested_paths : {
          src : '' || grunt.option('src'),
          dest : '' || grunt.option('dest')
        }
      }//data
    };

  // LOAD GRUNT PACKAGES AND CONFIGS
  // https://www.npmjs.org/package/load-grunt-config
  require( 'load-grunt-config' )( grunt , global_config );

  //http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
  //http://gruntjs.com/api/grunt.task#grunt.task.loadtasks
  //grunt.loadTasks('grunt-tasks');
  // REGISTER TASKS
  // grunt.util._(grunt.config('customizr_tasks')).map(function(task, name) {
  //   grunt.registerTask(name, task);
  // });
  _.map( grunt.config('customizr_tasks'), function(task, name) {
		grunt.registerTask(name, task);
	});

  //DEV WATCH EVENT
  //watch is enabled only in dev mode
  grunt.event.on('watch', function(action, filepath, target) {
    var files = [
      {
        expand: true,
        cwd: '.',
        src: [
        filepath,
        ]
      }
    ];
    grunt.log.writeln( 'WATCH EVENT INFOS : ', grunt.task.current.name , action, filepath, target);

    if ( 'admin_customizer_control_js' == target || 'admin_js' == target ) {
        //if some js admin scripts have been changed in dev mode, jshint them dynamically
        grunt.config('jshint.those', [filepath]);
    }
  });
};
