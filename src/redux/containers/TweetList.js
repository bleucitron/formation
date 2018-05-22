import { connect } from 'react-redux';

import { addTweets } from '../store';
import TweetList from '../components/TweetList';

const mapStateToProps = ({ tweets, filters }) => ({
  tweets,
  isFr: filters.isFr,
});

const mapDispatchToProps = {
  addTweets,
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetList);
