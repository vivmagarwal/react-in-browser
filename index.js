// index.js
import React from 'react';
import * as ReactNamedExports from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMNamedExports from 'react-dom';
import * as ReactDOMClientNamedExports from 'react-dom/client';
import * as ReactRouterDOMNamedExports from 'react-router-dom';

const isInternalExport = (name) => name.startsWith('__') && name.endsWith('__');

const attachExportsToWindow = (namedExports, defaultExport, defaultExportName) => {
  if (defaultExportName) {
    if (!window.hasOwnProperty(defaultExportName)) {
      window[defaultExportName] = defaultExport;
    }
  }

  for (const key in namedExports) {
    if (!isInternalExport(key) && !window.hasOwnProperty(key)) {
      window[key] = namedExports[key];
    }
  }
};

if (typeof window !== 'undefined') {
  attachExportsToWindow(ReactNamedExports, React, 'React');
  attachExportsToWindow(ReactDOMNamedExports, ReactDOM, 'ReactDOM');
  attachExportsToWindow(ReactDOMClientNamedExports);
  attachExportsToWindow(ReactRouterDOMNamedExports);
}
