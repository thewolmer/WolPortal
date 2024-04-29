import React from 'react';

export const ErrorView = () => (
  <section className="flex h-full w-full flex-col items-center justify-center  p-10">
    <h3 className="font-mono">Something went wrong.</h3>
    <p>Failed to fetch data. Please try again later.</p>
  </section>
);
