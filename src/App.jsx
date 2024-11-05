import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Component/NavBar';
import Profile from './Component/Profile';
import Footer from './Component/Footer';
import Portfolio from './MiniPage/Portfolio';
import Services from './MiniPage/Services';
import AboutMe from './MiniPage/AboutMe';
import SendMailForms from './MiniPage/SendMailForms';
import CV from './MiniPage/CV';
import Upload from './MiniPage/Upload';

import nezuko from './Images/upload/nezuko render.png';
import Zenitsu from './Images/upload/zenetsu.png';
import Gojo from './Images/upload/gojo render.png';
import web from './Images/upload/web.png';
import pms from './Images/upload/pms.png';
import fb from './Images/upload/fb.png';
import fb2 from './Images/upload/fb2.png';
import fb3 from './Images/upload/fb3.png';
import fb4 from './Images/upload/fb4.png';
import fb5 from './Images/upload/fb5.png';
import lapu1 from './Images/upload/lapulapu1.webp';
import mq2 from './Images/upload/mq2.webp';
import mq3 from './Images/upload/mq3.webp';
import mq4 from './Images/upload/teacherDay.png';

import blender3d from './Images/upload/my blender 3D event.png';
import Ai from './Images/upload/animation.png';
import traditional from './Images/upload/traditional 3D event poster.png';
import photoshop from './Images/upload/photoshop 3D event poster.png';
import { Divider, Grid2, IconButton, Link, Typography, useMediaQuery } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
function App() {

    const [ItemList, setItemList] = useState(
        [
        {
            title: 'Pertinacity - Hypbest (STI Bohol) - 2020',
            category: 'Video Edit',
            description: 'Served as cinematographer and editor for a school competition video. Responsibilities included planning shots, filming, and editing, resulting in a polished final video that effectively conveyed the theme and engaged the audience.',
            imageUrl: [mq3], 
            videoUrl: 'https://www.youtube.com/watch?v=QoeqJrhFhck',  
            date: '2020-08-10'  
        },
        {
            title: 'Cristal-e College Teachers Day 2022',
            category: 'Video Edit',
            description: 'Coordinated with a team to create a Same Day Edit (SDE) for Teachers Day. Responsibilities included designing a 3D logo and overseeing videography/editing, resulting in a memorable video celebrating the event’s highlights.',
            imageUrl: [mq4], 
            videoUrl: 'https://www.youtube.com/watch?v=rAYvgJlimjA',  
            date: '2022-08-10'  
        },
        {
            title: 'Gojo 3D Character',
            category: '3D Modeling',
            description: 'Produced a high-quality 3D model of Gojo from Jujutsu Kaisen. Responsibilities included character sculpting and shading, using advanced techniques to achieve a realistic look, especially in Gojo’s facial features and attire.',
            imageUrl: [Gojo], 
            videoUrl: '',  
            date: '2022-08-10'  
        },
        {
            title: 'Portfolio Website',
            category: 'Web Development',
            description: 'Developed a responsive portfolio website to showcase my skills and projects. Accomplishments include setting up AWS hosting, optimizing for scalability, and ensuring seamless user experience across devices.',
            imageUrl: [web], 
            videoUrl: '',  
            date: '2024-9-01'  
        },
        {
            title: 'Facebook Clone - School Work Challenge',
            category: 'Web Development',
            description: <>
                <Typography>Built a replica of Facebook for a school project, with a focus on layout accuracy and UI design using React.js and Material UI. Responsibilities included implementing responsive design, functional components, and providing a live demo and GitHub repository.</Typography>
                <Link href="https://jevguio.github.io/Facebook-clone-ReactJsXMaterial-UI/">View Live</Link>
                <IconButton aria-label="Github" onClick={()=>{window.open("https://github.com/jevguio/Facebook-Clone-Challenge","_blank")}}>
                   <GitHubIcon />
                </IconButton>
            </>,
            imageUrl: [fb, fb2, fb3, fb4, fb5], 
            videoUrl: '',  
            date: '2023-9-01'  
        },  
        {
            title: 'Purok Management System - (PMS)',
            category: 'Application',
            description: 'Developed a Windows-only C# application for community management as a freelance project for a local community. Features include admin and staff controls for secure member registration, event management, and attendance tracking with penalties for absences, designed to support transparent purok clearances.',
            imageUrl: [pms], 
            videoUrl: 'https://www.youtube.com/watch?v=OyTldTXuQSI',  
            date: '2022-12-16'  
        },
        {
            title: 'Nezuko 3D Character',
            category: '3D Modeling',
            description: 'Created a 3D model of Nezuko from Demon Slayer, focusing on character design and realistic texturing. Accomplishments include mastering character proportions and creating a detailed, visually appealing model that reflects Nezuko’s unique traits.',
            imageUrl: [nezuko], 
            videoUrl: '',  
            date: '2021-01-15'  
        },
        {
            title: 'Zenitsu 3D Character',
            category: '3D Modeling',
            description: 'Designed and rigged a 3D model of Zenitsu from Demon Slayer. Achievements include developing dynamic poses and utilizing advanced rigging techniques to capture the character’s energy and personality.',
            imageUrl: [Zenitsu], 
            videoUrl: '',  
            date: '2022-02-20'  
        },
        {
            title: 'Buwan ng Wika Event',
            category: 'Animation',
            description: <>
            <Typography>This project highlights high realism in weapon design, showcasing detailed craftsmanship to reflect authentic cultural artifacts. Additionally, I was responsible for editing the teaser video for Buwan ng Wika at my school, where I was hired as a freelance video editor for the event.</Typography>
                <Link href="https://www.facebook.com/happyatLiberalArtsandEducation/videos/118364751351075/">Watch Full Video</Link>
            </>,
            imageUrl: [mq2], 
            videoUrl: 'https://www.youtube.com/watch?v=aflzchCP8Yk',  
            date: '2023-04-05'  
        },
        {
            title: 'GDSC 3D Blender Event',
            category: 'GDSC Event',
            description: 'Organized and hosted a 3D modeling event for GDSC, focusing on character and environment design in Blender. Responsibilities included poster design, event planning, and providing training to enhance participants’ 3D skills.',
            imageUrl: [blender3d], 
            videoUrl: '',  
            date: '2024-06-15'  
        },
        {
            title: 'GDSC Adobe Photoshop Event',
            category: 'GDSC Event',
            description: 'Designed event materials for a Photoshop skills workshop, where I shared tips and guided members in mastering digital art techniques, enhancing overall design abilities within the community.',
            imageUrl: [photoshop], 
            videoUrl: '',  
            date: '2024-07-20'  
        },
        {
            title: 'GDSC Traditional Drawing Event',
            category: 'GDSC Event',
            description: 'Contributed to organizing a traditional drawing workshop, where I encouraged members to share and improve their skills. Designed promotional materials, fostering a creative environment for artistic growth.',
            imageUrl: [traditional], 
            videoUrl: '',  
            date: '2024-08-10'  
        },
        {
            title: 'GDSC Line Art Event',
            category: 'GDSC Event',
            description: 'Played an active role in a line art workshop, where I provided feedback and design guidance to participants, enhancing their artistic skills and contributing to a supportive community atmosphere.',
            imageUrl: [Ai], 
            videoUrl: '',  
            date: '2024-09-05' 
        }
        ]
    );
    

    const pages = ['Home', 'Portfolio', 'Services', 'About', 'Contact', 'Resume/CV'];
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPost = async () => {
        try {
            const response = await fetch(`/gposts`); // Adjust URL as necessary
            if (!response.ok) {
                throw new Error('Failed to fetch the post');
            }
            const data = await response.json();
            if (data.message != "No posts found") {

                setItemList(data); // Set the post data
                // console.log(data);
            } else {

                // console.log("No posts found");
            }
        } catch (err) {
            setError(err.message); // Set any error that occurs
        } finally {
            setLoading(false); // Set loading to false once the fetch is complete
        }
    };
    const sectionRefs = useRef({});

    pages.forEach((page) => {
        sectionRefs.current[page] = React.createRef();
    });

    const matches = useMediaQuery('(max-width:800px)');

    return (
        <>
            <NavBar sectionRefs={sectionRefs} pages={pages} />
            <Profile sectionRefs={sectionRefs} />
            <Portfolio
                fetchPost={fetchPost}
                ItemList={ItemList}
                sectionRefs={sectionRefs}
            ></Portfolio>
            <Services sectionRefs={sectionRefs} />
            <AboutMe sectionRefs={sectionRefs} />
            <Grid2 container justifyContent={'center'} alignContent={'center'} >
                <Grid2 size={matches ? 11 : 6}>

                    <SendMailForms sectionRefs={sectionRefs} />
                </Grid2>
                <Grid2 size={matches ? 12 : 12} sx={{
                    backgroundColor: '#f0f0f0', // Changed to white for contrast
                }}>
                    <Divider></Divider>
                </Grid2>
            </Grid2>
            <Footer sectionRefs={sectionRefs} />

        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
