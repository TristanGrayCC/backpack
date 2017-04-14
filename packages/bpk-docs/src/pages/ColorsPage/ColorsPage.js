import React from 'react';
import BpkParagraph from 'bpk-component-paragraph';
import { BpkList, BpkListItem } from 'bpk-component-list';
import { colors, primaryGradient } from 'bpk-tokens/tokens/base.es6';

import './colors-page.scss';
import ColorSwatch from './../../components/ColorSwatch';
import DocsPageBuilder from './../../components/DocsPageBuilder';

const components = [
  {
    id: 'primary',
    title: 'Primary',
    blurb: [
      <BpkParagraph>
        Skyscanner’s primary brand colors are Blue-500 and White. All other colors in the palette are considered
        secondary to these.
      </BpkParagraph>,
      <div className="bpkdocs-colors-page__swatch-container">
        <ColorSwatch name="color-blue-500" color={colors.colorBlue500} whiteColor />
        <ColorSwatch name="color-white" color={colors.colorWhite} border />
      </div>,
      <BpkParagraph>
        Anything using Blue should be clickable, but not all things that are clickable need to be Blue.
      </BpkParagraph>,
      <BpkList>
        <BpkListItem>
          Links make use of Blue-500.
        </BpkListItem>
        <BpkListItem>
          Visited links make use of Blue-700.
        </BpkListItem>
        <BpkListItem>
          Selected states should use Blue-700 also.
        </BpkListItem>
      </BpkList>,
    ],
    examples: [],
  },
  {
    id: 'secondary',
    title: 'Secondary',
    blurb: [
      <BpkParagraph>
        The following colors are used in conjunction with the above and should always be used sparingly.
      </BpkParagraph>,
      <div className="bpkdocs-colors-page__swatch-container">
        <ColorSwatch name="color-green-500" color={colors.colorGreen500} whiteColor />
        <ColorSwatch name="color-yellow-500" color={colors.colorYellow500} />
        <ColorSwatch name="color-red-500" color={colors.colorRed500} whiteColor />
      </div>,
      <BpkParagraph>
        Green is used to denote, cheap, direct and generally anything positive. Yellow is used to guide the user and
        notify them of any warnings. Red is expensive, In-direct and must-read warnings such as errors.
      </BpkParagraph>,
    ],
    examples: [],
  },
  {
    id: 'grays',
    title: 'Grays',
    blurb: [
      <BpkParagraph>
        The gray palette has been carefully considered to work in a broad range of situations and be bold, yet subtle
        when required.
      </BpkParagraph>,
      <div className="bpkdocs-colors-page__swatch-container">
        <ColorSwatch name="color-gray-50" color={colors.colorGray50} />
        <ColorSwatch name="color-gray-100" color={colors.colorGray100} />
        <ColorSwatch name="color-gray-300" color={colors.colorGray300} whiteColor />
        <ColorSwatch name="color-gray-500" color={colors.colorGray500} whiteColor />
        <ColorSwatch name="color-gray-700" color={colors.colorGray700} whiteColor />
        <ColorSwatch name="color-gray-900" color={colors.colorGray900} whiteColor />
      </div>,
      <BpkParagraph>
        Neutrals for typography and decorative elements.
      </BpkParagraph>,
      <BpkList>
        <BpkListItem>
          Gray-50 is useful for background colours especially when using cards.
        </BpkListItem>
        <BpkListItem>
          Gray-700 is the default text colour.
        </BpkListItem>
        <BpkListItem>
          Gray-300 and Gray-500 are used for supplementary text and microcopy.
        </BpkListItem>
      </BpkList>,
    ],
    examples: [],
  },
  {
    id: 'gradients',
    title: 'Gradients',
    blurb: [
      <BpkParagraph>
        An optional gradient can be used to break up large swathes of blue. However, this should be used sparingly.
      </BpkParagraph>,
      <div className="bpkdocs-colors-page__swatch-container">
        <ColorSwatch name="primary-gradient" gradient={primaryGradient} whiteColor />
      </div>,
    ],
    examples: [],
  },
];

const ColorsPage = () => <DocsPageBuilder
  title="Colors"
  blurb={[
    <BpkParagraph>
      Skyscanner makes use of a harmonious and vibrant palette, which you can see below. This made up of primary and
      secondary colours as well as a suite of grays.
    </BpkParagraph>,
    <BpkParagraph>
      The Skyscanner product relies on a lot of white space, which should be considered at all times when pairing
      with additional colours.
    </BpkParagraph>,
  ]}
  components={components}
  sassdocId="colors"
/>;

export default ColorsPage;
