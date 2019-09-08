import React from 'react';
import { Provider, connect, connectAdvanced, useSelector, useDispatch, useStore, shallowEqual } from 'remax-redux';
import { bindActionCreators } from 'redux';
import { utils, create, saga } from 'dva-core';

export default function(opts = {}) {
  const createOpts = {
    setupMiddlewares(middlewares) {
      return middlewares;
    },
    setupApp(app) {},
  };

  const app = create(opts, createOpts);
  const oldAppStart = app.start;
  app.start = function(App) {
    if (!app._store) {
      oldAppStart.call(app);
    }
    const store = app._store;

    function DvaRoot(props) {
      return React.createElement(Provider, { store }, React.createElement(App, props));
    }
    return DvaRoot;
  };
  return app;
}

function getProvider(store, app) {}

export { connect, connectAdvanced, useSelector, useDispatch, useStore, shallowEqual };
export { bindActionCreators };
export { saga };
