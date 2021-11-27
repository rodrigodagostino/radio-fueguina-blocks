/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import {
  InnerBlocks,
  InspectorControls,
  useBlockProps,
} from '@wordpress/block-editor'
import { PanelBody, SelectControl } from '@wordpress/components'

function FrontpageColumnEdit({ attributes, setAttributes }) {
  const { sectionTag } = attributes

  const blockProps = useBlockProps()

  const SectionTag = sectionTag

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'Main', 'fleximpleblocks' ) }>
          <SelectControl
            label={ __( 'HTML Tag', 'fleximpleblocks' ) }
            value={ sectionTag }
            options={ [
              {
                label: __( '<div>', 'fleximpleblocks' ),
                value: 'div',
              },
              {
                label: __( '<section>', 'fleximpleblocks' ),
                value: 'section',
              },
              {
                label: __( '<aside>', 'fleximpleblocks' ),
                value: 'aside',
              },
              {
                label: __( '<header>', 'fleximpleblocks' ),
                value: 'header',
              },
              {
                label: __( '<main>', 'fleximpleblocks' ),
                value: 'main',
              },
              {
                label: __( '<footer>', 'fleximpleblocks' ),
                value: 'footer',
              },
            ] }
            onChange={ value =>
              setAttributes({ sectionTag: value })
            }
          />
        </PanelBody>
      </InspectorControls>

      <SectionTag { ...blockProps }>
        <InnerBlocks
          templateLock={ false }
          templateInsertUpdatesSelection={ false }
        />
      </SectionTag>
    </>
  )
}

export default FrontpageColumnEdit
