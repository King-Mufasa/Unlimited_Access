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