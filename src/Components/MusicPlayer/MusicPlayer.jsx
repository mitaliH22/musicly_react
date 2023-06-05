import React from 'react'
import './MusicPlayer.scss';

function ButtonIcon(props){
  return (
    <button>
      <span className="icons">
        <i className={`bi ${props.iconClass}`}></i>
      </span>
    </button>
  );
}

function MusicPlayer() {
  return (
    <div className="music-player">
      <div className="song-details">
        <p>Song name</p>
        <small>Artist name</small>
      </div>
      <div className="btn-group">
        <ButtonIcon iconClass="bi-shuffle" />
        <ButtonIcon iconClass="bi-caret-left-square-fill" />
        <ButtonIcon iconClass="bi-play-circle-fill" />
        <ButtonIcon iconClass="bi-caret-right-square-fill" />
        <ButtonIcon iconClass="bi-repeat" />
        <div>
          <div width="30px" height="13px" className="progress-bar"></div>
        </div>
      </div>
      <div className="btn-group">
        <ButtonIcon iconClass="bi-volume-up-fill" />
        <ButtonIcon iconClass="bi-body-text" />
      </div>
    </div>
  );
}

export default MusicPlayer