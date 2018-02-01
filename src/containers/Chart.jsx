import Chart from '../components/Chart';
import {connect} from 'react-redux';
import {keenQuery} from "../actions";

const mapStateToProps = ({chartData}) => ({
  data: chartData
});

const mapDispatchToProps = (dispatch) => ({
  keenQuery: () => dispatch(keenQuery())
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
