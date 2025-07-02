/**
 * External dependencies
 */
import classNames from 'classnames'
import get from 'lodash.get'
import map from 'lodash.map'
import isEqual from 'lodash.isequal'

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import {
  ColorPalette,
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  __experimentalBlockVariationPicker as BlockVariationPicker,
  useBlockProps,
  withColors,
} from '@wordpress/block-editor'
import {
  createBlock,
  getBlockDefaultClassName,
  registerBlockVariation,
} from '@wordpress/blocks'
import {
  BaseControl,
  Button,
  FocalPointPicker,
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
} from '@wordpress/components'
import { compose, withInstanceId } from '@wordpress/compose'
import { withSelect, withDispatch } from '@wordpress/data'
import { useEffect, useState } from '@wordpress/element'

/**
 * Internal dependencies
 */
import metadata from './block.json'
import ResponsiveSettingsTabPanel from 'fleximple-components/components/responsive-settings-tab-panel'
import { setResponsiveAttribute } from './../../js/utils'
import InlineStyles from './inline-styles'

/**
 * Block constants
 */
const ALLOWED_MEDIA_TYPES = ['image', 'video']
const ALLOWED_BLOCKS = [
  'core/heading',
  'core/paragraph',
  'core/separator',
  'core/spacer',
]

function Content({
  attributes,
  attributes: {
    mediaId,
    mediaUrl,
    focalPoint,
    backgroundSize,
    backgroundRepeat,
    backgroundFixed,
    overlayOpacity,
  },
  setAttributes,
  overlayColor,
  setOverlayColor,
  clientId,
  instanceId,
  defaultVariation,
  innerBlockCount,
  hasInnerBlocks,
  innerBlocks,
}) {
  const [template, setTemplate] = useState(null)

  useEffect(() => {
    if (hasInnerBlocks) {
      setTemplate(innerBlocks)
    }

    if (
      !supportsInnerBlocksPicker() &&
      !supportsBlockVariationPicker() &&
      hasInnerBlocks === false
    ) {
      setTemplate(defaultVariation)
    }
  }, [])

  useEffect(() => {
    setAttributes({ blockId: clientId })
  }, [clientId])

  useEffect(() => {
    // Store the selected innerBlocks layout in state so that undo and redo functions work properly.
    setTemplate(innerBlockCount ? innerBlocks : null)
  }, [attributes.innerBlockCount, attributes.innerBlocks])

  const supportsInnerBlocksPicker = () => {
    return typeof InnerBlocks.prototype === 'undefined' ? false : true
  }

  const supportsBlockVariationPicker = () => {
    return !!registerBlockVariation
  }

  const blockVariationPicker = () => {
    return (
      <InnerBlocks orientation="horizontal" allowedBlocks={ALLOWED_BLOCKS} />
    )
  }

  const defaultClassName = getBlockDefaultClassName(metadata.name)

  const blockProps = useBlockProps({
    className: classNames({
      [`background-image-id-${mediaId}--sm`]: mediaId && mediaUrl.small,
      [`background-image-id-${mediaId}--md`]: mediaId && mediaUrl.medium,
      [`background-image-id-${mediaId}--lg`]: mediaId && mediaUrl.large,
      [`background-position-${focalPoint.small.x * 100}-${
        focalPoint.small.y * 100
      }--sm`]: mediaId && (focalPoint.small.x || focalPoint.small.y),
      [`background-position-${focalPoint.medium.x * 100}-${
        focalPoint.medium.y * 100
      }--md`]:
        mediaId &&
        (focalPoint.medium.x || focalPoint.medium.y) &&
        (focalPoint.medium.x !== focalPoint.small.x ||
          focalPoint.medium.y !== focalPoint.small.y),
      [`background-position-${focalPoint.large.x * 100}-${
        focalPoint.large.y * 100
      }--lg`]:
        mediaId &&
        (focalPoint.large.x || focalPoint.large.y) &&
        (focalPoint.large.x !== focalPoint.medium.x ||
          focalPoint.large.y !== focalPoint.medium.y),
      [`background-size-${backgroundSize.small}--sm`]:
        mediaId && backgroundSize.small,
      [`background-size-${backgroundSize.medium}--md`]:
        mediaId &&
        backgroundSize.medium &&
        backgroundSize.medium !== backgroundSize.small,
      [`background-size-${backgroundSize.large}--lg`]:
        mediaId &&
        backgroundSize.large &&
        backgroundSize.large !== backgroundSize.medium,
      [`background-repeat-${backgroundRepeat.small}--sm`]:
        mediaId && backgroundRepeat.small,
      [`background-repeat-${backgroundRepeat.medium}--md`]:
        mediaId &&
        backgroundRepeat.medium &&
        backgroundRepeat.medium !== backgroundRepeat.small,
      [`background-repeat-${backgroundRepeat.large}--lg`]:
        mediaId &&
        backgroundRepeat.large &&
        backgroundRepeat.large !== backgroundRepeat.medium,
      'background-attachment-fixed': mediaId && backgroundFixed,
    }),
  })

  const overlayClasses = classNames(`${defaultClassName}__overlay`, {
    'has-background': overlayColor.color && overlayOpacity,
    [overlayColor.class]: overlayColor.class && overlayOpacity,
    [`opacity-${overlayOpacity}`]: overlayOpacity,
  })

  const overlayStyles = {
    backgroundColor:
      overlayOpacity !== 0 &&
      overlayColor.color &&
      overlayColor.class === undefined
        ? overlayColor.color
        : undefined,
  }

  if (hasInnerBlocks || !supportsBlockVariationPicker()) {
    return (
      <>
        <InspectorControls>
          <PanelBody
            title={__('Background', 'radiofueguinablocks')}
            initialOpen={false}
          >
            <BaseControl
              label={__('Image', 'radiofueguinablocks')}
              id={`fleximple-blocks-row-media-control-${instanceId}`}
            >
              <MediaUploadCheck>
                <MediaUpload
                  id={`fleximple-blocks-row-media-control-${instanceId}`}
                  onSelect={(media) => {
                    setAttributes({ mediaId: media.id })
                    setResponsiveAttribute(
                      attributes,
                      setAttributes,
                      'mediaUrl',
                      ['small', 'medium', 'large'],
                      [
                        media.sizes.thumbnail.url,
                        media.sizes.medium.url,
                        media.sizes.large
                          ? media.sizes.large.url
                          : media.sizes.full.url,
                      ]
                    )
                  }}
                  allowedTypes={ALLOWED_MEDIA_TYPES}
                  value={mediaId}
                  render={({ open }) => (
                    <>
                      <Button
                        className="button button-large is-button is-default is-large width-full"
                        onClick={open}
                      >
                        {!mediaId
                          ? __('Choose background image', 'radiofueguinablocks')
                          : __('Replace image', 'radiofueguinablocks')}
                      </Button>

                      {!!mediaId && (
                        <Button
                          className="button button-link-delete width-full is-button is-large"
                          style={{ marginTop: '10px' }}
                          isDestructive
                          onClick={() => {
                            setAttributes({ mediaId: null })
                            setResponsiveAttribute(
                              attributes,
                              setAttributes,
                              'mediaUrl',
                              ['small', 'medium', 'large'],
                              [null, null, null]
                            )
                          }}
                        >
                          {__('Remove image', 'radiofueguinablocks')}
                        </Button>
                      )}

                      {!!mediaId && (
                        <ResponsiveSettingsTabPanel initialTabName="small">
                          {(tab) => (
                            <>
                              <FocalPointPicker
                                url={mediaUrl[tab.name]}
                                value={focalPoint[tab.name]}
                                onChange={(value) =>
                                  setResponsiveAttribute(
                                    attributes,
                                    setAttributes,
                                    'focalPoint',
                                    tab.name,
                                    value
                                  )
                                }
                              />

                              <SelectControl
                                label={__('Size', 'radiofueguinablocks')}
                                labelPosition="side"
                                value={backgroundSize[tab.name]}
                                options={[
                                  {
                                    label: __('Auto', 'radiofueguinablocks'),
                                    value: 'auto',
                                  },
                                  {
                                    label: __('Cover', 'radiofueguinablocks'),
                                    value: 'cover',
                                  },
                                  {
                                    label: __('Contain', 'radiofueguinablocks'),
                                    value: 'contain',
                                  },
                                ]}
                                onChange={(value) =>
                                  setResponsiveAttribute(
                                    attributes,
                                    setAttributes,
                                    'backgroundSize',
                                    tab.name,
                                    value
                                  )
                                }
                              />

                              <SelectControl
                                label={__('Repeat', 'radiofueguinablocks')}
                                labelPosition="side"
                                value={backgroundRepeat[tab.name]}
                                options={[
                                  {
                                    label: __('Repeat', 'radiofueguinablocks'),
                                    value: 'repeat',
                                  },
                                  {
                                    label: __(
                                      'Repeat X',
                                      'radiofueguinablocks'
                                    ),
                                    value: 'repeat-x',
                                  },
                                  {
                                    label: __(
                                      'Repeat Y',
                                      'radiofueguinablocks'
                                    ),
                                    value: 'repeat-y',
                                  },
                                  {
                                    label: __(
                                      'No repeat',
                                      'radiofueguinablocks'
                                    ),
                                    value: 'no-repeat',
                                  },
                                ]}
                                onChange={(value) =>
                                  setResponsiveAttribute(
                                    attributes,
                                    setAttributes,
                                    'backgroundRepeat',
                                    tab.name,
                                    value
                                  )
                                }
                              />
                            </>
                          )}
                        </ResponsiveSettingsTabPanel>
                      )}

                      {!!mediaId && (
                        <ToggleControl
                          label={__('Fixed background', 'radiofueguinablocks')}
                          checked={backgroundFixed}
                          onChange={() =>
                            setAttributes({ backgroundFixed: !backgroundFixed })
                          }
                        />
                      )}
                    </>
                  )}
                />
              </MediaUploadCheck>
            </BaseControl>

            <>
              <BaseControl
                label={__('Overlay', 'radiofueguinablocks')}
                id={`fleximple-blocks-row-tag-control-${instanceId}`}
              >
                <ColorPalette
                  value={overlayColor.color}
                  onChange={setOverlayColor}
                />
              </BaseControl>

              <RangeControl
                label={__('Overlay opacity', 'radiofueguinablocks')}
                initialPosition={30}
                min={0}
                max={100}
                step={5}
                value={overlayOpacity}
                onChange={(value) => setAttributes({ overlayOpacity: value })}
              />
            </>
          </PanelBody>
        </InspectorControls>

        <section {...blockProps}>
          {(overlayColor.color || mediaUrl.small) && (
            <div className={overlayClasses} style={overlayStyles} />
          )}

          {blockVariationPicker()}

          <InlineStyles {...{ defaultClassName, attributes, isEditor: true }} />
        </section>
      </>
    )
  }
}

