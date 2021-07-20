/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { getBlockDefaultClassName } from '@wordpress/blocks'
import {
	ColorPalette,
	InspectorControls,
	InnerBlocks,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	withColors,
} from '@wordpress/block-editor'
import { BaseControl, Button, FocalPointPicker, PanelBody, RangeControl, SelectControl } from '@wordpress/components'
import { compose, withInstanceId } from '@wordpress/compose'

/**
 * Internal dependencies
 */
import metadata from './block.json'
import SpacingPanel from 'fleximple-components/components/spacing-panel'
import { hexToRGB } from '../../js/utils'

const { name } = metadata

/**
 * Block constants
 */
const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ]
const INNER_BLOCKS_TEMPLATE = [
	[ 'core/heading', {
		level: 3,
		textAlign: 'center',
		// textColor: 'white',
		style: { color: { text: '#f3f3f5' } },
		/* translators: content placeholder */
		placeholder: __( 'Write heading…', 'fleximpleblocks' ),
	} ],
]

function BillboardEdit( {
	attributes,
	attributes: { minHeight, mediaId, mediaUrl, focalPoint, backgroundSize, backgroundRepeat, overlayOpacity },
	overlayColor,
	setOverlayColor,
	setAttributes,
	instanceId,
} ) {
	const defaultClassName = getBlockDefaultClassName( name )

	const classes = classnames( {
		[`min-height-${ minHeight.value + ( minHeight.unit === '%' ? 'pct' : minHeight.unit ) }`]: minHeight.value,
		[`background-image-id-${ mediaId }`]: mediaId && mediaUrl,
		[`background-position-${ focalPoint.x * 100 }-${ focalPoint.y * 100 }`]: mediaId && ( focalPoint.x || focalPoint.y ),
		[`background-size-${ backgroundSize }`]: mediaId && backgroundSize,
		[`background-repeat-${ backgroundRepeat }`]: mediaId && backgroundRepeat,
	} )

	const overlayClasses = classnames(
		`${ defaultClassName }__overlay`, {
			'has-background': overlayColor.color && overlayOpacity === 100,
			[overlayColor.class]: overlayColor.class && overlayOpacity === 100,
		},
	)

	const overlayStyles = {
		backgroundColor: overlayOpacity !== 100 && overlayColor.color ?
			`rgba(${ hexToRGB( overlayColor.color ) },${ overlayOpacity / 100 })` :
			undefined,
	}

	const blockProps = useBlockProps( { className: classes } )

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Main', 'fleximpleblocks' ) }>
				</PanelBody>

				<SpacingPanel
					title={ __( 'Spacing', 'fleximpleblocks' ) }
					controls={ [ 'min-height' ] }
					initialOpen={ false }
					isResponsive={ false }
					{ ...{ attributes, setAttributes } }
				/>

				<PanelBody title={ __( 'Background', 'fleximpleblocks' ) } initialOpen={ false }>
					<BaseControl label={ __( 'Image', 'fleximpleblocks' ) } id={ `fleximple-blocks-row-media-control-${ instanceId }` }>
						<MediaUploadCheck>
							<MediaUpload
								id={ `fleximple-blocks-row-media-control-${ instanceId }` }
								onSelect={ ( media ) => {
									setAttributes( { mediaId: media.id, mediaUrl: media.url } )
								} }
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								value={ mediaId }
								render={ ( { open } ) => (
									<>
										<Button className="button button-large is-button is-default is-large width-full" onClick={ open }>
											{ ! mediaId ? __( 'Choose background image', 'fleximpleblocks' ) : __( 'Replace image', 'fleximpleblocks' ) }
										</Button>

										{ !! mediaId && (
											<Button
												className="button button-link-delete width-full is-button is-large"
												style={ { marginTop: '10px' } }
												isDestructive
												onClick={ () => setAttributes( { mediaId: null, mediaUrl: null } ) }
											>
												{ __( 'Remove image', 'fleximpleblocks' ) }
											</Button>
										) }

										{ !! mediaId && (
											<>
												<FocalPointPicker
													url={ mediaUrl }
													value={ focalPoint }
													onChange={ ( value ) => setAttributes( { focalPoint: value } ) }
												/>

												<SelectControl
													label={ __( 'Size', 'fleximpleblocks' ) }
													labelPosition="side"
													value={ backgroundSize }
													options={ [
														{ label: __( 'Auto', 'fleximpleblocks' ), value: 'auto' },
														{ label: __( 'Cover', 'fleximpleblocks' ), value: 'cover' },
														{ label: __( 'Contain', 'fleximpleblocks' ), value: 'contain' },
													] }
													onChange={ ( value ) => setAttributes( { backgroundSize: value } ) }
												/>

												<SelectControl
													label={ __( 'Repeat', 'fleximpleblocks' ) }
													labelPosition="side"
													value={ backgroundRepeat }
													options={ [
														{ label: __( 'Repeat', 'fleximpleblocks' ), value: 'repeat' },
														{ label: __( 'Repeat X', 'fleximpleblocks' ), value: 'repeat-x' },
														{ label: __( 'Repeat Y', 'fleximpleblocks' ), value: 'repeat-y' },
														{ label: __( 'No repeat', 'fleximpleblocks' ), value: 'no-repeat' },
													] }
													onChange={ ( value ) => setAttributes( { backgroundRepeat: value } ) }
												/>
											</>
										) }
									</>
								) }
							/>
						</MediaUploadCheck>
					</BaseControl>

					<BaseControl label={ __( 'Overlay', 'fleximpleblocks' ) } id={ `fleximple-blocks-row-tag-control-${ instanceId }` }>
						<ColorPalette
							value={ overlayColor.color }
							onChange={
								setOverlayColor,
								( value ) => setAttributes( { overlayColorValue: value } )
							}
						/>
					</BaseControl>

					<RangeControl
						label={ __( 'Overlay opacity', 'fleximpleblocks' ) }
						initialPosition={ 30 }
						min={ 0 }
						max={ 100 }
						step={ 5 }
						value={ overlayOpacity }
						onChange={ ( value ) => setAttributes( { overlayOpacity: value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<style>
					{ !! minHeight.value &&
						`.${ defaultClassName }.min-height-${ minHeight.value + ( minHeight.unit === '%' ? 'pct' : minHeight.unit ) } {
							min-height: ${ minHeight.value + minHeight.unit };
						}` }
					{ !! mediaId && mediaUrl && (
						`${ !! mediaUrl ?
							`.${ defaultClassName }.background-image-id-${ mediaId } {
								background-image: url('${ mediaUrl }');
							}` : '' }
						${ !! focalPoint.x || !! focalPoint.y ?
							`.${ defaultClassName }.background-position-${ focalPoint.x * 100 }-${ focalPoint.y * 100 } {
								background-position: ${ focalPoint.x * 100 }% ${ focalPoint.y * 100 }%;
							}` : '' }
						${ !! backgroundSize ?
							`.${ defaultClassName }.background-size-${ backgroundSize } {
								background-size: ${ backgroundSize };
							}` : '' }
						${ !! backgroundRepeat ?
							`.${ defaultClassName }.background-repeat-${ backgroundRepeat } {
								background-repeat: ${ backgroundRepeat };
							}` : '' }`
					) }
				</style>

				{ !! overlayColor &&
					<div className={ overlayClasses } style={ overlayStyles }>
						<InnerBlocks
							template={ INNER_BLOCKS_TEMPLATE }
							templateLock={ false }
							templateInsertUpdatesSelection={ false }
						/>
					</div>
				}
			</div>
		</>
	)
}

export default compose( [ withColors( { overlayColor: 'background-color' } ), withInstanceId ] )( BillboardEdit )
