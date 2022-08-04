
function ButtonSubmit({divClass, btnClass, eventHandle, text, type}) {
    return (
        <div className={divClass}>
            <button className={btnClass} type={type} onClick={eventHandle} > {text} </button>
        </div>
    )
} export default ButtonSubmit;