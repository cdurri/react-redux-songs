import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    console.log(this.props);
    return <div>SongList</div>
  }
}

// always going to define - mapStateToProps is a convention name
// always pass it first arguement of state
// always going to return an object, that is going to show up as props inside of our component
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
