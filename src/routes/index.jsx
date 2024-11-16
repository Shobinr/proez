import { URLS } from "../constants/common";
import HomePage from "../Pages/HomePage";
import ProtectedRoute from "../components/common/ProtectedRoute";
import Lawyers from "../Pages//Lawyers";
import LawyersList from "../Pages/Lawyers/LawyersList";
import AddCase from "../Pages/Cases";
import CasesList from "../Pages/Cases/CaseList";
import Login from "../Pages/Login";
import People from "../Pages/People";
import Clients from "../Pages/clients";
import Witness from "../Pages/Witness";

export const routes = [
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: URLS.HOME,
          element: <HomePage />
        },
        {
          path: URLS.LAWYERS,
          element: <Lawyers />
        },
        {
          path: URLS.LAWYERSLIST,
          element: <LawyersList />
        },
        {
          path: URLS.CASES,
          element: <AddCase/>
        },
        {
          path: URLS.ALLCASES,
          element: <CasesList />
        },
        {
          path: URLS.PENDINGCASES,
          element: <CasesList />
        },
        {
          path: URLS.MYPENDINGCASES,
          element: <CasesList />
        },
        {
          path: URLS.PEOPLE,
          element : <People />
        },
        {
          path: URLS.CLIENTS,
          element : <People />
        },
        {
          path: URLS.CASEWITNESS,
          element : <Witness />
        },
        {
          path: URLS.OPPOSINGCLIENTS,
          element : <Clients />
        },
      ]
    },  
    { path: URLS.LOGIN, element: <Login/> },
  ];
