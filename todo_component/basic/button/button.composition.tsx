import React from 'react';
import { DarkTheme } from '@teambit/design.themes.dark-theme';
import { BaseTheme } from '@teambit/design.ui.theme.base-theme';
import { Button } from './button';

export const DarkButton = () => {
  return (
    <DarkTheme>
      <Button>Hello world!</Button>
    </DarkTheme>
  );
}

export const LightButton = () => {
  return (
    <BaseTheme>
      <Button>Hello world!</Button>
    </BaseTheme>
  );
};
