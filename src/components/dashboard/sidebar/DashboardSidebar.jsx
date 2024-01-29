"use client";
import { DashboardContext } from "@/app/contexts/useDashContext";
import { dashboardNavigationFreelancer, dashboardNavigationHiring } from "@/data/dashboardNavigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function DashboardSidebar() {
  
  const path = usePathname();
  //const dataUser = useContext(DashboardContext);
  const userType = "independiente"

  return (
    <>
      <div className="dashboard__sidebar d-none d-lg-block">
        <div className="dashboard_sidebar_list">
          <p className="fz15 fw400 ff-heading pl30">Inicio</p>
          {(userType === "independiente" ? dashboardNavigationFreelancer : dashboardNavigationHiring).slice(0, 7).map((item,i) => (
            <div key={ i } className="sidebar_list_item mb-1">
              <Link
                href={item.path}
                as={`${item.path}`}
                className={`items-center ${
                  path === item.path ? "-is-active" : ""
                }`}
              >
                <i className={`${item.icon} mr15`} />
                {item.name}
              </Link>
            </div>
          ))}

          <p className="fz15 fw400 ff-heading pl30 mt30">Organizar y gestionar</p>

          {(userType === "independiente" ? dashboardNavigationFreelancer : dashboardNavigationHiring).slice(7, 10).map((item,i) => (
            <div key={ i } className="sidebar_list_item mb-1">
              <Link
                href={item.path}
                className={`items-center ${
                  path === item.path ? "-is-active" : ""
                }`}
              >
                <i className={`${item.icon} mr15`} />
                {item.name}
              </Link>
            </div>
          ))}

          <p className="fz15 fw400 ff-heading pl30 mt30">Cuenta</p>
          {(userType === "independiente" ? dashboardNavigationFreelancer : dashboardNavigationHiring).slice(10, 12).map((item,i) => (
            <div key={ i } className="sidebar_list_item mb-1">
              <Link
                href={item.path}
                className={`items-center ${
                  path === item.path ? "-is-active" : ""
                }`}
              >
                <i className={`${item.icon} mr15`} />
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
