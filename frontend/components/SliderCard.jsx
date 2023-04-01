import React from 'react';

export default function SliderCard({ children }) {
  return (
    <section className="m-5 bg-gray-100 overflow-x-scroll">
      <div className="flex flex-row whitespace-nowrap m-10">
        {children}
      </div>
    </section>
  );
}