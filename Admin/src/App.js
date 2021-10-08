import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';
import Pengguna from 'pages/Data-Pengguna';
import Jadwal from 'pages/Jadwal-Makan';
import Resep from 'pages/Resep-Makanan';
import Kalori from 'pages/Kalori-Makanan';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/data-pengguna" component={Pengguna} />
                <Route exact path="/jadwal-makan" component={Jadwal} />
                <Route exact path="/resep-makanan" component={Resep} />
                <Route exact path="/kalori-makanan" component={Kalori} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    );
}

export default App;
