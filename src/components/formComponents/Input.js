const Input = ({label, type = "text", name, value, onChangeHandler, required = true}) => {
  return (
    <label>
      {label}: 
      <input type={type} name={name} value={value} onChange={onChangeHandler} required={required} />
    </label>
  )
}

export default Input