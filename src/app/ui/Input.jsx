const { forwardRef } = require("react")

const Input = forwardRef (function Input ({label, isTextArea, ...props }, ref) {
    const stylingClass = 'w-full border-none px-2 bg-stone-400'
  return (
    <p>
    <label>{label}</label>
    {isTextArea ? <textarea ref={ref} className={stylingClass} {...props}/> : <input ref={ref} className={stylingClass} {...props}/>}
    </p>
  )
});

export default Input;
