import React from 'react';
import { Routes,Route } from 'react-router-dom';
import SignInPage from '../Pages/SignInPage';
import SignUpPage from '../Pages/SignUpPage';
import BlankDashboardPage from '../Pages/BlankDashboardPage';
import UserDashBoardPage from '../Pages/UserDashBoardPage';

function Approuter() {
    return (
        <>
            <Routes>
                <Route path="/" Component={BlankDashboardPage}></Route>
                <Route path="/Users" Component={UserDashBoardPage}></Route>
                <Route path="/SignIn" Component={SignInPage}></Route>
                <Route path="/SignUp" Component={SignUpPage}></Route>
            </Routes>
        </>
    );
}

export default Approuter;