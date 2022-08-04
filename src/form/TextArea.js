function Input ({text, name, placeholder, value, handleOnChange}) {
    return(
        <div>
            <label className="form-label" htmlFor={name}>{text}:</label>
            <textarea 
                className="form-control" 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                onChange={handleOnChange}
                value={value}
                >
            </textarea>
        </div>
    )
} 
export default Input;