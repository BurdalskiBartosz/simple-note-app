import { Link } from "@tanstack/react-router";

const appRoutes = [
  {
    href: `/app`,
    label: "Dashboard",
    icon: "dashboard",
  },
  {
    href: `/app/notes`,
    label: "Notes",
    icon: "note",
  },
];

const SideNav = () => {
  return (
    <div className="flex flex-col border-r-[2px] border-r-white bg-dark">
      <nav className="py-4 pr-9">
        <ul className="flex list-none flex-col gap-3">
          {appRoutes.map((route, i) => {
            return (
              <Link
                key={i}
                className="px-2 text-sm font-semibold text-white hover:underline"
                to={route.href}
              >
                {route.label}
              </Link>
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
