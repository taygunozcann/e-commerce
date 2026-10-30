import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { gravatarUrl } from "../../utils/gravatar";
import { logoutUser } from "../../store/actions/clientActions";

// Drop this into your header. Shows Login/Sign Up, or avatar + name when logged in.
export default function UserInfo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    let cancelled = false;
    if (user?.email) gravatarUrl(user.email, 64).then((u) => !cancelled && setAvatar(u));
    else setAvatar("");
    return () => { cancelled = true; };
  }, [user?.email]);

  if (!user?.email) {
    return (
      <div className="flex items-center gap-3 text-sm font-bold text-[#23A6F0]">
        <Link to="/login">Login</Link>
        <span>/</span>
        <Link to="/signup">Register</Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 text-sm text-[#252B42]">
      {avatar && <img src={avatar} alt={user.name || user.email} className="w-8 h-8 rounded-full" />}
      <span className="font-bold">{user.name || user.email}</span>
      <button type="button" onClick={() => dispatch(logoutUser())} className="text-[#737373] hover:underline">
        Logout
      </button>
    </div>
  );
}
