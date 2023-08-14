import React from 'react';
import ReactDOM from 'react-dom/client';
import Foo from "@/views/page1/foo";
import '@/styles/globals.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Foo />
  </React.StrictMode>
);
