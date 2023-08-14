import React from 'react';
import ReactDOM from 'react-dom/client';
import Bar from "@/views/page2/bar";
import '@/styles/globals.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Bar />
  </React.StrictMode>
);
