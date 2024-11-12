const appRoutes = [
  {
    href: `#`,
    label: "Dashboard",
    icon: "dashboard",
  },
  {
    href: `#`,
    label: "Tasks",
    icon: "task",
  },
  {
    href: `#`,
    label: "Notes",
    icon: "note",
  },
  {
    href: `#`,
    label: "Lists",
    icon: "list",
  },
  {
    href: `#`,
    label: "Schedules",
    icon: "schedule",
  },
  {
    href: `#`,
    label: "Goals",
    icon: "goal",
  },
  {
    href: `#`,
    label: "Calendar",
    icon: "calendar",
  },
  {
    href: `#`,
    label: "Projects",
    icon: "project",
  },
];

const SideNav = () => {
  return (
    <div className="flex flex-col border-r-[2px] border-r-white bg-dark">
      <nav className="py-4 pr-9">
        <ul className="flex list-none flex-col gap-3">
          {appRoutes.map((route, i) => {
            return (
              <a
                key={i}
                className="px-2 text-sm font-semibold text-white hover:underline"
                href={route.href}
              >
                {route.label}
              </a>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto flex flex-col">
        <a
          className="border-t-[2px] border-white px-2 py-3 text-sm font-semibold text-white"
          href="/"
        >
          Invite a user
        </a>
        <a
          className="border-t-[2px] border-white px-2 py-3 text-sm font-semibold text-white"
          href="/"
        >
          Help
        </a>
      </div>
    </div>
  );
};

export default SideNav;
