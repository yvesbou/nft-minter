import React from "react";

export const DisplayFormState = ( values ) =>
  <div style={{ margin: '1rem 0', background: '#f6f8fa', padding: '.5rem' }}>
    <strong>metadata.json</strong>
    <div>
      {JSON.stringify(values, null, 2)}
    </div>
  </div>;