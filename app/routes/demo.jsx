import { useState } from "react";
import {

  InboxArrowDownIcon,
  ChartBarIcon,
  CpuChipIcon,
  Squares2X2Icon,
  BookOpenIcon
} from "@heroicons/react/20/solid";
import { Outlet, NavLink } from "@remix-run/react";
const menus = [
  {
    name: "Optimizer",
    to: "/demo/dashboard/optimizer/optimize",
    icon: CpuChipIcon,
    current: true,
  },
  {
    name: "Input",
    to: "/demo/dashboard/optimizer/input",
    icon: InboxArrowDownIcon,
    current: false,
  },
  {
    name: "Master",
    to: "/demo/dashboard/optimizer/master",
    icon: ChartBarIcon,
    current: false,
  },

  {
    name: "Solution",
    to: "/demo/dashboard/optimizer/solution",
    icon: BookOpenIcon,
    current: false,
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-full">
      {/* Static sidebar for desktop */}

      <div
        className={`bg-blue-900  ${
          open ? "w-28" : "w-16"
        } flex flex-col text-gray-100 duration-500 `}
      >
        <div className="flex-1">
          <div className="flex items-center justify-center bg-white py-1">
            <img
              className="cursor-poniter mx-auto h-14 w-14 justify-center "
              src={"/assets/logo-4.png"}
              alt="logo"
              onClick={() => setOpen(!open)}
            />
          </div>

          <nav aria-label="Sidebar" className="flex flex-col items-center">
            <div className="static mt-3 w-full flex-1 space-y-1 px-2">
              {menus?.map((item) => (
                <NavLink
                  to={item.to}
                  key={item.name}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-blue-800 text-white"
                        : "text-blue-100 hover:bg-blue-800 hover:text-white",
                      "group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium"
                    )
                  }
                >
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                  <h2
                    style={{
                      transitionDelay: `${item + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "translate-x-28 overflow-hidden opacity-0"
                    }`}
                  >
                    {item?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
                  >
                    {item?.name}
                  </h2>
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
        <div className="mb-2 flex flex-shrink-0">
          <NavLink
            className={({ isActive }) =>
              classNames(
                isActive
                  ? "bg-blue-800 text-white"
                  : "text-blue-100 hover:bg-blue-800 hover:text-white",
                "group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium"
              )
            }
          >
            <Squares2X2Icon className="h-6 w-6" aria-hidden="true" />
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "translate-x-28 overflow-hidden opacity-0"
              }`}
            >
              Appbar
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
            >
              Appbar
            </h2>
          </NavLink>
        </div>
      </div>

      {/* appbar */}
      <div className="flex flex-1 flex-col overflow-y-auto bg-gray-100">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
