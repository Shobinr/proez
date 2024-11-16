import { Outlet } from "react-router-dom"
import Sidebar from "../global/Sidebar/Sidebar"
import Header from "../global/Header/Header"
import { useState } from "react";
import Footer  from '../global/Footer/Footer'
const Layout = () =>{
  const [sidebarOpen, setSidebarOpen] = useState(false);

return(
//   <div className="flex flex-col min-h-screen">
//   <Header />
//   <div className="flex flex-1">
//     <Sidebar />
//     <main className="flex-1 p-4">
//       <Outlet />
//     </main>
//   </div>
// </div>
<div className="dark:bg-boxdark-2 dark:text-bodydark app">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="p-4 relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="my-4 p-4 flex w-full bg-white shadow-default  drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
            <div className="w-full p-4 md:p-0 2xl:p-10">
              <Outlet />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
          {/* <Footer/> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>

      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
)
}

export default Layout