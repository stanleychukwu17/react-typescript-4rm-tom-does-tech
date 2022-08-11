import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importing of components
import App from './components/App';

// get set to render our components
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Router>
        <Routes>
            <Route path='/' element={<App />} />
        </Routes>
    </Router>
);