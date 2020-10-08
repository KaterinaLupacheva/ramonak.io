import React from "react";

const DetailsContainer = ({ title, header, content }) => (
  <details>
    <summary>
      <b>{title}</b>
    </summary>
    <b>{header}</b>
    <div>{content}</div>
  </details>
);

export default DetailsContainer;
