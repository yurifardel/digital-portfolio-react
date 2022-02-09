import React, { useRef } from 'react'
import Style from './input-style.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>()

  return (
    <div className={Style.input}>
      <input
        type="text"
        ref={inputRef}
        placeholder=' '
        readOnly
        onFocus={ e => { e.target.readOnly = false }}
      />

      <label onClick={ () => { inputRef.current.focus() }}>
        {props.placeholder}
      </label>
  </div>
  )
}

export default Input