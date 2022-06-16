export const Input = (props) => {
  const { value, setValue, label, required, className, type = "text", hint="" } = props;
  return (
    <div className={`space-y-1 ${className}`}>
      {label && <p>{`${label} ${required ? "*" : ""}`}</p>}
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`focus:outline-app-primary hover:ring ring-app-primary-300 w-full rounded-lg outline-none border border-app-gray-300 px-3.5 py-2.5`}
        placeholder={hint}
        type={type}
      />
    </div>
  );
};
