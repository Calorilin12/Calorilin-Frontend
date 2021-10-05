import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from 'pages/login';
import Dashboard from 'pages/dashboard';
import Pengguna from 'pages/data-pengguna';
import JadwalMakan from 'pages/jadwal-makan';
import Resep from 'pages/resep-makanan';
import Kalori from 'pages/kalori-makanan';
// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    return (
        <div className="w-screen h-screen bg-white">
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/data-pengguna" component={Pengguna} />
                <Route exact path="/jadwal-makan" component={JadwalMakan} />
                <Route exact path="/resep-makanan" component={Resep} />
                <Route exact path="/kalori-makanan" component={Kalori} />
                <Redirect from="*" to="/" />
            </Switch>
        </div>
    );
}

export default App;

