<?php
/**
 * Plugin Name: Radio Fueguina Blocks
 * Plugin URI: https://github.com/rodrigodagostino/radio-fueguina-blocks/
 * Description: A collection of Gutenberg blocks for the Radio Fueguina theme.
 * Author: Rodrigo D’Agostino
 * Author URI: https://www.rodrigodagostino.com/
 * Text Domain: radiofueguinablocks
 * Domain Path: /languages/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package Radio Fueguina Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'RADIOFUEGUINABLOCKS_ID', 'radiofueguinablocks' );
define( 'RADIOFUEGUINABLOCKS_VERSION', '1.0.0' );
define( 'RADIOFUEGUINABLOCKS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'RADIOFUEGUINABLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'RADIOFUEGUINABLOCKS_PLUGIN_FILE', __FILE__ );
define( 'RADIOFUEGUINABLOCKS_PLUGIN_BASE', plugin_basename( __FILE__ ) );

/**
 * Block Initializer.
 */
require_once RADIOFUEGUINABLOCKS_PLUGIN_DIR . 'src/init.php';

/**
 * Block Register.
 */
require_once RADIOFUEGUINABLOCKS_PLUGIN_DIR . 'src/index.php';