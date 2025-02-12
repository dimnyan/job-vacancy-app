import React from 'react';
import Link from "next/link";

const Sidebar = ({path}) => {
  return (
    <div className="w-[25%] bg-slate-300 text-slate-500 h-screen p-3">
      <Link href="/admin">
        <p className={`py-3 px-3 ${path?.length === 1 && path[0] === "admin" ? "text-slate-900 " : ""}`}>Dashboard</p>
      </Link>
      <details className="collapse collapse-arrow">
        <summary className={`collapse-title px-3 ${path?.length > 0 && path[1] === "users" ? "text-slate-900" : ""}`}>Master</summary>
        <div className={`collapse-content py-3 ${path?.length > 0 && path[1] === "users" ? "text-slate-900 " : ""}`}>
          <Link href="/admin/users" className="rounded-none">
            <p>Users</p>
          </Link>
        </div>
      </details>
    </div>
  );
};

export default Sidebar;