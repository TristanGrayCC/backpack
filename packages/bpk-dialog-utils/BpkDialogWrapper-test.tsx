/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { render } from '@testing-library/react';
import { renderToString } from 'react-dom/server';

import { BpkDialogWrapper } from './BpkDialogWrapper';

describe('BpkDialogWrapper', () => {
  it('renders without crashing with all props', () => {
    expect(() => renderToString(
      <BpkDialogWrapper
        ariaLabelledby='dialog-wrapper'
        closeOnEscPressed
        closeOnScrimClick
        dialogClassName='test-class'
        id="dialog-wrapper"
        isOpen
        onClose={jest.fn()}
        exiting={false}
        transitionClassNames={{
          appear: "appear-class",
          appearActive: "active-class",
          exit: "exit-class"
        }}
        timeout={{appear: 0, exit: 0}}
      >
        Dialog content
      </BpkDialogWrapper>
    )).not.toThrow();
  })
  it('renders without crashing with minimum props', () => {
    expect(() => renderToString(
      <BpkDialogWrapper
        ariaLabelledby='dialog-wrapper'
        id="dialog-wrapper"
        isOpen
        onClose={jest.fn()}
      >
        Dialog content
      </BpkDialogWrapper>
    )).not.toThrow();
  })
  it('renders correctly with minimum prop', () => {
    const { asFragment } = render(
      <BpkDialogWrapper
        ariaLabelledby='dialog-wrapper'
        id="dialog-wrapper"
        isOpen
        onClose={jest.fn()}
      >
        Dialog content
      </BpkDialogWrapper>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders correctly with closeOnX props', () => {
    const { asFragment } = render(
      <BpkDialogWrapper
        ariaLabelledby='dialog-wrapper'
        closeOnEscPressed
        closeOnScrimClick
        id="dialog-wrapper"
        isOpen
        onClose={jest.fn()}
      >
        Dialog content
      </BpkDialogWrapper>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders correctly with class prop', () => {
    const { asFragment } = render(
      <BpkDialogWrapper
        ariaLabelledby='dialog-wrapper'
        dialogClassName="test-class"
        id="dialog-wrapper"
        isOpen
        onClose={jest.fn()}
      >
        Dialog content
      </BpkDialogWrapper>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders correctly with animation props', () => {
    const { asFragment } = render(
      <BpkDialogWrapper
        ariaLabelledby='dialog-wrapper'
        id="dialog-wrapper"
        isOpen
        onClose={jest.fn()}
        exiting={false}
        transitionClassNames={{
          appear: "appear-class",
          appearActive: "active-class",
          exit: "exit-class"
        }}
        timeout={{appear: 0, exit: 0}}
      >
        Dialog content
      </BpkDialogWrapper>
    );
    expect(asFragment()).toMatchSnapshot();
  });
})
