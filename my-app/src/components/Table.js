import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>URL</th>
          <th>Methods</th>
        </tr>
      </thead>
      <tbody>
      { (typeof data != 'undefined') ? Object.keys(data).map((route, index) => {
         return (
          <tr key={ index }>
            <td> {route} </td>
            <td> <a href={data[route].url}> {data[route].url }</a> </td>
            <td>{data[route].methods.join(", ")}</td>
          </tr>
        )
       }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}

export default Table
