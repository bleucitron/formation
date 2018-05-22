import { connect } from 'react-redux';

import { addTweets } from '../store';
import Root from '../components/Root';

const mapDispatchToProps = {
  addTweets,
};

export default connect(null, mapDispatchToProps)(Root);