const Placeholder = ({
  setAttributes,
  clientId,
  blockType,
  replaceInnerBlocks,
  defaultVariation,
  variations,
}) => {
  const createBlocksFromInnerBlocksTemplate = (innerBlocksTemplate) => {
    return map(innerBlocksTemplate, ([name, attrbts, innrBlcks = []]) =>
      createBlock(name, attrbts, createBlocksFromInnerBlocksTemplate(innrBlcks))
    )
  }

  const blockVariationPickerOnSelect = (nextVariation = defaultVariation) => {
    if (nextVariation.attributes) {
      setAttributes(nextVariation.attributes)
    }

    const submitButtonText = map(variations, (elem) => {
      if (isEqual(elem.innerBlocks, nextVariation.innerBlocks)) {
        return elem.submitButtonText
      }
    })

    setAttributes({ submitButtonText: submitButtonText.join('') })
    if (nextVariation.innerBlocks) {
      replaceInnerBlocks(
        clientId,
        createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks)
      )
    }
  }

  const blockProps = useBlockProps({
    className: 'radiofueguina-blocks-frontpage-section--placeholder',
  })

  return (
    <section {...blockProps}>
      <BlockVariationPicker
        icon={get(blockType, ['icon', 'src'])}
        label={get(blockType, ['title'])}
        instructions={__(
          'Select a layout to start with.',
          'radiofueguinablocks'
        )}
        variations={variations}
        allowSkip
        onSelect={(nextVariation) =>
          blockVariationPickerOnSelect(nextVariation)
        }
      />
    </section>
  )
}

