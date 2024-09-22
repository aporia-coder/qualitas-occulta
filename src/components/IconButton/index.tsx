import { IconButtonProps } from './types'

export const IconButton = ({
  icon: Icon,
  onClick,
  className,
}: IconButtonProps) => {
  return (
    <button onClick={onClick}>
      <Icon className={className} />
    </button>
  )
}
