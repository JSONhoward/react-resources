import cleverP from '../images/clever-programmer-icon.jpg'
import devEd from '../images/dev-ed-icon.jpg'
import fireship from '../images/fireship-icon.jpg'
import freeCodeCamp from '../images/free-code-camp-icon.jpg'
import netNinja from '../images/net-ninja-icon.jpg'
import webDevSimplified from '../images/web-dev-simplified-icon.jpg'
import rwieruch from '../images/rwieruch-icon.svg'
import sitePoint from '../images/sitepoint.svg'
import smashingMagazine from '../images/smashing-magazine.svg'
import codeCademy from '../images/codecademy.svg'
import udemy from '../images/udemy-icon.svg'
import wesBos from '../images/wes-bos-icon.png'
import medium from '../images/medium-icon.png'
import devTo from '../images/dev-to.svg'

export const webDevChannels: { name: string, id: string, icon: string }[] = [
    {
        id: 'UCFbNIlppjAuEX4znoulh0Cw',
        name: 'Web Dev Simplified',
        icon: webDevSimplified
    },
    {
        id: 'UClb90NQQcskPUGDIXsQEz5Q',
        name: 'Dev Ed',
        icon: devEd
    },
    {
        id: 'UCW5YeuERMmlnqo4oq8vwUpg',
        name: 'Net Ninja',
        icon: netNinja
    },
    {
        id: 'UCsBjURrPoezykLs9EqgamOA',
        name: 'Fireship',
        icon: fireship
    },
    {
        id: 'UC8butISFwT-Wl7EV0hUK0BQ',
        name: 'Free Code Camp',
        icon: freeCodeCamp
    },
    {
        id: 'UCqrILQNl5Ed9Dz6CGMyvMTQ',
        name: 'Clever Programmer',
        icon: cleverP
    }
]

export const mockArray: {id: string, url: string, title: string, description: string, thumb: string}[] = [
    {
        id: 'someId',
        url: 'https://www.youtube.com/watch?v=Faz6jkFTaa0',
        title: 'title goes here',
        description: 'lorem ipsum',
        thumb: `https://via.placeholder.com/300x200`
    },
    {
        id: 'someId',
        url: 'https://www.youtube.com/watch?v=Faz6jkFTaa0',
        title: 'title goes here',
        description: 'lorem ipsum',
        thumb: `https://via.placeholder.com/300x200`
    }, {
        id: 'someId',
        url: 'https://www.youtube.com/watch?v=Faz6jkFTaa0',
        title: 'title goes here',
        description: 'lorem ipsum',
        thumb: `https://via.placeholder.com/300x200`
    }, {
        id: 'someId',
        url: 'https://www.youtube.com/watch?v=Faz6jkFTaa0',
        title: 'title goes here',
        description: 'lorem ipsum',
        thumb: `https://via.placeholder.com/300x200`
    },
    {
        id: 'someId',
        url: 'https://www.youtube.com/watch?v=Faz6jkFTaa0',
        title: 'title goes here',
        description: 'lorem ipsum',
        thumb: `https://via.placeholder.com/300x200`
    }
]

export const onlineCourses: {platform: string, name: string, url: string, icon: string}[] = [
    {
        platform: 'FreeCodeCamp',
        name: 'Learn React in 1 Hour by Building a Movie Search App',
        url: 'https://www.freecodecamp.org/news/learn-react-in-1-hour-by-building-a-movie-search-app/',
        icon: freeCodeCamp
    },
    {
        platform: 'Udemy',
        name: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
        url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
        icon: udemy
    },
    {
        platform: 'CodeCademy',
        name: 'Learn React.js: Part I/Part II',
        url: 'https://www.codecademy.com/learn/react-101',
        icon: codeCademy
    },
    {
        platform: 'none',
        name: 'Fullstack Advanced React & GraphQL',
        url: 'https://advancedreact.com/',
        icon: wesBos
    }
]

export const onlineBlogs: {name: string, url: string, icon: string}[] = [
    {
        name: 'Medium',
        url: 'https://medium.com/',
        icon: medium
    },
    {
        name: 'Dev.to',
        url: 'https://dev.to/',
        icon: devTo
    },
    {
        name: 'Sitepoint',
        url: 'https://www.sitepoint.com/',
        icon: sitePoint
    },
    {
        name: 'Smashing Magazine',
        url: 'https://www.smashingmagazine.com/',
        icon: smashingMagazine
    },
    {
        name: 'RobinWieruch',
        url: 'https://www.robinwieruch.de/blog',
        icon: rwieruch
    }
]