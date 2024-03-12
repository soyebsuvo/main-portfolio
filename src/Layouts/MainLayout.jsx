import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-[#212428] min-h-screen">
      <Outlet></Outlet>
    </div>
  )
}
