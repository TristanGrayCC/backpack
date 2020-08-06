/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2020 Skyscanner Ltd
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

/* @flow strict */

import PropTypes from 'prop-types';
import React, { type Node } from 'react';
import { cssModules } from 'bpk-react-utils';

import STYLES from './BpkTable.scss';

const getClassName = cssModules(STYLES);

type Props = {
  children: Node,
  className: ?string,
  alternate: boolean,
};

const BpkTable = (props: Props) => {
  const { children, className, alternate, ...rest } = props;

  const classNames = getClassName(
    'bpk-table',
    className,
    alternate && 'bpk-table--alternate',
  );

  return (
    // $FlowFixMe - inexact rest. See decisions/flowfixme.md
    <table className={classNames} {...rest}>
      {children}
    </table>
  );
};

BpkTable.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  alternate: PropTypes.bool,
};

BpkTable.defaultProps = {
  className: null,
  alternate: false,
};

export default BpkTable;
