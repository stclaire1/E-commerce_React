import React, { useContext, useEffect } from 'react';
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import { AuthContext } from '../../services/context/AuthContext'
import TextInput from '../../components/TextInput/TextInput';

function Home() {

    const user = useContext(AuthContext);

    useEffect(() => {
        console.log("User from context:", user);
      }, [user]);

    return(
        <>
        <header>
            <HomePageHeader />
        </header>
        <main>
        <section className="homeContainer">
            <h1>Hi, {user ? user.displayName : 'welcome!'}</h1>
            <h2>What are you looking for today?</h2>
            <TextInput />
        </section>
        </main>
        </>
    )
}

export default Home;