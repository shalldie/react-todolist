import 'antd/dist/antd.css';
// import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {AppLayout} from '~/components/layout';
import {AppRoutes} from './routes';

ReactDOM.render(
    <AppLayout>
        <AppRoutes />
    </AppLayout>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
