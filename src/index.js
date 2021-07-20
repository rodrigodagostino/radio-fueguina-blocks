/**
 * WordPress dependencies
 */
import {
	registerBlockType,
	unstable__bootstrapServerSideBlockDefinitions, // eslint-disable-line camelcase
} from '@wordpress/blocks'

/**
 * Internal dependencies
 */
import * as billboard from './blocks/billboard'
import * as frontpageSection from './blocks/frontpage-section'
import * as frontpageSectionColumn from './blocks/frontpage-column'
import * as frontpageSectionRow from './blocks/frontpage-row'

export const registerRadioFueguinaBlocks = () => {
	[
		billboard,
		frontpageSection,
		frontpageSectionColumn,
		frontpageSectionRow,
	].forEach( ( block ) => {
		if ( ! block ) {
			return
		}
		const { metadata, settings, name } = block
		if ( metadata ) {
			unstable__bootstrapServerSideBlockDefinitions( { [ name ]: metadata } )
		}
		registerBlockType( name, settings )
	} )
}

registerRadioFueguinaBlocks()


/**
 * Block Styles
 */
import './block-styles'
