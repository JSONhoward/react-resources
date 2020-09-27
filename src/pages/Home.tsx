import React from 'react'

import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import PageHeading from '../components/PageHeading';
import { useLocation } from 'react-router-dom';
import Sections from '../components/Sections';

const Home = () => {
    const path: string = useLocation().pathname

    return (
        <Layout>
            <Hero>
                <PageHeading path={path} />
            </Hero>
            <Sections />
        </Layout>
    )
}

export default Home
