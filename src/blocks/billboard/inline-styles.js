const InlineStyles = ({
  defaultClassName,
  attributes: { blockId, minHeight, mediaId, mediaUrl, focalPoint, backgroundSize, backgroundRepeat },
  // isEditor = false,
}) => {
  const blockSelector = `.${defaultClassName}[data-block-id="${blockId}"]`
  // const editorSelector = isEditor ? '> .block-editor-inner-blocks > .block-editor-block-list__layout' : ''

  return (
    <style>
      {`.${blockSelector}.min-height-${minHeight.value + (minHeight.unit === '%' ? 'pct' : minHeight.unit)} {
					min-height: ${minHeight.value + minHeight.unit};
				}`}

      {!!mediaId &&
        !!mediaUrl &&
        `.${blockSelector}.background-image-id-${mediaId} {
					background-image: url('${mediaUrl}');
				}`}

      {!!focalPoint.x || !!focalPoint.y
        ? `.${blockSelector}.background-position-${focalPoint.x * 100}-${focalPoint.y * 100} {
						background-position: ${focalPoint.x * 100}% ${focalPoint.y * 100}%;
					}`
        : ''}

      {backgroundSize
        ? `.${blockSelector}.background-size-${backgroundSize} {
						background-size: ${backgroundSize};
					}`
        : ''}

      {backgroundRepeat
        ? `.${blockSelector}.background-repeat-${backgroundRepeat} {
						background-repeat: ${backgroundRepeat};
					}`
        : ''}
    </style>
  )
}

export default InlineStyles
