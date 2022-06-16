const TabList = (props) => {
  const { currentTab, className, children, tabId, setTab } = props;
  return (
    <div
      className={`${className} ${
        tabId === currentTab
          ? "bg-app-primary-50 border-b-2 border-app-primary-700 text-app-primary"
          : "bg-transparent text-app-gray-500"
      } flex items-center cursor-pointer p-3 w-full sm:w-max`}
      onClick={() => setTab(tabId)}
    >
      {children}
    </div>
  );
};

export default TabList;
