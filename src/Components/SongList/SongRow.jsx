import React from 'react'

function SongRow(props) {
    const songDetail = props.song;
  return (
    <tr>
      <td>01</td>
      <td>{songDetail.name}</td>
      <td>Taylor</td>
      <td>4:00</td>
    </tr>
  );
}

export default SongRow