module.exports = {
	options: {
			authKey: "nikeo",
			host: "<%= credentials.host %>",
			dest: "<%= credentials.path %>",
			//port: 21
	},
	those : {
		files: [
			{}//populated dynamically with the watch event
		]
	},
	dev_skin : {
		files: [
			{
				expand: true,
				cwd: '.',
				src: ['<%= paths.front_css_classic %>grey.min.css', '<%= paths.front_css_classic %>grey.css']
			}
		]
	},
  dev_common : {
    files: [
      {
        expand: true,
        cwd: '.',
        src: ['<%= paths.front_css_classic %>tc_common.min.css', '<%= paths.front_css_classic %>tc_common.css']
      }
    ]
  },
	main_front_js : {
		files: [
			{
				expand: true,
				cwd: '.',
				src: ['<%= paths.front_js_classic %>tc-scripts.js']
			}
		]
	},
	admin_customizer_control_js : {
		files: [
			{
				expand: true,
				cwd: '.',
				src: ['<%= paths.czr_assets %>js/czr-control.js']
			}
		]
	},
	prod_skins : {
		//upload the compiled skins minified and unminified
		files: [
			{
				expand: true,
				cwd: '.',
				src: ['<%= paths.front_css_classic %>*.css', '<%= paths.front_css_classic %>rtl/*.css']
			}
		]
	},
	all_front_js : {
		files: [
			{
				expand: true,
				cwd: '.',
				src: ['<%= paths.front_js_classic %>*.js']
			}
		]
	},
	all_admin_css : {
		files: [
			{
				expand: true,
				cwd: '.',
				src: ['<%= paths.admin_css %>*.css', '<%= paths.czr_assets %>css/*.css']
			}
		]
	},
	all_admin_js : {
		files: [
			{
				expand: true,
				cwd: '.',
				src: ['<%= paths.admin_js %>*.js', '<%= paths.czr_assets %>js/*.js']
			}
		]
	}
};