import Dashboard from '../components/Dashboard';
import {connect} from 'react-redux';
import {keenQuery} from "../actions";

const mapStateToProps = ({data}) => ({
  data
});

const mapDispatchToProps = (dispatch) => ({
  keenQuery: () => dispatch(keenQuery())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
