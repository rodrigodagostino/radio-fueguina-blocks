/* global fleximpleblocksPluginData */

const InlineStyles = ({
  defaultClassName,
  attributes: { blockId, mediaUrl, focalPoint, backgroundSize, backgroundRepeat },
  // isEditor = false,
}) => {
  const blockSelector = `.${defaultClassName}[data-block-id="${blockId}"]`
  // const editorSelector = isEditor ? '> .block-editor-inner-blocks > .block-editor-block-list__layout' : ''

  return (
    <style>
      {`${blockSelector} {
        ${mediaUrl.small ? `background-image: url('${mediaUrl.small}');` : ''}
        ${
          !!focalPoint.small.x || !!focalPoint.small.y
            ? `background-position: ${focalPoint.small.x * 100}% ${focalPoint.small.y * 100}%;`
            : ''
        }
        ${backgroundSize.small ? `background-size: ${backgroundSize.small};` : ''}
      }`}

      {`@media only screen and (min-width: ${fleximpleblocksPluginData.settings.mediumBreakpointValue}px) {
        ${blockSelector} {
          ${mediaUrl.medium ? `background-image: url('${mediaUrl.medium}');` : ''}
        ${
          (!!focalPoint.medium.x || !!focalPoint.small.y) &&
          (focalPoint.medium.x !== focalPoint.small.x || focalPoint.medium.y !== focalPoint.small.y)
            ? `background-position: ${focalPoint.medium.x * 100}% ${focalPoint.medium.y * 100}%;`
            : ''
        }
        ${!!backgroundSize.medium && backgroundSize.medium !== backgroundSize.small ? `background-size: ${backgroundSize.medium};` : ''}
        ${
          !!backgroundRepeat.medium && backgroundRepeat.medium !== backgroundRepeat.small
            ? `background-repeat: ${backgroundRepeat.medium};`
            : ''
        }
      }`}

      {`@media only screen and (min-width: ${fleximpleblocksPluginData.settings.largeBreakpointValue}px) {
        ${mediaUrl.large ? `background-image: url('${mediaUrl.large}');` : ''}
        ${
          (!!focalPoint.large.x || !!focalPoint.large.y) &&
          (focalPoint.large.x !== focalPoint.medium.x || focalPoint.large.y !== focalPoint.medium.y)
            ? `background-position: ${focalPoint.large.x * 100}% ${focalPoint.large.y * 100}%;`
            : ''
        }
        ${!!backgroundSize.large && backgroundSize.large !== backgroundSize.medium ? `background-size: ${backgroundSize.large};` : ''}
        ${
          !!backgroundRepeat.large && backgroundRepeat.large !== backgroundRepeat.medium
            ? `background-repeat: ${backgroundRepeat.large};`
            : ''
        }
      }`}
    </style>
  )
}

export default InlineStyles
