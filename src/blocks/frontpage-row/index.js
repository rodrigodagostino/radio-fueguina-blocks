/**
 * BLOCK: Front-Page Row
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
  title: __('Front-Page Row', 'radiofueguinablocks'),
  description: __(
    'A single row within a front-page section or column block.',
    'radiofueguinablocks'
  ),
  parent: ['radiofueguina-blocks/frontpage-row'],
  icon,
  supports: {
    inserter: false,
    reusable: false,
    html: false,
  },

  edit,
  save,
}

// Provide a custom block class
function setBlockCustomClassName(className, blockName) {
  return blockName === name ? 'radiofueguina-block-frontpage-row' : className
}

wp.hooks.addFilter(
  'blocks.getBlockDefaultClassName',
  'radiofueguina-blocks/radiofueguina-block-frontpage-row',
  setBlockCustomClassName
)
