
import React from 'react';
import { Navigate } from 'react-router-dom';

 function ProtectedRoute({children}) {

   const isAuth = localStorage.getItem("token")
    
  return (
    <>
     { isAuth ? children : <Navigate replace to ="/" />}
    </>
  )
}

export default ProtectedRoute;



// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = localStorage.getItem('token');

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Navigate to="/" />
//       }
//     />
//   );
// };

// export default ProtectedRoute;
