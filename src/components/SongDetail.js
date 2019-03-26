import React from 'react';
import { connect } from 'react-redux';

// instead of using props.song.title, we can destructure out song so we just have to use song.title etc
const SongDetail = ({ song }) => {
  if(!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>

    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);
