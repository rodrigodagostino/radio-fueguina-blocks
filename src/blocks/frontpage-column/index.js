/**
 * BLOCK: Front-Page Column
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
  title: __( 'Front-Page Column', 'radiofueguinablocks' ),
  description: __(
    'A single column within a front-page section or row block.',
    'radiofueguinablocks',
  ),
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
function setBlockCustomClassName( className, blockName ) {
  return blockName === name
    ? 'radiofueguina-block-frontpage-column'
    : className
}

wp.hooks.addFilter(
  'blocks.getBlockDefaultClassName',
  'radiofueguina-blocks/radiofueguina-block-frontpage-column',
  setBlockCustomClassName,
)
