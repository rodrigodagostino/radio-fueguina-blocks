/**
 * Block Variations
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks'

/**
 * Unregister block styles.
 */
wp.domReady(function () {
  unregisterBlockStyle('fleximple-blocks/post', 'standard')
  unregisterBlockStyle('fleximple-blocks/post', 'stacked')
})

/**
 * Register block styles.
 */
wp.domReady(function () {
  registerBlockStyle('fleximple-blocks/post', {
    name: 'level-1',
    label: __('Level 1', 'radiofueguinablocks'),
  })
  registerBlockStyle('fleximple-blocks/post', {
    name: 'level-1-alt',
    label: __('Level 1 (alternate)', 'radiofueguinablocks'),
  })
  registerBlockStyle('fleximple-blocks/post', {
    name: 'level-2',
    label: __('Level 2', 'radiofueguinablocks'),
  })
  registerBlockStyle('fleximple-blocks/post', {
    name: 'level-3',
    label: __('Level 3', 'radiofueguinablocks'),
  })
  registerBlockStyle('fleximple-blocks/post', {
    name: 'level-4',
    label: __('Level 4', 'radiofueguinablocks'),
  })
})
