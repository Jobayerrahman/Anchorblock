import React from 'react';
import { Routes,Route } from 'react-router-dom';
import SignInPage from '../Pages/SignInPage';
import SignUpPage from '../Pages/SignUpPage';
import BlankDashboardPage from '../Pages/BlankDashboardPage';

function Approuter() {
    return (
        <>
            <Routes>
                <Route exact path="/" Component={BlankDashboardPage}></Route>
                <Route exact path="/SignIn" Component={SignInPage}></Route>
                <Route exact path="/SignUp" Component={SignUpPage}></Route>
            </Routes>
        </>
    );
}

export default Approuter;