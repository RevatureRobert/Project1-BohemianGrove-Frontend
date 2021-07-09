import {connect} from 'react-redux';
import Feed from './Feed';
import { getUser } from '../Redux/Actions';


const mstp = (state) => {
  return {
    user: state
  }
}

const mdtp = (dispatch) => {
  return {
    authenticate: (formData) => dispatch(getUser(formData))
  }
}
export {};
export default connect(mstp,mdtp)(Feed);