import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../Actions/codeActions';

class Code extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.code.unshift(nextProps.newPost);
    }
  }

  render() {
    const codeItems = this.props.code.map(code => (
      <div key={code.id}>
        <h3>{code.title}</h3>
        <p>{code.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Code</h1>
        {codeItems}
      </div>
    );
  }
}

Code.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  code: state.code.items,
  newPost: state.code.item
});

export default connect(mapStateToProps, { fetchPosts })(Code);