/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor'

function FrontpageColumnSave({ attributes }) {
  const { sectionTag } = attributes

  const SectionTag = sectionTag

  return (
    <SectionTag {...useBlockProps.save()}>
      <InnerBlocks.Content />
    </SectionTag>
  )
}

export default FrontpageColumnSave
