import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import {PropTypes} from 'prop-types';
const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <h2>loading...</h2>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoutes.propTypes={
    children: PropTypes.node
}
export default PrivateRoutes;