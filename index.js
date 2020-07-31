import React from 'react';
import { Provider, connect, connectAdvanced, useSelector, useDispatch, useStore, shallowEqual } from 'react-redux';
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
  app.start = function(App, options = {}) {
    if (!app._store) {
      oldAppStart.call(app);
    }
    const store = app._store;

    function DvaRoot(props, ref) {
      const passedProps = { ...props };
      if (options.forwardRef) {
        passedProps.ref = ref;
      }
      return React.createElement(Provider, { store }, React.createElement(App, passedProps));
    }
    if (!options.forwardRef) {
      return DvaRoot;
    }
    return React.forwardRef(DvaRoot);
  };
  return app;
}

function getProvider(store, app) {}

export { connect, connectAdvanced, useSelector, useDispatch, useStore, shallowEqual };
export { bindActionCreators };
export { saga };
