/**
 * Internal dependencies
 */
// import icons from './icons';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { Path, SVG } from '@wordpress/components'

/**
 * Template option choices for predefined form layouts.
 *
 * @constant
 * @type {Array}
 */
const variations = [
  {
    name: 'layout-1',
    title: __( 'Layout 1', 'radiofueguinablocks' ),
    className: 'layout-1',
    icon: <SVG width="100%" height="100%" viewBox="0 0 92 92" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><Path d="M60 74.499a1 1 0 00-1-.999H45a1 1 0 00-1 .999v5.002a1 1 0 001 .999h14a1 1 0 001-.999v-5.002zM86 56.5a1.008 1.008 0 00-1.002-1H63.002a1.008 1.008 0 00-1.002 1v23a1.008 1.008 0 001.002 1h21.996a1.008 1.008 0 001.002-1v-23zm-44-15c0-.55-.45-1-.999-1H6.999a1 1 0 00-.999 1v38c0 .55.45 1 .999 1h34.002c.549 0 .999-.45.999-1v-38zm21.998 16v21h20.004v-21H63.998zM60 65.499a1 1 0 00-1-.999H45a1 1 0 00-1 .999v5.002a1 1 0 001 .999h14a1 1 0 001-.999v-5.002zm0-23.998a1 1 0 00-1-1.001H45a1 1 0 00-1 1.001v19.998a1 1 0 001 1.001h14a1 1 0 001-1.001V41.501zm26 0c0-.552-.45-1.001-1.002-1.001H63.002c-.552 0-1.002.449-1.002 1.001v10.998c0 .553.45 1.001 1.002 1.001h21.996c.552 0 1.002-.448 1.002-1.001V41.501zm-22.002.998v9.002h20.004v-9.002H63.998zm-3.998-30a.997.997 0 00-.999-.999H6.999a.996.996 0 00-.999.999v25.002c0 .554.445.999.999.999h52.002a.997.997 0 00.999-.999V12.499zm26 0a1 1 0 00-1.002-.999H63.002a1 1 0 00-1.002.999v25.002a1 1 0 001.002.999h21.996A1 1 0 0086 37.501V12.499zm-22.002.999v23.004h20.004V13.498H63.998z" /></SVG>,
    isDefault: true,
    attributes: {
      className: 'is-variation-layout-1',
    },
    innerBlocks: [
      [ 'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'header' },
        [
          [ 'core/heading', {
            className: 'radiofueguina-block-frontpage-section__heading',
            content: __( 'Section Title', 'radiofueguinablocks' ),
          } ],
          [ 'fleximple-blocks/date-and-time', {
            dateFormat: 'custom',
            customDateFormat: 'l j F Y',
            displayTime: false,
          } ],
          [ 'fleximple-blocks/weather', {
            cityName: 'Río Grande,AR',
            shortName: 'RG',
            displayUnits: false,
          } ],
          [ 'fleximple-blocks/weather', {
            cityName: 'Tolhuin,AR',
            shortName: 'Tol',
            displayUnits: false,
          } ],
          [ 'fleximple-blocks/weather', {
            cityName: 'Ushuaia,AR',
            shortName: 'Ush',
            displayUnits: false,
          } ],
        ],
      ],
      [ 'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'main' },
        [
          [ 'radiofueguina-blocks/frontpage-row', {},
            [
              [ 'radiofueguina-blocks/frontpage-column', {},
                [
                  [ 'fleximple-blocks/post', {
                    className: 'is-style-level-1',
                    extraArticles: 3,
                    imageSize: {
                      small: 'medium',
                      medium: 'medium_large',
                      large: 'none',
                    },
                    aspectRatio: {
                      small: '16-10',
                      medium: 'none',
                      large: 'none',
                    },
                    displayCategories: false,
                    displayMeta: false,
                    displayExtraArticles: true,
                  } ],
                ],
              ],
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [
                  [ 'fleximple-blocks/ad' ],
                ],
              ],
            ],
          ],
          [ 'radiofueguina-blocks/frontpage-row', {},
            [
              [ 'radiofueguina-blocks/frontpage-column', {},
                [
                  [ 'radiofueguina-blocks/frontpage-row', { className: 'is-two-and-one-thirds' },
                    [
                      [ 'fleximple-blocks/post', {
                        className: 'is-style-level-1-alt',
                        extraArticles: 2,
                        imageSize: {
                          small: 'medium',
                          medium: 'medium_large',
                          large: 'none',
                        },
                        aspectRatio: {
                          small: '16-10',
                          medium: 'none',
                          large: 'none',
                        },
                        displayCategories: false,
                        displayMeta: false,
                        displayExtraArticles: true,
                      } ],
                      [ 'radiofueguina-blocks/frontpage-column', {},
                        [	
                          [ 'fleximple-blocks/post', {
                            className: 'is-style-level-2',
                            imageSize: {
                              small: 'thumbnail',
                              medium: 'medium',
                              large: 'none',
                            },
                            aspectRatio: {
                              small: '4-3',
                              medium: '16-10',
                              large: 'none',
                            },
                            displayCategories: false,
                            displayMeta: false,
                            displayExcerpt: false,
                          } ],
                          [ 'fleximple-blocks/post', {
                            className: 'is-style-level-4',
                            displayMedia: false,
                            displayCategories: false,
                            displayMeta: false,
                            displayExcerpt: false,
                          } ],
                          [ 'fleximple-blocks/post', {
                            className: 'is-style-level-4',
                            displayMedia: false,
                            displayCategories: false,
                            displayMeta: false,
                            displayExcerpt: false,
                          } ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [ 'radiofueguina-blocks/frontpage-column', {},
                [
                  [ 'fleximple-blocks/ad' ],
                  [ 'fleximple-blocks/ad' ],
                ],
              ],
            ],
          ],
        ],
      ],
    ],
    scope: [ 'block' ],
  },
  {
    name: 'layout-2',
    title: __( 'Layout 2', 'radiofueguinablocks' ),
    className: 'layout-2',
    icon: <SVG width="100%" height="100%" viewBox="0 0 92 92" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><Path d="M60 64.999A1 1 0 0059 64H45a1 1 0 00-1 .999v5.002A1 1 0 0045 71h14a1 1 0 001-.999v-5.002zM23 47a1 1 0 00-.999-1H6.999A1 1 0 006 47v23a1 1 0 00.999 1h15.002A1 1 0 0023 70V47zm19 0a1 1 0 00-.999-1H25.999A1 1 0 0025 47v23a1 1 0 00.999 1h15.002A1 1 0 0042 70V47zm44 0a1.008 1.008 0 00-1.002-1H63.002A1.008 1.008 0 0062 47v23a1.008 1.008 0 001.002 1h21.996A1.008 1.008 0 0086 70V47zm-22.002 1v21h20.004V48H63.998zM60 55.999A1 1 0 0059 55H45a1 1 0 00-1 .999v5.002A1 1 0 0045 62h14a1 1 0 001-.999v-5.002zm0-9A1 1 0 0059 46H45a1 1 0 00-1 .999v5.002A1 1 0 0045 53h14a1 1 0 001-.999v-5.002zm0-24.998A1 1 0 0059.001 21H6.999A1 1 0 006 22.001V43c0 .551.445 1 .999 1h52.002A1 1 0 0060 43V22.001zm26 0c0-.552-.45-1.001-1.002-1.001H63.002C62.45 21 62 21.449 62 22.001V43c0 .551.45 1 1.002 1h21.996C85.55 44 86 43.551 86 43V22.001zm-22.002 1v18.998h20.004V23.001H63.998z" /></SVG>,
    attributes: {
      className: 'is-variation-layout-2',
    },
    innerBlocks: [
      [ 'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'header' },
        [
          [ 'core/heading', {
            className: 'radiofueguina-block-frontpage-section__heading',
            content: __( 'Section Title', 'radiofueguinablocks' ),
          } ],
        ],
      ],
      [ 'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'main' },
        [
          [ 'radiofueguina-blocks/frontpage-row', {},
            [
              [ 'radiofueguina-blocks/frontpage-column', {},
                [
                  [ 'fleximple-blocks/post', {
                    className: 'is-style-level-1',
                    imageSize: {
                      small: 'medium',
                      medium: 'medium_large',
                      large: 'none',
                    },
                    aspectRatio: {
                      small: '16-10',
                      medium: 'none',
                      large: 'none',
                    },
                    displayCategories: false,
                    displayMeta: false,
                  } ],
                ],
              ],
              [ 'radiofueguina-blocks/frontpage-column', {},
                [
                  [ 'fleximple-blocks/ad' ],
                ],
              ],
            ],
          ],
          [ 'radiofueguina-blocks/frontpage-row', {},
            [
              [ 'radiofueguina-blocks/frontpage-column', {},
                [
                  [ 'radiofueguina-blocks/frontpage-row', {},
                    [
                      [ 'fleximple-blocks/post', {
                        className: 'is-style-level-2',
                        imageSize: {
                          small: 'thumbnail',
                          medium: 'medium',
                          large: 'none',
                        },
                        aspectRatio: {
                          small: '4-3',
                          medium: '16-10',
                          large: 'none',
                        },
                        displayCategories: false,
                        displayMeta: false,
                        displayExcerpt: false,
                      } ],
                      [ 'fleximple-blocks/post', {
                        className: 'is-style-level-2',
                        extraArticles: 2,
                        imageSize: {
                          small: 'thumbnail',
                          medium: 'medium',
                          large: 'none',
                        },
                        aspectRatio: {
                          small: '4-3',
                          medium: '16-10',
                          large: 'none',
                        },
                        displayCategories: false,
                        displayMeta: false,
                        displayExcerpt: false,
                      } ],
                      [ 'radiofueguina-blocks/frontpage-column', {},
                        [	
                          [ 'fleximple-blocks/post', {
                            className: 'is-style-level-4',
                            displayMedia: false,
                            displayCategories: false,
                            displayMeta: false,
                            displayExcerpt: false,
                          } ],
                          [ 'fleximple-blocks/post', {
                            className: 'is-style-level-4',
                            displayMedia: false,
                            displayCategories: false,
                            displayMeta: false,
                            displayExcerpt: false,
                          } ],
                          [ 'fleximple-blocks/post', {
                            className: 'is-style-level-4',
                            displayMedia: false,
                            displayCategories: false,
                            displayMeta: false,
                            displayExcerpt: false,
                          } ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [ 'radiofueguina-blocks/frontpage-column', {},
                [
                  [ 'fleximple-blocks/ad' ],
                ],
              ],
            ],
          ],
        ],
      ],
    ],
    scope: [ 'block' ],
  },
  {
    name: 'layout-3',
    title: __( 'Layout 3', 'radiofueguinablocks' ),
    className: 'layout-3',
    icon: <SVG width="100%" height="100%" viewBox="0 0 92 92" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><Path d="M32 64.999c0-.264-.104-.518-.292-.707a1.007 1.007 0 00-.709-.292H7.001c-.266 0-.52.105-.709.292a1.002 1.002 0 00-.292.707v5.002c0 .264.104.518.292.707.189.187.443.292.709.292h23.998c.266 0 .52-.105.709-.292.188-.189.292-.443.292-.707v-5.002zM86 47a1.008 1.008 0 00-1.002-1H63.002A1.008 1.008 0 0062 47v23c0 .262.108.519.294.706a.99.99 0 00.708.294h21.996a.99.99 0 00.708-.294A1.01 1.01 0 0086 70V47zm-26 0a.998.998 0 00-1.001-1H35.001A1.003 1.003 0 0034 47v23a1 1 0 001.001 1h23.998A1 1 0 0060 70V47zm3.998 1v21h20.004V48H63.998zM32 55.999c0-.264-.104-.518-.292-.707a1.007 1.007 0 00-.709-.292H7.001c-.266 0-.52.105-.709.292a1.002 1.002 0 00-.292.707v5.002c0 .264.104.518.292.707.189.187.443.292.709.292h23.998c.266 0 .52-.105.709-.292.188-.189.292-.443.292-.707v-5.002zm0-9c0-.264-.104-.518-.292-.707a1.007 1.007 0 00-.709-.292H7.001c-.266 0-.52.105-.709.292a1.002 1.002 0 00-.292.707v5.002c0 .264.104.518.292.707.189.187.443.292.709.292h23.998c.266 0 .52-.105.709-.292.188-.189.292-.443.292-.707v-5.002zM60 22c0-.552-.446-1-.999-1H6.999A.998.998 0 006 22v20.999A1 1 0 006.999 44h52.002A1 1 0 0060 42.999V22zm26 0c0-.552-.45-1-1.002-1H63.002C62.45 21 62 21.448 62 22v20.999c0 .552.45 1.001 1.002 1.001h21.996C85.55 44 86 43.551 86 42.999V22zm-22.002 1.001v18.998h20.004V23.001H63.998z" /></SVG>,
    attributes: {
      className: 'is-variation-layout-3',
    },
    innerBlocks: [
      [ 'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'header' },
        [
          [ 'core/heading', {
            className: 'radiofueguina-block-frontpage-section__heading',
            content: __( 'Section Title', 'radiofueguinablocks' ),
          } ],
        ],
      ],
      [ 'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'main' },
        [
          [ 'radiofueguina-blocks/frontpage-row', {},
            [
              [ 'radiofueguina-blocks/frontpage-column', {},
                [
                  [ 'fleximple-blocks/post', {
                    className: 'is-style-level-1',
                    imageSize: {
                      small: 'medium',
                      medium: 'medium_large',
                      large: 'none',
                    },
                    aspectRatio: {
                      small: '16-10',
                      medium: 'none',
                      large: 'none',
                    },
                    displayCategories: false,
                    displayMeta: false,
                  } ],
                ],
              ],
              [ 'radiofueguina-blocks/frontpage-column', {},
                [
                  [ 'fleximple-blocks/ad' ],
                ],
              ],
            ],
          ],
          [ 'radiofueguina-blocks/frontpage-row', {},
            [
              [ 'radiofueguina-blocks/frontpage-column', {},
                [
                  [ 'radiofueguina-blocks/frontpage-row', { className: 'is-two-halves' },
                    [
                      [ 'radiofueguina-blocks/frontpage-column', {},
                        [	
                          [ 'fleximple-blocks/post', {
                            className: 'is-style-level-3',
                            imageSize: {
                              small: 'thumbnail',
                              medium: 'none',
                              large: 'none',
                            },
                            aspectRatio: {
                              small: '4-3',
                              medium: 'none',
                              large: 'none',
                            },
                            displayCategories: false,
                            displayMeta: false,
                            displayExcerpt: false,
                          } ],
                          [ 'fleximple-blocks/post', {
                            className: 'is-style-level-3',
                            imageSize: {
                              small: 'thumbnail',
                              medium: 'none',
                              large: 'none',
                            },
                            aspectRatio: {
                              small: '4-3',
                              medium: 'none',
                              large: 'none',
                            },
                            displayCategories: false,
                            displayMeta: false,
                            displayExcerpt: false,
                          } ],
                          [ 'fleximple-blocks/post', {
                            className: 'is-style-level-3',
                            imageSize: {
                              small: 'thumbnail',
                              medium: 'none',
                              large: 'none',
                            },
                            aspectRatio: {
                              small: '4-3',
                              medium: 'none',
                              large: 'none',
                            },
                            displayCategories: false,
                            displayMeta: false,
                            displayExcerpt: false,
                          } ],
                        ],
                      ],
                      [ 'fleximple-blocks/ad' ],
                    ],
                  ],
                ],
              ],
              [ 'radiofueguina-blocks/frontpage-column', {},
                [
                  [ 'fleximple-blocks/ad' ],
                ],
              ],
            ],
          ],
        ],
      ],
    ],
    scope: [ 'block' ],
  },
  {
    name: 'layout-4',
    title: __( 'Layout 4', 'radiofueguinablocks' ),
    className: 'layout-4',
    icon: <SVG width="100%" height="100%" viewBox="0 0 92 92" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><Path d="M23 34.5a1 1 0 00-.999-1H6.999a1 1 0 00-.999 1v23a1 1 0 00.999 1h15.002a1 1 0 00.999-1v-23zm37 17.999a1 1 0 00-1-.999H45a1 1 0 00-1 .999v5.002a1 1 0 001 .999h14a1 1 0 001-.999v-5.002zM42 34.5a1 1 0 00-.999-1H25.999a1 1 0 00-.999 1v23a1 1 0 00.999 1h15.002a1 1 0 00.999-1v-23zm44 0a1.008 1.008 0 00-1.002-1H63.002a1.008 1.008 0 00-1.002 1v23c0 .262.108.519.294.706a.99.99 0 00.708.294h21.996a.99.99 0 00.708-.294A1.01 1.01 0 0086 57.5v-23zm-22.002 1v21h20.004v-21H63.998zM60 43.499a1 1 0 00-1-.999H45a1 1 0 00-1 .999v5.002a1 1 0 001 .999h14a1 1 0 001-.999v-5.002zm0-9a1 1 0 00-1-.999H45a1 1 0 00-1 .999v5.002a1 1 0 001 .999h14a1 1 0 001-.999v-5.002z" /></SVG>,
    attributes: {
      className: 'is-variation-layout-4',
    },
    innerBlocks: [
      [ 'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'header' },
        [
          [ 'core/heading', {
            className: 'radiofueguina-block-frontpage-section__heading',
            content: __( 'Section Title', 'radiofueguinablocks' ),
          } ],
        ],
      ],
      [ 'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'main' },
        [
          [ 'radiofueguina-blocks/frontpage-row', {},
            [
              [ 'radiofueguina-blocks/frontpage-column', {},
                [
                  [ 'radiofueguina-blocks/frontpage-row', {},
                    [
                      [ 'fleximple-blocks/post', {
                        className: 'is-style-level-2',
                        imageSize: {
                          small: 'thumbnail',
                          medium: 'medium',
                          large: 'none',
                        },
                        aspectRatio: {
                          small: '4-3',
                          medium: '16-10',
                          large: 'none',
                        },
                        displayCategories: false,
                        displayMeta: false,
                        displayExcerpt: false,
                      } ],
                      [ 'fleximple-blocks/post', {
                        className: 'is-style-level-2',
                        extraArticles: 2,
                        imageSize: {
                          small: 'thumbnail',
                          medium: 'medium',
                          large: 'none',
                        },
                        aspectRatio: {
                          small: '4-3',
                          medium: '16-10',
                          large: 'none',
                        },
                        displayCategories: false,
                        displayMeta: false,
                        displayExcerpt: false,
                      } ],
                      [ 'radiofueguina-blocks/frontpage-column', {},
                        [	
                          [ 'fleximple-blocks/post', {
                            className: 'is-style-level-4',
                            displayMedia: false,
                            displayCategories: false,
                            displayMeta: false,
                            displayExcerpt: false,
                          } ],
                          [ 'fleximple-blocks/post', {
                            className: 'is-style-level-4',
                            displayMedia: false,
                            displayCategories: false,
                            displayMeta: false,
                            displayExcerpt: false,
                          } ],
                          [ 'fleximple-blocks/post', {
                            className: 'is-style-level-4',
                            displayMedia: false,
                            displayCategories: false,
                            displayMeta: false,
                            displayExcerpt: false,
                          } ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [ 'radiofueguina-blocks/frontpage-column', {},
                [
                  [ 'fleximple-blocks/ad' ],
                ],
              ],
            ],
          ],
        ],
      ],
    ],
    scope: [ 'block' ],
  },
  {
    name: 'layout-4-auto',
    title: __( 'Layout 4 (automatic)', 'radiofueguinablocks' ),
    className: 'layout-4-auto',
    icon: <SVG width="100%" height="100%" viewBox="0 0 92 92" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><Path d="M23 34.5a1 1 0 00-.999-1H6.999a1 1 0 00-.999 1v23a1 1 0 00.999 1h15.002a1 1 0 00.999-1v-23zm37 17.999a1 1 0 00-1-.999H45a1 1 0 00-1 .999v5.002a1 1 0 001 .999h14a1 1 0 001-.999v-5.002zM42 34.5a1 1 0 00-.999-1H25.999a1 1 0 00-.999 1v23a1 1 0 00.999 1h15.002a1 1 0 00.999-1v-23zm44 0a1.008 1.008 0 00-1.002-1H63.002a1.008 1.008 0 00-1.002 1v23c0 .262.108.519.294.706a.99.99 0 00.708.294h21.996a.99.99 0 00.708-.294A1.01 1.01 0 0086 57.5v-23zm-22.002 1v21h20.004v-21H63.998zM60 43.499a1 1 0 00-1-.999H45a1 1 0 00-1 .999v5.002a1 1 0 001 .999h14a1 1 0 001-.999v-5.002zm0-9a1 1 0 00-1-.999H45a1 1 0 00-1 .999v5.002a1 1 0 001 .999h14a1 1 0 001-.999v-5.002z" /></SVG>,
    attributes: {
      className: 'is-variation-layout-4-auto',
    },
    innerBlocks: [
      [ 'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'header' },
        [
          [ 'core/heading', {
            className: 'radiofueguina-block-frontpage-section__heading',
            content: __( 'Section Title', 'radiofueguinablocks' ),
          } ],
        ],
      ],
      [ 'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'main' },
        [
          [ 'radiofueguina-blocks/frontpage-row', {},
            [
              [ 'radiofueguina-blocks/frontpage-column', {},
                [
                  [ 'fleximple-blocks/recent-posts', {
                    columns: {
                      small: 1,
                      medium: 3,
                      large: 3,
                    },
                    gapRow: {
                      small: { value: 20, unit: 'px' },
                      medium: { value: null, unit: 'px' },
                      large: { value: null, unit: 'px' },
                    },
                    gapColumn: {
                      small: { value: 20, unit: 'px' },
                      medium: { value: null, unit: 'px' },
                      large: { value: null, unit: 'px' },
                    },
                    postsToShow: 5,
                    imageSize: {
                      small: 'thumbnail',
                      medium: 'medium',
                      large: 'none',
                    },
                    aspectRatio: {
                      small: '4-3',
                      medium: '16-10',
                      large: 'none',
                    },
                    displayCategories: false,
                    displayMeta: false,
                    displayExcerpt: false,
                  } ],
                ],
              ],
              [ 'radiofueguina-blocks/frontpage-column', {},
                [
                  [ 'fleximple-blocks/ad' ],
                ],
              ],
            ],
          ],
        ],
      ],
    ],
    scope: [ 'block' ],
  },
]

export default variations
