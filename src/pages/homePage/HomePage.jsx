import React from 'react';
import MoviesTable from '../../components/moviesTable/MoviesTable';
import UsersTable from '../../components/usersTable/UsersTable';
import AppProvider from '../../context/AppContext';
import classes from './HomePage.module.scss';

const HomePage=()=>{
    return (
        <AppProvider>
            <div className={classes['container']}>
                <MoviesTable/>
                <UsersTable/>
            </div>
        </AppProvider>
    );
}

export default HomePage;