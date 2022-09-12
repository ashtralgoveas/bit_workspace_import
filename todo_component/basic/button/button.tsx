import React, { ReactNode } from 'react';
import { Button as BaseButton } from '@teambit/base-react.buttons.button';
import { useTheme } from '@teambit/design.ui.theme.base-theme';
import styles from './button.module.scss';

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Button({ children }: ButtonProps) {
  const theme = useTheme();

  return (
    <BaseButton className={styles.button} style={{ color: theme.onPrimaryColor }}>
      {children}
    </BaseButton>
  );
}
