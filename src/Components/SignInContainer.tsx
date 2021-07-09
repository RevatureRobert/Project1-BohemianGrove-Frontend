import {connect} from 'react-redux';
// import Feed from './Feed';
import { getUser } from '../Redux/Actions';
import SignInComponent from './SignIn';





const mstp = (state) => {
  return {
    user: state,
    hello: "hello"
  }
}

const mdtp = (dispatch) => {
  return {
    authenticate: (formData) => dispatch(getUser(formData))
  }
}

export default connect(mstp,mdtp)(SignInComponent);