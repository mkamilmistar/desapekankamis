=== Better Recent Comments ===
Contributors: andykeith, barn2media
Donate link: https://barn2.co.uk
Tags: comments, widget, avatar, shortcode, wpml
Requires at least: 4.5
Tested up to: 5.4.1
Requires PHP: 5.6
Stable tag: 1.1.2
License: GPL-3.0
License URI: https://www.gnu.org/licenses/gpl.html

Provides an improved Recent Comments widget and a shortcode to display your recent comments on any post or page.

== Description ==

The default Recent Comments widget is somewhat limited. Better Recent Comments improves on this by providing a more flexible widget with options to show the user's actual comment, as well as show avatars and the ability to show or hide the comment date.

As well as the widget, there's a handy shortcode you can use to display your recent comments. This is useful if you need to display comments somewhere other than your sidebar or footer, such as on your homepage. Simply add the shortcode `[better_recent_comments]`.

That's not all! The plugin is also WPML compatible, which means that the comments will be restricted to those in the current language. The default WordPress widget will list all recent comments, regardless of language, so you might end up with comments for German-language posts in the sidebar of your English site. Better Recent Comments solves this and makes sure the comments are for the current language only.

Translations currently provided in Spanish, French and Italian.

Options available with the shortcode:

* `format` - the format of each recent comment. This option uses 'placeholders' which are substituted with the actual data when the comments are displayed. See the FAQs for details.
* `number` - the number of comments to display. Default: 5 comments
* `date_format` - the date and time format to use. Like WordPress, this uses a PHP date format. It defaults to 'M j, H:i'. See [this cheat sheet](http://barn2.co.uk/PHP-Date-Format.pdf) for a full list of date and time options.
* `avatar_size` - the size of the avatar in pixels. Only used if you have included {avatar} in your comment format (see 'format' option). Default: 50
* `post_status` - the status of posts to retrieve comments for. Defaults to 'publish'. Can be any valid status or a comma-separated list of statuses.
* `excerpts` - set to 'true' to show an excerpt of the comment (limited to 20 words), or 'false' to show the full comment. Default: true

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/better-recent-comments` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress
1. To add the widget, go to Appearance -> Widgets, and find the 'Better Recent Comments' widget in the list, then add to any widget area.
1. To add the shortcode, open up any page or post and add `[better_recent_comments]` where you want the comments to be displayed.

== Frequently Asked Questions ==

= How do I add the widget? =
To add the widget, go to Appearance -> Widgets, and find the 'Better Recent Comments' widget in the list, then drag to any widget area. You can then set the title for the widget, the number of comments to show, and choose to show or hide the comment avatars, dates, comment text and post link.

If you would prefer to use the shortcode to set more specific options, add a Text widget to yout sidebar instead, and then add the `[better_recent_comments]` shortcode to your widget.

= How do I use the shortcode? =
Add `[better_recent_comments]` to any post or page.

= What are the shortcode options? =
See the main [plugin description](https://wordpress.org/plugins/better-recent-comments/) for the list of shortcode options.

= How do I control the format of the comments using the `format` shortcode option? =
The `format` option allows you to choose the exact format you want for your recent comments. This option uses placeholders which are substituted with the actual data when the comments are displayed.

The available placeholders are: `{avatar}`, `{author}`, `{post}`, `{comment}` and `{date}`.

* `{avatar}` is the comment author's Gravatar image.
* `{author}` is the comment author's name.
* `{post}` is the title of the post, and contains a link to the author's comment below the post.
* '{comment}` is the actual comment text.
* '{date}` is the comment date (see the `date_format` option in the main description to set the date format)

Defaults to: `{author} on {post}: "{comment}" {date}`

= Can I see a demo of the plugin? =
Yes, please visit http://barn2.co.uk/better-recent-comments-demo/ to see Better Recent Comments in action.

= Will it work with my theme? =
The plugin has been designed to work with different themes and will take the styling from your theme for the fonts etc. where possible.

= How do I use the plugin with WPML? =
If you have a multilingual site using WPML then the plugin will display comments for the correct language automatically.

= Can you customize the plugin for me? =
Unfortunately not. We've developed this free plugin to be flexible and easy to configure so that it will be suitable for as many different websites as possible.

== Screenshots ==

1. Recent comments added to a page.

== Changelog ==

= 1.1.2 =
Release date 26 May 2020

 * Tested up to WordPress 5.4.1.
 * Added filter to disable inline CSS for avatars.

= 1.1.1 =
Release date 18 November 2019

 * Add backwards compatibility for 1.0.6 functions removed in 1.1.

= 1.1 =
Release date 18 November 2019

 * Update plugin architecture and Barn2 library code.
 * Tested up to WordPress 5.3.

= 1.0.6 =
Release date 20 November 2018

 * Added extra hooks for easier customization.
 * Tested with latest version of WordPress.

= 1.0.5 =
Release date 22 February 2018

* Tested up to WP 4.9.2
* Added various filters for easier developer customisation.
* Added French translation (credit: Whiler).

= 1.0.4 =
Release date 14 March 2017

* Added Italian translation (credit: Libri Ehret).
* Tested with WordPress 4.7.
* Other minor code improvements.

= 1.0.3 =
Added 'excerpts' shortcode option to allow user to choose whether the full comment or an excerpt is displayed. Defaults to true (i.e. show excerpt)

= 1.0.2 =
Added 'post_status' shortcode option.

= 1.0.1 =
Improve handling for themes which use custom bullets in sidebar widgets.

= 1.0 =
Initial release.
