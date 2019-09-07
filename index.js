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
  app.start = () => {
    if (!app._store) {
      oldAppStart.call(app);
    }
    const store = app._store;
    return getProvider(store, this);
  };
  return app;
}

function getProvider(store, app) {
  const DvaRoot = ({ children }) => <Provider store={store}>{children}</Provider>;
  return DvaRoot;
}

export { connect, connectAdvanced, useSelector, useDispatch, useStore, shallowEqual };
export { bindActionCreators };
export { saga };
