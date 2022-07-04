/* global fleximpleblocksPluginData */

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

const { name } = metadata

function FrontpageSectionSave({
  attributes: {
    mediaId,
    mediaUrl,
    focalPoint,
    backgroundSize,
    backgroundRepeat,
    backgroundFixed,
    overlayColor,
    customOverlayColor,
    overlayOpacity,
  },
}) {
  const defaultClassName = getBlockDefaultClassName(name)

  const classes = classnames({
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
  })

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
    <section {...useBlockProps.save({ className: classes })}>
      {!!mediaId && (
        <style>
          {mediaId &&
            !!mediaUrl.small &&
            `.${defaultClassName}.background-image-id-${mediaId}--sm {
							background-image: url('${mediaUrl.small}');
						}
						${
              !!focalPoint.small.x || !!focalPoint.small.y
                ? `.${defaultClassName}.background-position-${
                    focalPoint.small.x * 100
                  }-${focalPoint.small.y * 100}--sm {
								background-position: ${focalPoint.small.x * 100}% ${focalPoint.small.y * 100}%;
							}`
                : ''
            }
						${
              backgroundSize.small
                ? `.${defaultClassName}.background-size-${backgroundSize.small}--sm {
								background-size: ${backgroundSize.small};
							}`
                : ''
            }
						${
              backgroundRepeat.small
                ? `.${defaultClassName}.background-repeat-${backgroundRepeat.small}--sm {
								background-repeat: ${backgroundRepeat.small};
							}`
                : ''
            }`}

          {mediaId &&
            !!mediaUrl.medium &&
            `@media only screen and (min-width: ${
              fleximpleblocksPluginData.settings.mediumBreakpointValue
            }px) {
							${
                mediaUrl.medium
                  ? `.${defaultClassName}.background-image-id-${mediaId}--md {
								background-image: url('${mediaUrl.medium}');
							}`
                  : ''
              }
							${
                (!!focalPoint.medium.x || !!focalPoint.small.y) &&
                (focalPoint.medium.x !== focalPoint.small.x ||
                  focalPoint.medium.y !== focalPoint.small.y)
                  ? `.${defaultClassName}.background-position-${
                      focalPoint.medium.x * 100
                    }-${focalPoint.medium.y * 100}--md {
								background-position: ${focalPoint.medium.x * 100}% ${
                      focalPoint.medium.y * 100
                    }%;
							}`
                  : ''
              }
							${
                !!backgroundSize.medium &&
                backgroundSize.medium !== backgroundSize.small
                  ? `.${defaultClassName}.background-size-${backgroundSize.medium}--md {
								background-size: ${backgroundSize.medium};
							}`
                  : ''
              }
							${
                !!backgroundRepeat.medium &&
                backgroundRepeat.medium !== backgroundRepeat.small
                  ? `.${defaultClassName}.background-repeat-${backgroundRepeat.medium}--md {
								background-repeat: ${backgroundRepeat.medium};
							}`
                  : ''
              }
						}`}

          {mediaId &&
            !!mediaUrl.large &&
            `@media only screen and (min-width: ${
              fleximpleblocksPluginData.settings.largeBreakpointValue
            }px) {
							${
                mediaUrl.large
                  ? `.${defaultClassName}.background-image-id-${mediaId}--lg {
								background-image: url('${mediaUrl.large}');
							}`
                  : ''
              }
							${
                (!!focalPoint.large.x || !!focalPoint.large.y) &&
                (focalPoint.large.x !== focalPoint.medium.x ||
                  focalPoint.large.y !== focalPoint.medium.y)
                  ? `.${defaultClassName}.background-position-${
                      focalPoint.large.x * 100
                    }-${focalPoint.large.y * 100}--lg {
								background-position: ${focalPoint.large.x * 100}% ${focalPoint.large.y * 100}%;
							}`
                  : ''
              }
							${
                !!backgroundSize.large &&
                backgroundSize.large !== backgroundSize.medium
                  ? `.${defaultClassName}.background-size-${backgroundSize.large}--lg {
								background-size: ${backgroundSize.large};
							}`
                  : ''
              }
							${
                !!backgroundRepeat.large &&
                backgroundRepeat.large !== backgroundRepeat.medium
                  ? `.${defaultClassName}.background-repeat-${backgroundRepeat.large}--lg {
								background-repeat: ${backgroundRepeat.large};
							}`
                  : ''
              }
						}`}
        </style>
      )}

      {(!!overlayColor || !!customOverlayColor) && (
        <div className={overlayClasses} style={overlayStyles} />
      )}

      <InnerBlocks.Content />
    </section>
  )
}

export default FrontpageSectionSave
