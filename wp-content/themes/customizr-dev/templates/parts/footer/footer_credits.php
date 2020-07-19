<?php
/**
 * The template for displaying the footer credits
 *
 */
?>
<div id="footer__credits" class="footer__credits" <?php czr_fn_echo('element_attributes') ?>>
  <p class="czr-copyright">
    <span class="czr-copyright-text">&copy;&nbsp;<?php echo esc_attr( date('Y') ) ?>&nbsp;</span><a class="czr-copyright-link" href="<?php echo esc_url( home_url() ) ?>" title="<?php echo esc_attr( get_bloginfo() ) ?>"><?php echo esc_attr( get_bloginfo() ) ?></a><span class="czr-rights-text">&nbsp;&ndash;&nbsp;<?php _e( 'Kec. Tembilahan Hulu, Indragiri Hilir, Riau', 'customizr') ?></span>
  </p>
  <p class="czr-credits">
    <span class="czr-designer">
     <span class="czr-designer-text"><?php printf( __('Online sejak %s', 'KKNT IPB INHIL'), sprintf( '10 Juli 2020', esc_url( CZR_WEBSITE . 'customizr' ), __('KKNT IPB INHIL', 'KKNT IPB INHILZ') ) ); ?></span>
    </span>
  </p>
  <p class="czr-credits">
    <span class="czr-designer">
      <span class="czr-wp-powered"><span class="czr-wp-powered-text"><?php _e( 'Powered by', 'ceritapekankamis') ?>&nbsp;</span><a class="czr-wp-powered-link fab fa-wordpress" title="<?php _e( 'Powered by WordPress', 'ceritapekankamis' ) ?>" href="<?php echo esc_url( __( 'https://wordpress.org/', 'ceritapekankamis' ) ); ?>" target="_blank" rel="noopener noreferrer"></a></span><span class="czr-designer-text">&nbsp;&ndash;&nbsp;<?php printf( __('Dipoles oleh %s', 'KKNT IPB INHIL'), sprintf( 'KKNT IPB INHIL 2020', esc_url( CZR_WEBSITE . 'customizr' ), __('KKNT IPB INHIL', 'KKNT IPB INHILZ') ) ); ?></span>
    </span>
  </p>
</div>
