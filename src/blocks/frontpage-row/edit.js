/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor'

/**
 * Block constants
 */
const ALLOWED_BLOCKS = ['radiofueguina-blocks/frontpage-column']

function FrontpageRowEdit() {
  const blockProps = useBlockProps()

  return (
    <div {...blockProps}>
      <InnerBlocks
        templateLock={false}
        templateInsertUpdatesSelection={false}
        allowedBlocks={ALLOWED_BLOCKS}
        orientation="horizontal"
      />
    </div>
  )
}

export default FrontpageRowEdit
