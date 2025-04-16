/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks'

/**
 * Internal dependencies
 */
import * as billboard from './blocks/billboard'
import * as frontpageSection from './blocks/frontpage-section'
import * as frontpageSectionColumn from './blocks/frontpage-column'
import * as frontpageSectionRow from './blocks/frontpage-row'

export const registerRadioFueguinaBlocks = () => {
  ;[
    billboard,
    frontpageSection,
    frontpageSectionColumn,
    frontpageSectionRow,
  ].forEach((block) => {
    if (!block) return
    const { metadata, settings } = block
    registerBlockType(metadata, settings)
  })
}

registerRadioFueguinaBlocks()

/**
 * Block Styles
 */
import './block-styles'
