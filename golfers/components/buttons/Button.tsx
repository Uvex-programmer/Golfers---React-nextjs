interface ButtonProps {
  disabled?: boolean
  onClick?: () => void
  text: string
  type: 'button' | 'submit' | 'reset' | undefined
}

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  onClick,
  text,
  type,
}) => (
  <button
    className='modalBtn'
    type={type}
    disabled={disabled}
    onClick={onClick}
    tabIndex={0}
  >
    <div className='textDark'>{text}</div>
  </button>
)

export default Button
