import React from 'react'
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import SpinningIcon from '../components/SpinningIcon/index';
import PageHeading from '../components/PageHeading/PageHeading';
import Hero from '../components/Hero';

const Courses = () => {
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

export default Courses
