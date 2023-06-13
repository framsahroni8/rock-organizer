import React, { ButtonHTMLAttributes, DetailedHTMLProps, memo } from 'react'
import classNames from 'classnames'
import { IconType } from '..'
import { Icon } from '../Icon'
import './Button.scss'

export type ButtonType = 'filled' | 'transparent' | 'outline' | 'frameless' | 'link';
export interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string
  typeIcon?: IconType
  isDisabled?: boolean
  buttonType?: ButtonType
  onClick?: (event: React.MouseEvent) => void
}

const ButtonComponent: React.FC<IButtonProps> = ({
  className,
  children,
  typeIcon,
  isDisabled = false,
  buttonType = 'filled',
  onClick,
  ...rest
}) => {
  return (
    <button
      className={classNames('btn Button', className, {
        Button__disabled: isDisabled,
        Button__filled: buttonType === 'filled',
        Button__transparent: buttonType === 'transparent',
        Button__outline: buttonType === 'outline',
        Button__frameless: buttonType === 'frameless',
        Button__link: buttonType === 'link',
      })}
      data-testid='test-button'
      disabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      {typeIcon && <Icon type={typeIcon} data-testid='test-button-icon' />}
      <span className={typeIcon ? 'Button-Text' : ''}>{children}</span>
    </button>
  )
}

export const Button = memo(ButtonComponent)
