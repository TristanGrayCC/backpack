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

import { BpkButtonV2 } from '../../../bpk-component-button';
import { cssModules } from '../../../bpk-react-utils';
import BpkExpand from '../BpkExpand';
import {
  BpkAccessoryTypes,
  type BpkCardListGridStackProps,
} from '../common-types';

import STYLES from './BpkCardListStack.module.scss';

const getClassName = cssModules(STYLES);

const BpkCardListStack = (props: BpkCardListGridStackProps) => {
  const { accessory, children } = props;

  let accessoryContent;
  if (accessory === BpkAccessoryTypes.Expand) {
    const { collapsed, expandText, hideContent, setCollapsed, showContent } =
      props;
    accessoryContent = (
      <BpkExpand
        showContent={showContent}
        hideContent={hideContent}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      >
        <>{expandText}</>
      </BpkExpand>
    );
  } else if (accessory === BpkAccessoryTypes.Button) {
    const { buttonText, onButtonClick } = props;
    accessoryContent = (
      <BpkButtonV2 onClick={onButtonClick}>{buttonText}</BpkButtonV2>
    );
  }

  return (
    <>
      <div className={getClassName('bpk-card-list-stack')}>{children}</div>
      {accessoryContent}
    </>
  );
};

export default BpkCardListStack;
