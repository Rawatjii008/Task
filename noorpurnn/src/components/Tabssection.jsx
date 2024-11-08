import React from "react";
const tabs = [
  {
    id: "profile",
    label: "Profile",
    content: "This is some placeholder content for the Profile tab.",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    content: "This is some placeholder content for the Dashboard tab.",
  },
  {
    id: "settings",
    label: "Settings",
    content: "This is some placeholder content for the Settings tab.",
  },
  {
    id: "contacts",
    label: "Contacts",
    content: "This is some placeholder content for the Contacts tab.",
  },
];

const filteredTabs = tabs.filter(
  (tab) => tab.label.includes("Profile") || tab.label.includes("Dashboard")
);

[
  {
    id: "profile",
    label: "Profile",
    content: "This is some placeholder content for the Profile tab.",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    content: "This is some placeholder content for the Dashboard tab.",
  },
];

function Tabssection() {
  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          {filteredTabs.map((tab, index) => (
            <li key={index} className="me-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg"
                id={`${tab.id}-tab`}
                data-tabs-target={`#${tab.id}`}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected="false"
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="default-tab-content">
        {filteredTabs.map((tab, index) => (
          <div
            key={index}
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {tab.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tabssection;
