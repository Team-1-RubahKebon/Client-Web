import { useNavigate } from "react-router-dom";
import { successToast } from "../../helpers/toastNotification";

function NavbarWeb() {
  const navigate = useNavigate();

  const gotoProfile = () => {
    navigate("/profile");
  };

  const handlerLogout = () => {
    localStorage.clear();
    successToast("Success Logout");
    navigate("/login");
  };

  return (
    <div>
      <div
        className="navbar fixed top-0 z-50 px-5 "
        style={{ backgroundColor: "#1B4965" }}
      >
        <div className="flex-1">
          <img src="./classmateicon.svg" alt="logo" style={{ width: 80 }} />
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-cyan-700 rounded-box w-52"
            >
              <li>
                <button
                  className="justify-between"
                  style={{ color: "white" }}
                  onClick={gotoProfile}
                >
                  Profile
                </button>
              </li>
              <li>
                <button style={{ color: "white" }}>Settings</button>
              </li>
              <li>
                <button style={{ color: "white" }} onClick={handlerLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarWeb;
