export default function Button({children, className, handleChange}) {
  return (
    <button className={`flex gap-2 items-center justify-center text-sm  rounded-lg min-w-[80px] py-1  ${className}`} onClick={handleChange}>
        {children}
    </button>
  )
}
