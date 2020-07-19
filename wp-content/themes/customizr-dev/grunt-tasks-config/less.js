module.exports = {
	//in development mode, only the default skin (grey : #5A5A5A ) is compiled when less files are updated
	dev_common : {
		files: [
			{src: '<%= paths.less_classic %>tc_common_gen.less', dest: '<%= paths.front_css_classic %>tc_common.css'}
		]
	},
  dev_skin : {
    files: [
      {src: '<%= paths.less_classic %>tc_skin_gen.less', dest: '<%= paths.front_css_classic %>grey.css'}
    ]
  },
	//in production, skins are generated with modified less vars
	//http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
	skin_generator: {
		options: {
			modifyVars: {
				lnkCol : '<%= skin_color %>',
				is_rtl: false,
        floatDirection : 'left',
        textAlign: 'left'
			}
		},
		files: {"<%= paths.front_css_classic %><%= skin_name %>.css": "<%= paths.less_classic %>tc_skin_gen.less"}
	},
  prod_common : {
    options: {
      modifyVars: {
        is_rtl: false,
        floatDirection : 'left',
        textAlign: 'left'
      }
    },
    files: [
      {src: '<%= paths.less_classic %>tc_common_gen.less', dest: '<%= paths.front_css_classic %>tc_common.css'}
    ]
  },
  prod_common_rtl : {
    options: {
      modifyVars: {
        is_rtl: true,
        floatDirection : 'right',
        textAlign: 'right'
      }
    },
    files: [
      {src: '<%= paths.less_classic %>tc_common_gen.less', dest: '<%= paths.front_css_classic %>rtl/tc_common.css'}
    ]
  },
  custom_skin : {
    options: {
      modifyVars: {
        lnkCol : '<%= skin_color %>',
        is_rtl: false,
        floatDirection : 'left',
        textAlign: 'left'
      }
    },
    files: [
      {src: '<%= paths.less_classic %>tc_skin_gen.less', dest: 'custom-skins/<%= skin_name %>.css'}
    ]
  }
};