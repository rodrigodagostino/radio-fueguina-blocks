<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package Radio Fueguina Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
  exit;
}


function radiofueguinablocks_enqueue_admin_assets() {
  wp_enqueue_script(
    'radiofueguinablocks-admin-scripts',
    plugins_url( 'dist/admin-script.js', dirname( __FILE__ ) ),
    array( 'wp-api', 'wp-i18n', 'wp-components', 'wp-element' ),
    date( 'Ymd.His', filemtime( RADIOFUEGUINABLOCKS_PLUGIN_DIR . 'dist/admin-script.js' ) ),
    true
  );
  wp_enqueue_style(
    'radiofueguinablocks-admin-styles',
    plugins_url( 'dist/editor-style.css', dirname( __FILE__ ) ),
    array( 'wp-components' ),
    date( 'Ymd.His', filemtime( RADIOFUEGUINABLOCKS_PLUGIN_DIR . 'dist/editor-style.css' ) )
  );
}


/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function radiofueguinablocks_enqueue_styles() {
  // Front-end Styles
  wp_enqueue_style(
    'radiofueguinablocks-styles',
    plugins_url( 'dist/style.css', dirname( __FILE__ ) ),
    array(),
    date( 'Ymd.His', filemtime( RADIOFUEGUINABLOCKS_PLUGIN_DIR . 'dist/style.css' ) )
  );
}
add_action( 'enqueue_block_assets', 'radiofueguinablocks_enqueue_styles', 10 );


/**
 * Enqueue Gutenberg block assets for frontend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function radiofueguinablocks_enqueue_scripts() {
  // Front-end Scripts
  if ( file_exists( get_template_directory_uri() . '/dist/frontend-script.js' ) ) {
    wp_enqueue_script(
      'fleximple-frontend-scripts',
      plugins_url( 'dist/frontend-script.js', dirname( __FILE__ ) ),
      array(),
      date( 'Ymd.His', filemtime( RADIOFUEGUINABLOCKS_PLUGIN_DIR . 'dist/frontend-script.js' ) ),
      true
    );
  }
}
add_action( 'wp_enqueue_scripts', 'radiofueguinablocks_enqueue_scripts', 10 );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function radiofueguinablocks_enqueue_editor_assets() {
  // Scripts
  wp_enqueue_script(
    'radiofueguinablocks-editor-scripts',
    plugins_url( 'dist/index.js', dirname( __FILE__ ) ),
    array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components' ),
    date( 'Ymd.His', filemtime( RADIOFUEGUINABLOCKS_PLUGIN_DIR . 'dist/index.js' ) ),
    true
  );

  // Front-end Styles
  wp_enqueue_style(
    'radiofueguinablocks-editor-styles',
    plugins_url( 'dist/editor-style.css', dirname( __FILE__ ) ),
    array( 'wp-edit-blocks' ),
    date( 'Ymd.His', filemtime( RADIOFUEGUINABLOCKS_PLUGIN_DIR . 'dist/editor-style.css' ) )
  );

  // Translation JSON
  if ( function_exists( 'wp_set_script_translations' ) ) {
    wp_set_script_translations(
      'radiofueguinablocks-editor-scripts',
      'radiofueguinablocks',
      plugin_dir_path( dirname( __FILE__ ) ) . 'languages'
    );
  }

  // Localized data
  wp_localize_script(
    'radiofueguinablocks-editor-scripts',
    'radiofueguinablocksPluginData',
    array(
      'homeUrl' => esc_url( home_url() ),
      'pluginUrl' => RADIOFUEGUINABLOCKS_PLUGIN_URL
    )
  );
}
add_action( 'enqueue_block_editor_assets', 'radiofueguinablocks_enqueue_editor_assets', 10 );


/**
 * Load all translations for our plugin from the MO file.
 */
function radiofueguinablocks_load_translations() {
  load_plugin_textdomain( 'radiofueguinablocks', FALSE, basename( dirname( __FILE__, 2 ) ) . '/languages/' );
}
add_action( 'plugins_loaded', 'radiofueguinablocks_load_translations', 10 );


/**
 * Register custom block category.
 */
function radiofueguinablocks_register_block_category( $categories, $post ) {
  return array_merge(
    array(
      array(
        'title' => __( 'Radio Fueguina Blocks', 'radiofueguinablocks' ),
        'slug' => 'radiofueguina-blocks',
      ),
    ),
    $categories
  );
}
add_filter( 'block_categories_all', 'radiofueguinablocks_register_block_category', 10, 2 );
