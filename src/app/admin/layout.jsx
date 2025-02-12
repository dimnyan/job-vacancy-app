'use client'
import React, {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation'
import getPathname from "../../../util/getPathname";
import Header from "@/components/basic/Header";
import Sidebar from "@/components/basic/Sidebar";
import Breadcrumbs from "@/components/basic/Breadcrumbs";
import AuthMiddleware from "../../../middlewares/authMiddleware";

const AdminLayout = ({children}) => {
  const pathname = usePathname()
  const [path, setPath] = useState(['-'])

  useEffect(() => {
    setPath(getPathname(pathname))
  }, [pathname])

  return (
    <AuthMiddleware>
      <div>
        <Header/>
        <div className="flex">
          <Sidebar path={path}/>
          {/*Main Content*/}
          <div className="px-7 py-5 w-full bg-slate-400">
            <Breadcrumbs path={path}/>
            <div className="">
              {children}
            </div>
          </div>
        </div>
      </div>
    </AuthMiddleware>
  );
};

export default AdminLayout;