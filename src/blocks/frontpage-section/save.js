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
import InlineStyles from './inline-styles'

const { name } = metadata

function FrontpageSectionSave({
  attributes,
  attributes: { blockId, overlayColor, customOverlayColor, overlayOpacity },
}) {
  const defaultClassName = getBlockDefaultClassName(name)

  const overlayColorClass = getColorClassName('background-color', overlayColor)

  const overlayClasses = classnames(`${defaultClassName}__overlay`, {
    'has-background': (overlayColor || customOverlayColor) && overlayOpacity,
    [overlayColorClass]: overlayColorClass && overlayOpacity,
    [`opacity-${overlayOpacity}`]: overlayOpacity,
  })

  const overlayStyles = {
    backgroundColor:
      !overlayOpacity && overlayColorClass ? undefined : customOverlayColor,
  }

  return (
    <section {...useBlockProps.save()} data-block-id={blockId}>
      {(!!overlayColor || !!customOverlayColor) && (
        <div className={overlayClasses} style={overlayStyles} />
      )}

      <InnerBlocks.Content />

      <InlineStyles {...{ defaultClassName, attributes }} />
    </section>
  )
}

export default FrontpageSectionSave
