import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

// always going to define - mapStateToProps is a convention name
// always pass it first arguement of state
// always going to return an object, that is going to show up as props inside of our component
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// connect worps action in a dispatch function internally
// takes the action that gets returned and automatically puts it into the dispatch function
export default connect(mapStateToProps, { selectSong })(SongList);
