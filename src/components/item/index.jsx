import moment from "moment";
import { Link, useLocation } from "react-router-dom";
import { StandardButton } from "../button";

export const IDCode = (props) => {
  const { children, className } = props;

  return (
    <div
      className={`${className} uppercase flex items-center justify-center text-4xl sm:text-5xl border border-app-primary-300 rounded-lg text-app-primary font-medium py-2`}
    >
      <p>{children}</p>
    </div>
  );
};

export const SideBarItem = (props) => {
  const { className, path, icon, label } = props;
  const location = useLocation();
  return (
    <li>
      <Link to={path}>
        <div
          className={`${
            location.pathname === path ? "bg-app-gray-700" : ""
          } rounded-lg flex gap-3 p-5 xl:text-xl font-medium text-app-gray-100`}
        >
          {icon ? <img src={`/assets/icon/ico_${icon}.svg`} alt="icon" />:<div className="w-8"></div>}
          <p>{label}</p>
        </div>
      </Link>
    </li>
  );
};

export const MailItem = (props) => {
  const getFC = (name) => {
    if (name) {
      const fullName = name.split(" ");
      let initials = fullName.shift().charAt(0)
      if(fullName.length > 0)
      initials = initials + fullName.pop().charAt(0);
      return initials.toUpperCase();
    }
    return ""
  };

  const { mail, className } = props;
  return (
    <li className="flex w-full gap-3 py-4">
      <div className="rounded-full relative w-10 h-10 bg-app-green-100 flex items-center justify-center">
        <p>{getFC(mail.sender)}</p>
        {!mail.read && (
          <img
            src="/assets/icon/ico_badge.svg"
            alt="badge"
            className="animate-ping absolute right-0 bottom-0 translate-x-1 translate-y-1 transform"
          />
        )}
      </div>
      <div className="w-full flex flex-col items-end gap-2">
        <div className="flex justify-between w-full">
          <p className="text-app-gray-700 font-medium">{mail.sender}</p>
          <p className="text-app-gray-500 text-sm">{moment(mail.time).fromNow()}</p>
        </div>
        <div>
          <StandardButton>Check Now</StandardButton>
        </div>
      </div>
    </li>
  );
};
