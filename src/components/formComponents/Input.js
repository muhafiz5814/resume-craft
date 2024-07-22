// Input component to use in other form sections
const Input = ({label, type = "text", name, value, onChangeHandler, required = true}) => {
  return (
    <label>
      <span>{label}:</span> 
      <input type={type} name={name} value={value} onChange={onChangeHandler} required={required} />
    </label>
  )
}

export default Input