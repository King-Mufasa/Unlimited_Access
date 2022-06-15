export const PrimaryButton = (props) => {
  const { className, children, action } = props;
  return (
    <button
      className={`${className} bg-app-primary rounded-lg font-medium px-4 py-2 text-white transform duration-75 hover:scale-105 active:scale-100 hover:ring hover:ring-app-primary-300 border-app-primary border`}
      onClick={action}
    >
      {children}
    </button>
  );
};

export const NegativeButton = (props) => {
  const { className, children, action } = props;
  return (
    <button
      className={`${className} border-2 border-app-red-300 rounded-lg font-medium px-4 py-2 text-app-red-700 transform duration-75 hover:scale-105 active:scale-100 hover:ring hover:ring-app-red-300 hover:border-app-red-500`}
      onClick={action}
    >
      {children}
    </button>
  );
};

export const StandardButton = (props) => {
  const { className, children, action } = props;
  return (
    <button
      className={`${className} border-2 border-app-gray-300 rounded-lg font-medium px-4 py-2 text-app-gray-700 transform duration-75 hover:scale-105 active:scale-100 hover:ring hover:ring-app-gray-300 hover:border-app-gray-500`}
      onClick={action}
    >
      {children}
    </button>
  );
};


export const MailButton = (props) => {
  const {className, icon, action, children} = props;
  return(
    <button className={`${className} rounded-full shadow-md text-app-blue flex px-6 gap-4 items-center font-semibold text-xl hover:shadow-app-primary hover:scale-105 active:scale-100`}>
      <img src={`/assets/icon/ico_${icon}.svg`} alt={icon} />
      <p>{children}</p>
    </button>
  )
}

export const ToggleButton = (props) => {
  const {className, value, setValue} = props
  const handleToggle = () =>{
    setValue(!value)
  }
  return(
    <div className={`${className} flex items-center p-1 w-10 ${value?"bg-app-primary":"bg-app-gray-400"} rounded-full cursor-pointer h-max`} onClick={handleToggle}>
      <div className={`rounded-full bg-white w-4 h-4 transform duration-100 ${value?"translate-x-0":"translate-x-full"}`}></div>
    </div>
  )
}