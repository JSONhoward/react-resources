import React from 'react'
import Hero from '../components/Hero';
import Layout from '../components/Layout/index';
import PageHeading from '../components/PageHeading';
import SpinningIcon from '../components/SpinningIcon';
import { useLocation } from 'react-router-dom';

const Blogs = () => {
    const path: string = useLocation().pathname

    return (
        <Layout>
            <Hero>
            <PageHeading path={path} />
            <SpinningIcon />
            </Hero>
        </Layout>
    )
}

export default Blogs
