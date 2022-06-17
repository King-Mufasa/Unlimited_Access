export const BaseLabel = (props) => {
  const {className, children} = props
  return(
    <label className={`${className} text-app-gray-900 font-medium`}>{children}</label>
  )
}

export const HintLabel = (props) => {
  const {className, children} = props
  return(
    <p className={`${className} text-app-gray-500 font-medium`}>{children}</p>
  )
}