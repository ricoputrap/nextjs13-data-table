import React from 'react';
import Spinner from './Spinner';

const LoadingOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <Spinner />
    </div>
  );
};

export default LoadingOverlay;
