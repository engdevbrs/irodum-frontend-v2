"use client";
import { dashboardNavigationFreelancer, dashboardNavigationHiring } from "@/data/dashboardNavigation";
import Link from "next/link";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { DashboardContext } from "@/app/contexts/useDashContext";

export default function DashboardNavigation() {
  const [isActive, setActive] = useState(false);
  const path = usePathname()

  //const dataUser = useContext(DashboardContext);
  const userType = "independiente"

  return (
    <>
      <div className="dashboard_navigationbar d-block d-lg-none">
        <div className="dropdown">
          <button onClick={() => setActive(!isActive)} className="dropbtn">
            <i className="fa fa-bars pr10" /> Panel de Administración
          </button>
          <ul className={`dropdown-content ${isActive ? "show" : ""}`}>
            <li>
              <p className="fz15 fw400 ff-heading mt30 pl30">Start</p>
            </li>
            {(userType === "independiente" ? dashboardNavigationFreelancer : dashboardNavigationHiring).slice(0, 8).map((item,i) => (
              <li className={path == item.path ? 'mobile-dasboard-menu-active' : ''} onClick={() => setActive(false)} key={i}>
                <Link href={item.path}>
                  <i className={`${item.icon} mr10`} />
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <p className="fz15 fw400 ff-heading mt30 pl30">
              Organizar y gestionar
              </p>
            </li>
            {(userType === "independiente" ? dashboardNavigationFreelancer : dashboardNavigationHiring).slice(8, 13).map((item,i) => (
              <li className={path == item.path ? 'mobile-dasboard-menu-active' : ''}  onClick={() => setActive(false)} key={i}>
                <Link href={item.path}>
                  <i className={`${item.icon} mr10`} />
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <p className="fz15 fw400 ff-heading mt30 pl30">Account</p>
            </li>
            {(userType === "independiente" ? dashboardNavigationFreelancer : dashboardNavigationHiring).slice(13, 15).map((item,i) => (
              <li className={path == item.path ? 'mobile-dasboard-menu-active' : ''}  onClick={() => setActive(false)} key={i}>
                <Link href={item.path}>
                  <i className={`${item.icon} mr10`} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
