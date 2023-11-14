/**
 * Internal dependencies
 */
// import icons from './icons';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { layoutOne, layoutTwo, layoutThree, layoutFour } from './icon'

/**
 * Template option choices for predefined form layouts.
 *
 * @constant
 * @type {Array}
 */
const variations = [
  {
    name: 'layout-1',
    title: __('Layout 1', 'radiofueguinablocks'),
    className: 'layout-1',
    icon: layoutOne,
    isDefault: true,
    attributes: {
      className: 'is-variation-layout-1',
    },
    innerBlocks: [
      [
        'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'header' },
        [
          [
            'core/heading',
            {
              className: 'radiofueguina-block-frontpage-section__heading',
              content: __('Section Title', 'radiofueguinablocks'),
            },
          ],
          [
            'fleximple-blocks/date-and-time',
            {
              dateFormat: 'custom',
              customDateFormat: 'l j F Y',
              displayTime: false,
            },
          ],
          [
            'fleximple-blocks/weather',
            {
              cityName: 'Río Grande,AR',
              shortName: 'RG',
              displayUnits: false,
            },
          ],
          [
            'fleximple-blocks/weather',
            {
              cityName: 'Tolhuin,AR',
              shortName: 'Tol',
              displayUnits: false,
            },
          ],
          [
            'fleximple-blocks/weather',
            {
              cityName: 'Ushuaia,AR',
              shortName: 'Ush',
              displayUnits: false,
            },
          ],
        ],
      ],
      [
        'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'main' },
        [
          [
            'radiofueguina-blocks/frontpage-row',
            {},
            [
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [
                  [
                    'fleximple-blocks/post',
                    {
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
                    },
                  ],
                ],
              ],
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [['fleximple-blocks/ad']],
              ],
            ],
          ],
          [
            'radiofueguina-blocks/frontpage-row',
            {},
            [
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [
                  [
                    'radiofueguina-blocks/frontpage-row',
                    { className: 'is-two-and-one-thirds' },
                    [
                      [
                        'fleximple-blocks/post',
                        {
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
                        },
                      ],
                      [
                        'radiofueguina-blocks/frontpage-column',
                        {},
                        [
                          [
                            'fleximple-blocks/post',
                            {
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
                            },
                          ],
                          [
                            'fleximple-blocks/post',
                            {
                              className: 'is-style-level-4',
                              displayMedia: false,
                              displayCategories: false,
                              displayMeta: false,
                              displayExcerpt: false,
                            },
                          ],
                          [
                            'fleximple-blocks/post',
                            {
                              className: 'is-style-level-4',
                              displayMedia: false,
                              displayCategories: false,
                              displayMeta: false,
                              displayExcerpt: false,
                            },
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [['fleximple-blocks/ad'], ['fleximple-blocks/ad']],
              ],
            ],
          ],
        ],
      ],
    ],
    scope: ['block'],
  },
  {
    name: 'layout-2',
    title: __('Layout 2', 'radiofueguinablocks'),
    className: 'layout-2',
    icon: layoutTwo,
    attributes: {
      className: 'is-variation-layout-2',
    },
    innerBlocks: [
      [
        'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'header' },
        [
          [
            'core/heading',
            {
              className: 'radiofueguina-block-frontpage-section__heading',
              content: __('Section Title', 'radiofueguinablocks'),
            },
          ],
        ],
      ],
      [
        'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'main' },
        [
          [
            'radiofueguina-blocks/frontpage-row',
            {},
            [
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [
                  [
                    'fleximple-blocks/post',
                    {
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
                    },
                  ],
                ],
              ],
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [['fleximple-blocks/ad']],
              ],
            ],
          ],
          [
            'radiofueguina-blocks/frontpage-row',
            {},
            [
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [
                  [
                    'radiofueguina-blocks/frontpage-row',
                    { className: 'is-three-thirds' },
                    [
                      [
                        'fleximple-blocks/post',
                        {
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
                        },
                      ],
                      [
                        'fleximple-blocks/post',
                        {
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
                        },
                      ],
                      [
                        'radiofueguina-blocks/frontpage-column',
                        {},
                        [
                          [
                            'fleximple-blocks/post',
                            {
                              className: 'is-style-level-4',
                              displayMedia: false,
                              displayCategories: false,
                              displayMeta: false,
                              displayExcerpt: false,
                            },
                          ],
                          [
                            'fleximple-blocks/post',
                            {
                              className: 'is-style-level-4',
                              displayMedia: false,
                              displayCategories: false,
                              displayMeta: false,
                              displayExcerpt: false,
                            },
                          ],
                          [
                            'fleximple-blocks/post',
                            {
                              className: 'is-style-level-4',
                              displayMedia: false,
                              displayCategories: false,
                              displayMeta: false,
                              displayExcerpt: false,
                            },
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [['fleximple-blocks/ad']],
              ],
            ],
          ],
        ],
      ],
    ],
    scope: ['block'],
  },
  {
    name: 'layout-2-auto',
    title: __('Layout 2 (automatic)', 'radiofueguinablocks'),
    className: 'layout-2-auto',
    icon: layoutTwo,
    attributes: {
      className: 'is-variation-layout-2-auto',
    },
    innerBlocks: [
      [
        'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'header' },
        [
          [
            'core/heading',
            {
              className: 'radiofueguina-block-frontpage-section__heading',
              content: __('Section Title', 'radiofueguinablocks'),
            },
          ],
        ],
      ],
      [
        'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'main' },
        [
          [
            'radiofueguina-blocks/frontpage-row',
            {},
            [
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [
                  [
                    'fleximple-blocks/recent-posts',
                    {
                      postsToShow: 6,
                      columns: {
                        small: 1,
                        medium: 3,
                        large: 3,
                      },
                      gapColumn: {
                        small: { value: 20, unit: 'px' },
                        medium: { value: null, unit: 'px' },
                        large: { value: null, unit: 'px' },
                      },
                      gapRow: {
                        small: { value: 20, unit: 'px' },
                        medium: { value: null, unit: 'px' },
                        large: { value: null, unit: 'px' },
                      },
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
                    },
                  ],
                ],
              ],
              [
                'radiofueguina-blocks/frontpage-column',
                { sectionTag: 'aside' },
                [['fleximple-blocks/ad']],
              ],
            ],
          ],
        ],
      ],
    ],
    scope: ['block'],
  },
  {
    name: 'layout-3',
    title: __('Layout 3', 'radiofueguinablocks'),
    className: 'layout-3',
    icon: layoutThree,
    attributes: {
      className: 'is-variation-layout-3',
    },
    innerBlocks: [
      [
        'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'header' },
        [
          [
            'core/heading',
            {
              className: 'radiofueguina-block-frontpage-section__heading',
              content: __('Section Title', 'radiofueguinablocks'),
            },
          ],
        ],
      ],
      [
        'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'main' },
        [
          [
            'radiofueguina-blocks/frontpage-row',
            {},
            [
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [
                  [
                    'fleximple-blocks/post',
                    {
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
                    },
                  ],
                ],
              ],
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [['fleximple-blocks/ad']],
              ],
            ],
          ],
          [
            'radiofueguina-blocks/frontpage-row',
            {},
            [
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [
                  [
                    'radiofueguina-blocks/frontpage-row',
                    { className: 'is-two-halves' },
                    [
                      [
                        'radiofueguina-blocks/frontpage-column',
                        {},
                        [
                          [
                            'fleximple-blocks/post',
                            {
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
                            },
                          ],
                          [
                            'fleximple-blocks/post',
                            {
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
                            },
                          ],
                          [
                            'fleximple-blocks/post',
                            {
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
                            },
                          ],
                        ],
                      ],
                      ['fleximple-blocks/ad'],
                    ],
                  ],
                ],
              ],
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [['fleximple-blocks/ad']],
              ],
            ],
          ],
        ],
      ],
    ],
    scope: ['block'],
  },
  {
    name: 'layout-4',
    title: __('Layout 4', 'radiofueguinablocks'),
    className: 'layout-4',
    icon: layoutFour,
    attributes: {
      className: 'is-variation-layout-4',
    },
    innerBlocks: [
      [
        'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'header' },
        [
          [
            'core/heading',
            {
              className: 'radiofueguina-block-frontpage-section__heading',
              content: __('Section Title', 'radiofueguinablocks'),
            },
          ],
        ],
      ],
      [
        'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'main' },
        [
          [
            'radiofueguina-blocks/frontpage-row',
            {},
            [
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [
                  [
                    'radiofueguina-blocks/frontpage-row',
                    { className: 'is-three-thirds' },
                    [
                      [
                        'fleximple-blocks/post',
                        {
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
                        },
                      ],
                      [
                        'fleximple-blocks/post',
                        {
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
                        },
                      ],
                      [
                        'radiofueguina-blocks/frontpage-column',
                        {},
                        [
                          [
                            'fleximple-blocks/post',
                            {
                              className: 'is-style-level-4',
                              displayMedia: false,
                              displayCategories: false,
                              displayMeta: false,
                              displayExcerpt: false,
                            },
                          ],
                          [
                            'fleximple-blocks/post',
                            {
                              className: 'is-style-level-4',
                              displayMedia: false,
                              displayCategories: false,
                              displayMeta: false,
                              displayExcerpt: false,
                            },
                          ],
                          [
                            'fleximple-blocks/post',
                            {
                              className: 'is-style-level-4',
                              displayMedia: false,
                              displayCategories: false,
                              displayMeta: false,
                              displayExcerpt: false,
                            },
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [['fleximple-blocks/ad']],
              ],
            ],
          ],
        ],
      ],
    ],
    scope: ['block'],
  },
  {
    name: 'layout-4-auto',
    title: __('Layout 4 (automatic)', 'radiofueguinablocks'),
    className: 'layout-4-auto',
    icon: layoutFour,
    attributes: {
      className: 'is-variation-layout-4-auto',
    },
    innerBlocks: [
      [
        'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'header' },
        [
          [
            'core/heading',
            {
              className: 'radiofueguina-block-frontpage-section__heading',
              content: __('Section Title', 'radiofueguinablocks'),
            },
          ],
        ],
      ],
      [
        'radiofueguina-blocks/frontpage-column',
        { sectionTag: 'main' },
        [
          [
            'radiofueguina-blocks/frontpage-row',
            {},
            [
              [
                'radiofueguina-blocks/frontpage-column',
                {},
                [
                  [
                    'fleximple-blocks/recent-posts',
                    {
                      postsToShow: 5,
                      columns: {
                        small: 1,
                        medium: 3,
                        large: 3,
                      },
                      gapColumn: {
                        small: { value: 20, unit: 'px' },
                        medium: { value: null, unit: 'px' },
                        large: { value: null, unit: 'px' },
                      },
                      gapRow: {
                        small: { value: 20, unit: 'px' },
                        medium: { value: null, unit: 'px' },
                        large: { value: null, unit: 'px' },
                      },
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
                    },
                  ],
                ],
              ],
              [
                'radiofueguina-blocks/frontpage-column',
                { sectionTag: 'aside' },
                [['fleximple-blocks/ad']],
              ],
            ],
          ],
        ],
      ],
    ],
    scope: ['block'],
  },
]

export default variations
