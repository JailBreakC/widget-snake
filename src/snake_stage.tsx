import React from 'react';
import Snake from 'react-simple-snake'

export const SnakeStage: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100%' }} tabIndex={-1} onKeyDown={e => e.preventDefault()}>
      <div style={{ flexGrow: 1, overflow: 'auto', padding: '0 8px'}}>
        <Snake percentageWidth={90} />
      </div>
    </div>
  );
};