const FrontpageSectionEdit = (props) => {
  const Component = props.hasInnerBlocks ? Content : Placeholder

  return <Component {...props} />
}

const applyWithSelect = withSelect((select, props) => {
  const { getBlocks } = select('core/block-editor')
  const { getBlocksByClientId } = select('core/editor')
  const { getBlockType, getBlockVariations, getDefaultBlockVariation } =
    select('core/blocks')
  const innerBlocks = getBlocks(props.clientId)

  return {
    // Subscribe to changes of the innerBlocks to control the display of the layout selection placeholder.
    blockType: getBlockType(props.name),
    defaultVariation:
      typeof getDefaultBlockVariation === 'undefined'
        ? null
        : getDefaultBlockVariation(props.name),
    getBlocksByClientId,
    hasInnerBlocks:
      select('core/block-editor').getBlocks(props.clientId).length > 0,
    innerBlocks,
    variations:
      typeof getBlockVariations === 'undefined'
        ? null
        : getBlockVariations(props.name),
  }
})

const applyWithDispatch = withDispatch((dispatch) => {
  const { insertBlock, replaceInnerBlocks } = dispatch('core/block-editor')

  const { updateBlockAttributes } = dispatch('core/editor')

  return {
    insertBlock,
    replaceInnerBlocks,
    updateBlockAttributes,
  }
})

export default compose([
  applyWithSelect,
  applyWithDispatch,
  withColors({ overlayColor: 'background-color' }),
  withInstanceId,
])(FrontpageSectionEdit)
