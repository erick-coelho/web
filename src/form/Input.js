function Input ({type, text, name, placeholder, value, handleOnChange}) {
    return(
        <div>
            <label className="form-label" htmlFor={name}>{text}:</label>
            <input 
                className="form-control" 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                onChange={handleOnChange} 
                value={value}
                />
        </div>
    )
} 
export default Input;