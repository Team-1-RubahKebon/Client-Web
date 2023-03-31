function NavbarWeb() {
  return (
    <div>
      <div
        className="navbar fixed top-0 z-50 px-5 "
        style={{ backgroundColor: "#004643" }}
      >
        <div className="flex-1">
          <button
            className="btn btn-ghost normal-case text-xl"
            style={{ color: "white" }}
          >
            <i>Class</i>Mate
          </button>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                  alt="Profile"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-600 rounded-box w-52"
            >
              <li>
                <button className="justify-between" style={{ color: "white" }}>
                  Profile
                </button>
              </li>
              <li>
                <button style={{ color: "white" }}>Settings</button>
              </li>
              <li>
                <button style={{ color: "white" }}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarWeb;
