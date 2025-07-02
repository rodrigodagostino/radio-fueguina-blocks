/**
 * BLOCK: Billboard
 *
 * Allows the user to display multiple testimonials inside a slider.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'

/**
 * Internal dependencies
 */
import edit from './edit'
import save from './save'
import icon from './icon'
import metadata from './block.json'

const { name } = metadata

export { metadata, name }

export const settings = {
  title: __('Billboard', 'radiofueguinablocks'),
  description: __(
    'A single row within a front-page section or column block.',
    'radiofueguinablocks'
  ),
  icon,
  keywords: [
    /* translators: block keyword */
    __('Billboard', 'radiofueguinablocks'),
    /* translators: block keyword */
    __('Radio Fueguina block', 'radiofueguinablocks'),
  ],

  edit,
  save,
}

// Provide a custom block class
function setBlockCustomClassName(className, blockName) {
  return blockName === name ? 'radiofueguina-blocks-billboard' : className
}

wp.hooks.addFilter(
  'blocks.getBlockDefaultClassName',
  'radiofueguina-blocks/radiofueguina-blocks-billboard',
  setBlockCustomClassName
)
