import React from 'react';

const ErrorComponent = () => (
  <div className="flex justify-center">
    <div className="flex flex-col items-center justify-center space-y-5">
      <i className="text-4xl text-red-500 bx animate-pulse bxs-error-circle"></i>
      <p className="text-2xl text-center text-red-500">Something Went Wrong</p>
      <p className="text-wolgray"> Opps, something broke! Please try again</p>
    </div>
  </div>
);

export default ErrorComponent;
