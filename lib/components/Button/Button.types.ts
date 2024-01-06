import { PropsWithChildren, ComponentPropsWithoutRef } from 'react';

export type ButtonVariants = 'solid' | 'outline' | 'ghost';

export interface ButtonProps
  extends ComponentPropsWithoutRef<'button'>,
    PropsWithChildren {
  /** Supported button variants */
  variant?: ButtonVariants;
  /** When enabled, makes the element not interactable nor focusable */
  disabled?: ComponentPropsWithoutRef<'button'>['disabled'];
}
