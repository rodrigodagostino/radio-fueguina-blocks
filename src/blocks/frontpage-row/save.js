/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor'

function FrontpageRowSave() {
  return (
    <div {...useBlockProps.save()}>
      <InnerBlocks.Content />
    </div>
  )
}

export default FrontpageRowSave
