import React from 'react';
import Button from '../index';
import { snapshotTest } from '@test/index';

const testObj = {
  name: 'Button 组件',
  desc: '正确渲染',
  component: <Button>按钮</Button>,
};

snapshotTest(testObj);
