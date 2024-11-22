import { useState } from "react";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const handleSelection = (index: number) => {
    setSelectedIndex(index);
  };

  const menuItems = [
    { id: 1, label: "Dashboard", icon: "M16.975 11H10V4.025a1..." },
    { id: 2, label: "Kanban", icon: "M6.143 0H1.857A1.857 1..." },
    { id: 3, label: "Inbox", icon: "M17.418 3.623-.018-.00..." },
    { id: 4, label: "Users", icon: "M14 2a3.963 3.963 0 0 0..." },
    { id: 5, label: "Products", icon: "M17 5.923A1 1 0 0 0 16..." },
    { id: 6, label: "Sign In", icon: "M1 8h11m0 0L8 4m4 4-4 4..." },
    { id: 7, label: "Sign Up", icon: "M5 5V.13a2.96 2.96 0 0..." },
  ];

  return (
    <div>
      <aside
        id="default-sidebar"
        className="top-20 left-0 z-40 w-64 bg-gray-50 dark:bg-gray-800 overflow-y-auto"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => (
              <li
                key={item.id}
                onClick={() => handleSelection(index)}
                className={`cursor-pointer ${
                  selectedIndex === index ? "bg-blue-300" : "bg-white"
                }`}
              >
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d={item.icon} />
                  </svg>
                  <span className="ml-3">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
