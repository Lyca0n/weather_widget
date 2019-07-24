import React from 'react';
import ReactDOM from 'react-dom';
import  {Provider} from 'react-redux';
import AppRouter, {history} from './routes';
import configureStore from './config/store';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Loader from './modules/common/Loader';

const store = configureStore();
const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>    
);

let hasRendered = false;
const renderApp =()=>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));   
        hasRendered = true;
    }
};

ReactDOM.render(<Loader />, document.getElementById('app'));

renderApp();
