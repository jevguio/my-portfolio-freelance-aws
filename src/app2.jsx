import React, { useState, useEffect ,useRef} from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Component/NavBar';
import Profile from './Component/Profile';
import Footer from './Component/Footer';
import Portfolio from './MiniPage/Portfolio';
import Services from './MiniPage/Services';
import AboutMe from './MiniPage/AboutMe';
import SendMailForms from './MiniPage/SendMailForms'; 
import Upload from './MiniPage/Upload'; 

function App() {
   
    const [ItemList,setItemList] = useState(
        [
            {
                title: '',
                category: '',
                description: '',
                imageUrl: '',
                videoUrl: '',
                date: ''
            }, 
            {
                title: '',
                category: '',
                description: '',
                imageUrl: '',
                videoUrl: '',
                date: ''
            }, 
            {
                title: '',
                category: '',
                description: '',
                imageUrl: '',
                videoUrl: '',
                date: ''
            }, 
            {
                title: '',
                category: '',
                description: '',
                imageUrl: '',
                videoUrl: '',
                date: ''
            }, 
        ]
    );

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchPost = async () => {
        try {
            const response = await fetch(`/gposts`); // Adjust URL as necessary
            if (!response.ok) {
                throw new Error('Failed to fetch the post');
            }
            const data = await response.json();
            if(data.message!="No posts found"){ 
                
                setItemList(data); // Set the post data
            }
        } catch (err) {
            setError(err.message); // Set any error that occurs
        } finally {
            setLoading(false); // Set loading to false once the fetch is complete
        }
    };
    const sectionRefs = useRef({});

 
    return (
        <>
            <NavBar sectionRefs={sectionRefs} />
            <Profile sectionRefs={sectionRefs} />
            <Upload fetchPost={fetchPost} />
            <Portfolio
            fetchPost={fetchPost}
            ItemList={ItemList}
                sectionRefs={sectionRefs}
            ></Portfolio>
            <Services sectionRefs={sectionRefs} />
            <AboutMe sectionRefs={sectionRefs} />
            <SendMailForms sectionRefs={sectionRefs} />
            <Footer sectionRefs={sectionRefs} />
            
        </>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
