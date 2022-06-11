export const IDCode = (props) => {
  const {children, className} = props

  return(
    <div className={`${className} uppercase flex items-center justify-center text-4xl sm:text-5xl border border-app-primary-300 rounded-lg text-app-primary font-medium py-2`}>
      <p>{children}</p></div>
  )
}