// Input component to use in other form sections
const TextArea = ({label, name, value, onChangeHandler, required = true}) => {
  return (
    <label>
      <span>{label}:</span> 
      <textarea name={name} value={value} onChange={onChangeHandler} required={required} />
    </label>
  )
}

export default TextArea