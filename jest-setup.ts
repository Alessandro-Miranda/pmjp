import { setGlobalConfig } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import React from 'react';
import * as globalStorybookConfig from './.storybook/preview';

global.React = React;

setGlobalConfig(globalStorybookConfig);
