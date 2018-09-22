import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';
import { connectAlert } from '../../components';
import { requestInsertsIndex } from '../../actions/inserts';
import { connect } from 'react-redux';

class HomeScreen extends React.Component {
  static propTypes = {
    notice: PropTypes.shape({
      kind: PropTypes.string,
      title: PropTypes.string,
      message: PropTypes.string,
    }),
    dispatch: PropTypes.func.isRequired,
    alertWithType: PropTypes.func,
  };

  static defaultProps = {
    notice: {
      kind: '',
      title: '',
      message: '',
    },
    alertWithType: () => null,
  };

  componentDidMount() {
    this.getIndexAsync();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notice.message !== '') {
      this.props.alertWithType(
        nextProps.notice.kind,
        nextProps.notice.title,
        nextProps.notice.message,
      );
    }
  }

  getIndexAsync = async () => {
    this.props.dispatch(requestInsertsIndex());
  };

  render() {
    return (
      <View style={styles.formContainer}>
        <Text>Home</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { notice } = state;
  return {
    notice,
  };
};

export default connect(mapStateToProps)(connectAlert(HomeScreen));
