import { Navigate, Outlet } from "react-router-dom";
import Layout from "../../components/Layout";

const ProtectedRoute = () => {
    
    const token = sessionStorage.getItem('user')

    if (!token) return <Navigate to={"/login"} replace={true} />;
  
    return <Layout/>

  };

  export default ProtectedRoute;
    
   