/**
 * BLOCK: Front-Page Section
 *
 * Allows the user to display an icon along with some information.
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
import variations from './variations'

const { name } = metadata

export { metadata, name }

export const settings = {
  title: __( 'Front-Page Section', 'radiofueguinablocks' ),
  description: __(
    'The main structural component to display content in the front page.',
    'radiofueguinablocks',
  ),
  icon,
  keywords: [
    /* translators: block keyword */
    __( 'Front-Page Section', 'radiofueguinablocks' ),
    /* translators: block keyword */
    __( 'Radio Fueguina block', 'radiofueguinablocks' ),
  ],
  variations,

  edit,
  save,
}

// Provide a custom block class
function setBlockCustomClassName( className, blockName ) {
  return blockName === name
    ? 'radiofueguina-block-frontpage-section'
    : className
}

wp.hooks.addFilter(
  'blocks.getBlockDefaultClassName',
  'radiofueguina-blocks/radiofueguina-block-frontpage-section',
  setBlockCustomClassName,
)
