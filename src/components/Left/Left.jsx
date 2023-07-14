import React from 'react';
import { Box,  ButtonBase, Link, Typography } from '@mui/material';
import { HiHome, HiOutlineCollection, HiSearch } from 'react-icons/hi';

const Left=({ toggleLeftWidth })=>{
    const data=[
        'Liked Songs', 'Olivia Rodrigo', 'Hindi', 'Malayalam',
        'English', 'Coldplay', 'Hans Zimmer', 'Tamil',
        'Imagine Dragons', 'Arctic Monkeys', 'Taylor Swift', 'Harry Styles',
    ];
    return (
        <Box display="flex" flexDirection="column" width="100%" margin="8px 0 8px 8px" gap="8px">
            <Box display="flex" flexDirection="column" bgcolor="white" borderRadius="10px">
                <Link href="/home" color="#000" sx={{textDecoration:"none"}}>
                    <Box display="flex" margin="8px" gap="1px">
                        <Box display="flex" width="25px" height="25px" padding="10px">
                            <HiHome size="25px"/>
                        </Box>
                        <Typography variant="h6" fontWeight="bold" margin="4px" padding="2px" justifyContent="center">
                            Home
                        </Typography>
                    </Box>
                </Link>
                <Link href="/search" color="#000" sx={{textDecoration:"none"}}>
                    <Box display="flex" margin="8px" gap="1px">
                        <Box display="flex" width="25px" height="25px" padding="10px">
                            <HiSearch size="25px"/>
                        </Box>
                        <Typography variant="h6" fontWeight="bold" margin="4px" padding="2px" justifyContent="center">
                            Search
                        </Typography>
                    </Box>
                </Link>
            </Box>

            <Box display="flex" flexDirection="column" bgcolor="white" borderRadius="10px">
                <Box display="flex" margin="8px">
                    <ButtonBase disableRipple sx={{gap:"1px", width:"100%", justifyContent:"flex-start"}}>
                        <Box display="flex" width="25px" height="25px" padding="10px">
                            <HiOutlineCollection size="25px" color="black"/>
                        </Box>
                        <Typography variant='h6' fontWeight="bold" margin="4px" padding="2px">
                            Your Library
                        </Typography>
                    </ButtonBase>
                </Box>
            </Box>
        </Box>
    );
};

export default Left;
