import { Box, Grid2, IconButton, InputAdornment, Pagination, TextField, Typography, useMediaQuery } from '@mui/material';
import React, { useState, useEffect } from 'react';

import CustomCard from '../Component/CustomCard';
import CustomFilter from '../Component/CustomFilter';
import SearchIcon from '@mui/icons-material/Search';

const date_options = [
    'Featured',
    'All',
    'Today',
    'This Week',
    'Last Week',
    'This Month',
    'Last Month',
    'This Year',
    'Last Year'
];

const category_options = ['All', 'Animation','3D Modeling','GDSC Event', 'Web Development'];
function App({ sectionRefs,fetchPost,ItemList

}) {
    const matches = useMediaQuery('(max-width:800px)');
    const [itemsPerPage, setitemsPerPage] = useState(4);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDate, setSelectedDate] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const handleChange = (event, value) => {
        setPage(value);
    };
 
// console.log('ItemList',ItemList);
    // useEffect(() => {

    //     fetchPost();
    // }, [ItemList]); // Run effect when postId changes 
    const handleSearchInputChange = (event) => {

        setSearchTerm(event.target.value);
    };

    const handleDateFilterChange = (val) => {
        if (val == null) { 
            return;
        }
        setSelectedDate(val);
    };

    const handleCategoryFilterChange = (val) => {
        if (val == null) { 
            return;
        }
        setSelectedCategory(val);
    };

    // Helper function to check if a date falls within the specified range
    const isWithinDateRange = (dateString, range) => {
        const date = new Date(dateString.split('/').reverse().join('/')); // Convert DD/MM/YYYY to MM/DD/YYYY
        const today = new Date();

        switch (range) {
            case 'Today':
                return date.toDateString() === today.toDateString();
            case 'This Week':
                const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
                const endOfWeek = new Date(today.setDate(today.getDate() + 6));
                return date >= startOfWeek && date <= endOfWeek;
            case 'Last Week':
                const lastWeekStart = new Date(today.setDate(today.getDate() - today.getDay() - 7));
                const lastWeekEnd = new Date(today.setDate(today.getDate() - today.getDay() - 1));
                return date >= lastWeekStart && date <= lastWeekEnd;
            case 'This Month':
                return date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
            case 'Last Month':
                return date.getMonth() === today.getMonth() - 1 || (today.getMonth() === 0 && date.getMonth() === 11);
            case 'This Year':
                return date.getFullYear() === today.getFullYear();
            case 'Last Year':
                return date.getFullYear() === today.getFullYear() - 1;
            default:
                return true; // For 'All' or 'Featured'
        }
    };

    const [currentItems, setCurrentItems] = useState([]); // State to hold paginated filtered items
    const [filteredItems, setfilteredItems] = useState([]); // State to hold paginated filtered items
    const FilterStart = () => {

        const filteredItems2 = ItemList.filter(item => {
            const matchesSearch = searchTerm == "" ? true : item.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesDate = selectedDate === 'All' || selectedDate === 'Featured' ||selectedDate === '' || isWithinDateRange(item.date, selectedDate);
            const matchesCategory = selectedCategory === 'All' ||selectedCategory === '' || item.category === selectedCategory;
            return matchesSearch && matchesDate && matchesCategory;
        });
        setfilteredItems(filteredItems2);
        // Pagination Logic
        let lastItemIndex = page * itemsPerPage;
        let firstItemIndex = lastItemIndex - itemsPerPage;
        // Set paginated filtered items 
        setCurrentItems(filteredItems2.slice(firstItemIndex, lastItemIndex));

    }

    useEffect(() => {
        // Filtering Logic
        FilterStart();
    }, [searchTerm, selectedDate, selectedCategory, page,ItemList]); // Added 'page' to dependencies  
    useEffect(() => {

        if (matches) {
            setitemsPerPage(2);
        }
    }, [matches]); // Added 'page' to dependencies  
    return (
        <>
            <Box

                ref={sectionRefs.current['Portfolio']}
            >
                <Typography textAlign={'center'} fontFamily={'Qualy Bold'} variant='h2' sx={{ p: 4 }}>
                    Portfolio
                </Typography>
                <Grid2 container spacing={1}

                    sx={{
                        minWidth: '300px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        m: 'auto',
                        width:'100%',
                        px:matches? 1:9, 
                        py:2
                    }}
                >
                    <Grid2 size={4}>
                        <TextField
                            variant="outlined"
                            placeholder="Search..."
                            label="Search by Title"
                            value={searchTerm}
                            fullWidth
                            onChange={handleSearchInputChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid2>
                    <Grid2 size={4}>
                        <CustomFilter
                            options={date_options}
                            label={'Date Filter'}
                            selectedValue={selectedDate}
                            onChange={handleDateFilterChange}
                        />
                    </Grid2>
                    <Grid2 size={4}>
                        <CustomFilter
                        
                            options={category_options}
                            label={'Category Filter'}
                            selectedValue={selectedCategory}
                            onChange={handleCategoryFilterChange}
                        /></Grid2>


                </Grid2>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent:'center',
                        px:matches? 1:4,
                        mx:matches? 1:5,
                    }}
                >
                    <Grid2 container spacing={1}>
                        {currentItems.map((item, index) => (
                            <Grid2
                                key={index} size={matches ? (12 / 2) :
                                    (12 / currentItems.length)}
                                justifyContent="center" alignItems="center" >

                                <CustomCard
                                    category={item.category}
                                    videoUrl={item.videoUrl}
                                    imageUrl={item.imageUrl}
                                    title={item.title}
                                    Description={item.description}
                                    timer={Math.random() * (2 - 0) + 0}
                                ></CustomCard>
                            </Grid2>
                        ))}
                    </Grid2>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flex: 1,
                        px: 5,
                        mx: 5,
                    }}
                >
                    <Pagination
                        sx={{ m: 'auto', py: 2 }}
                        count={Math.ceil(filteredItems.length / itemsPerPage)} // Total pages based on filtered items
                        page={page}
                        onChange={handleChange}
                    />
                </Box>
            </Box>

        </>
    )
}
export default App;