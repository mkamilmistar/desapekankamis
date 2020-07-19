<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'desapekankamis' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define('FS_METHOD', 'direct');

define( 'JETPACK_DEV_DEBUG', false );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'fx~/!p{-Y`!ZNoD?@8r-QlIjP]vs*?X&U]E@2YrMRhL[u)A1`R0zM1{F~7yy /|S' );
define( 'SECURE_AUTH_KEY',  '?:~_9bdlr2zjfD65[ aa]8N{5X2e`[dBl1|/NE[[$X|nFH+Uy#7`>(rT]>)a?G%u' );
define( 'LOGGED_IN_KEY',    '$V4 aX6hT!a!>?~Oq9ssP<Wo1MdT;Dy,r g}a<;8z?=o8.Y@u!wSsnEZRT7 kz$1' );
define( 'NONCE_KEY',        'A3GlC~~uSW5>hd!@(eWg/0W9GrY^ak_B.fc5F)JE~]2nhH@ceQCVoBZ.4.t%Xi5)' );
define( 'AUTH_SALT',        '(,}Dp4ke}>XFo]o1p(%y4uhF-o?wLiLT3Kb/tHezj:[}PrcZeN~LDgTQpI^Pnk8;' );
define( 'SECURE_AUTH_SALT', 'q#@*)@BAuNcMRBkQ3~*`fOV1#H@D$ tl</.dueh;9hD#H@S[r|4qN(y5z,f=tF*a' );
define( 'LOGGED_IN_SALT',   'ZFXYd-oj6gGC^UAK14q2X]e*rl3.p7@6~T=t8A<tU}>w8M&R6FxK$}iA8<nIB#=t' );
define( 'NONCE_SALT',       '@;;.:$v!Kkus7[b;-,$~GQ+ng)8*rdtw%(fJs`,YHK/45hKM%T0:~f//cu5J*MFC' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
