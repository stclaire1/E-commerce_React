import React from 'react';
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import { AuthContext } from '../../services/context/AuthContext'

function Home() {

    const user = React.useContext(AuthContext);
    console.log(user);

    return(
        <section className="homeContainer">
            <HomePageHeader />
            <h1>Hi, {user ? user.displayName : 'welcome!'}</h1>
            <h2>What are you looking for today?</h2>
        </section>
    )
}

export default Home;