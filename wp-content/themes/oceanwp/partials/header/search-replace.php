<?php
/**
 * Site header search header replace
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Post type.
$post_type = get_theme_mod( 'ocean_menu_search_source', 'any' );

// Aria labels.
$oaria_close = __( 'Close search form', 'oceanwp' );

// Label and placeholder text.
$osearch_text = __( 'Type then hit enter to search...', 'oceanwp' );

// Apply filter for child theming.
$osearch_text = apply_filters( 'ocean_header_replace_search_text', $osearch_text );

?>

<div id="searchform-header-replace" class="header-searchform-wrap clr">
<form role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-searchform">
		<span class="screen-reader-text"><?php esc_html_e( 'Search for:', 'oceanwp' ); ?></span>
		<input type="search" name="s" autocomplete="off" value="" placeholder="<?php echo esc_attr( $osearch_text ); ?>" />
		<?php if ( 'any' !== $post_type ) { ?>
			<input type="hidden" name="post_type" value="<?php echo esc_attr( $post_type ); ?>">
		<?php } ?>
		<?php do_action( 'wpml_add_language_form_field' ); ?>
	</form>
	<span id="searchform-header-replace-close" class="icon-close" aria-label="<?php echo esc_attr( $oaria_close ); ?>"></span>
</div><!-- #searchform-header-replace -->
