import React from 'react';
import ReactDOM from 'react-dom';
import QueryBuilder from './query-builder';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<QueryBuilder />, document.getElementById('root'));
registerServiceWorker();
