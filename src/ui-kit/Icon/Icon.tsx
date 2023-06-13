import React, { DOMAttributes, memo } from 'react'
import classNames from 'classnames'
import './Icon.scss'
import { IconType, } from './IconType'

export type IconSizeType = 'small' | 'default'

export interface IIconProps extends DOMAttributes<HTMLSpanElement> {
  className?: string
  size?: IconSizeType
  type: IconType
  onClick?: () => void | Promise<void>
}

// const getIcon = (type: IconType): JSX.Element => iconTypes.get(type) as JSX.Element

const IconComponent: React.FC<IIconProps> = ({ className, size = 'default', type, onClick, ...rest }) => {
  return (
    <div
      className={classNames('Icon', className, `Icon-IconSize__${size}`)}
      onClick={onClick}
      {...rest}
    >
      {/* {getIcon(type)} */}
    </div>
  )
}

export const Icon = memo(IconComponent)
