import Inferno from 'inferno';
import QueryBuilder from './query-builder';
import registerServiceWorker from './registerServiceWorker';

Inferno.render(<QueryBuilder />, document.getElementById('root'));
registerServiceWorker();
