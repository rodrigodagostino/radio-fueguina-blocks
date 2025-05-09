/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { getBlockDefaultClassName } from '@wordpress/blocks'
import {
  getColorClassName,
  InnerBlocks,
  useBlockProps,
} from '@wordpress/block-editor'

/**
 * Internal dependencies
 */
import metadata from './block.json'
import { hexToRGB } from '../../js/utils'
import InlineStyles from './inline-styles'

const { name } = metadata

function BillboardSave({
  attributes,
  attributes: {
    minHeight,
    mediaId,
    mediaUrl,
    focalPoint,
    backgroundSize,
    backgroundRepeat,
    overlayColor,
    customOverlayColor,
    overlayColorValue,
    overlayOpacity,
  },
}) {
  const defaultClassName = getBlockDefaultClassName(name)

  const classes = classnames({
    [`min-height-${
      minHeight.value + (minHeight.unit === '%' ? 'pct' : minHeight.unit)
    }`]: minHeight.value,
    [`background-image-id-${mediaId}`]: mediaId && mediaUrl,
    [`background-position-${focalPoint.x * 100}-${focalPoint.y * 100}`]:
      mediaId && (focalPoint.x || focalPoint.y),
    [`background-size-${backgroundSize}`]: mediaId && backgroundSize,
    [`background-repeat-${backgroundRepeat}`]: mediaId && backgroundRepeat,
  })

  const overlayColorClass = getColorClassName('background-color', overlayColor)

  const overlayClasses = classnames(`${defaultClassName}__overlay`, {
    'has-background':
      (overlayColor || customOverlayColor) && overlayOpacity === 100,
    [overlayColorClass]: overlayColorClass && overlayOpacity === 100,
  })

  const overlayStyles = {
    backgroundColor:
      overlayOpacity !== 100 && overlayColorValue
        ? `rgba(${hexToRGB(overlayColorValue)},${overlayOpacity / 100})`
        : undefined,
  }

  return (
    <div {...useBlockProps.save({ className: classes })}>
      <div className={overlayClasses} style={overlayStyles}>
        <InnerBlocks.Content />
      </div>

      <InlineStyles {...{ defaultClassName, attributes }} />
    </div>
  )
}

export default BillboardSave
