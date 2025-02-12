import Link from "next/link";
import {logout} from "../../../service/authService";
import {useRouter} from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleLogout = () => {
    logout()
    router.push("/login");
  }
  return (
    <div className="navbar bg-red-600 text-white">
      <div className="flex-1 px-3 lg:flex-none">
        <a className="text-xl font-bold tracking-wide">dimnyan</a>
      </div>
      <div className="flex flex-1 justify-end px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Profile</div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-slate-300 text-slate-900  rounded-box z-[1] mt-4 w-52 p-2 shadow">
              <li><div onClick={handleLogout} className="focus:text-white focus:bg-red-600">Logout</div></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;