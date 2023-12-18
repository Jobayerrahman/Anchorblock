import React from 'react';
import { useSelector } from 'react-redux';
import NavigationComponent from '../Components/NavigationComponent';

function BlankDashboardPage(props) {
    const state = useSelector((state) => state);
    console.log(state);
    return (
        <div>
            <NavigationComponent/>
        </div>
    );
}

export default BlankDashboardPage;