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

import blender3d from './Images/upload/my blender 3D event.png';
import Ai from './Images/upload/animation.png';
import traditional from './Images/upload/traditional 3D event poster.png';
import photoshop from './Images/upload/photoshop 3D event poster.png';
import { Grid2, Typography, useMediaQuery } from '@mui/material';
function App() {

    const [ItemList, setItemList] = useState(
        [{
            title: 'Nezuko 3D Character',
            category: '3D Modeling',
            description: 'A personal project showcasing a 3D model of Nezuko from Demon Slayer, focusing on character design and texturing.',
            imageUrl: [nezuko],  // Replace with your image path
            videoUrl: '',  // Replace with your video link
            date: '2021-01-15'  // Replace with your project date
        },
        {
            title: 'Zenitsu 3D Character',
            category: '3D Modeling',
            description: 'A personal project featuring a 3D model of Zenitsu from Demon Slayer, emphasizing dynamic poses and rigging.',
            imageUrl: [Zenitsu],  // Replace with your image path
            videoUrl: '',  // Replace with your video link
            date: '2022-02-20'  // Replace with your project date
        },
        {
            title: 'Gojo 3D Character',
            category: '3D Modeling',
            description: 'A personal project highlighting a 3D model of Gojo from Jujutsu Kaisen, showcasing advanced shading techniques.',
            imageUrl: [Gojo],  // Replace with your image path
            videoUrl: '',  // Replace with your video link
            date: '2022-08-10'  // Replace with your project date
        },
        {
            title: 'Portfolio Website',
            category: 'Web Development',
            description: 'This portfolio website showcases my skills and projects, built using AWS for hosting and scalability.',
            imageUrl: [web],  // Replace with your image path
            videoUrl: '',  // Replace with your video link
            date: '2024-9-01'  // Replace with your project date
        },
        {
            title: 'Lapu-Lapu 3D Character',
            category: 'Animation',
            description: 'A sideline project creating a 3D model of Lapu-Lapu, focusing on historical accuracy and detailed sculpting.',
            imageUrl: ['https://i9.ytimg.com/vi_webp/wfNkEZ12CpE/mq3.webp?sqp=CPidgrkG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLBqlRK9ai7igTajbP94Y17dNKBacw'],  // Replace with your image path
            videoUrl: 'https://www.youtube.com/watch?v=wfNkEZ12CpE',  // Replace with your video link
            date: '2023-04-05'  // Replace with your project date
        },
        {
            title: 'Lapu-Lapu Machete and Shield Cinematic Clip Short Animation',
            category: 'Animation',
            description: 'A sideline project creating a 3D model of Lapu-Lapu Machete and Shield, focusing on historical accuracy and detailed sculpting.',
            imageUrl: ['https://i9.ytimg.com/vi_webp/aflzchCP8Yk/mq3.webp?sqp=CPidgrkG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWShOMA8=&rs=AOn4CLDsQyc3bbXio-truhWUr3zX04Oj8g'],  // Replace with your image path
            videoUrl: 'https://www.youtube.com/watch?v=aflzchCP8Yk',  // Replace with your video link
            date: '2023-04-05'  // Replace with your project date
        },
        {
            title: 'GDSC 3D Blender Event',
            category: 'GDSC Event',
            description: 'As the host and designer of the poster, I organized an event to share skills in 3D modeling using Blender, aimed at enhancing members’ abilities in character and environment design.',
            imageUrl: [blender3d],  // Replace with your image path
            videoUrl: '',  // Replace with your video link
            date: '2024-06-15'  // Replace with your event date
        },
        {
            title: 'GDSC Adobe Photoshop Event',
            category: 'GDSC Event',
            description: 'As the designer of the poster, I contributed to a skills-sharing event focused on Photoshop techniques, helping members enhance their digital art and design capabilities.',
            imageUrl: [photoshop],  // Replace with your image path
            videoUrl: '',  // Replace with your video link
            date: '2024-07-20'  // Replace with your event date
        },
        {
            title: 'GDSC Traditional Drawing Event',
            category: 'GDSC Event',
            description: 'As the designer of the poster, I helped organize an event that encourages members to share and improve their traditional drawing skills, fostering a creative community.',
            imageUrl: [traditional],  // Replace with your image path
            videoUrl: '',  // Replace with your video link
            date: '2024-08-10'  // Replace with your event date
        },
        {
            title: 'GDSC Line Art Event',
            category: 'GDSC Event',
            description: 'As the designer of the poster, I participated in a workshop dedicated to honing line art techniques, providing members with valuable tips and feedback on their artwork.',
            imageUrl: [Ai],  // Replace with your image path
            videoUrl: '',  // Replace with your video link
            date: '2024-09-05'  // Replace with your event date
        }
        ]
    );

    const pages = ['Home', 'Portfolio', 'Services', 'About', 'Contact','Resume/CV'];
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
            <NavBar sectionRefs={sectionRefs} pages={pages}/>
            <Profile sectionRefs={sectionRefs} />
            <Portfolio
                fetchPost={fetchPost}
                ItemList={ItemList}
                sectionRefs={sectionRefs}
            ></Portfolio>
            <Services sectionRefs={sectionRefs} />
            <AboutMe sectionRefs={sectionRefs} />
            <Grid2 container  justifyContent={'center'} alignContent={'center'}>
                <Grid2  size={matches?11:6}>

                    <SendMailForms sectionRefs={sectionRefs} />
                </Grid2>
                <Grid2  size={matches?11:6}>

                    <Typography variant="h4" fontFamily={'Qualy Bold'} textAlign={'center'} component="div"   lineHeight="28px" fontWeight="400" sx={{ pt: 4, pb: 0, px: 4 }}>
                        Resume
                    </Typography>
                    <CV sectionRefs={sectionRefs} />
                </Grid2>
            </Grid2>
            <Footer sectionRefs={sectionRefs} />

        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
