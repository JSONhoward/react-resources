import React from 'react'

import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import PageHeading from '../components/PageHeading';
import Sections from '../components/Sections';

const Home = () => {
    return (
        <Layout>
            <Hero>
                <PageHeading heading={'React Resources'} />
            </Hero>
            <Sections />
        </Layout>
    )
}

export default Home
