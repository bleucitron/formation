import { connect } from 'react-redux';

import { toggleFr, addTweets } from '../store';
import Actions from '../components/Actions';

const mapStateToProps = ({ filters }) => ({
  isFr: filters.isFr,
});

const mapDispatchToProps = {
  toggleFr,
  addTweets,
};

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
