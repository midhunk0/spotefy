import React from "react";
import { HiHome, HiSearch } from "react-icons/hi";
import { Box, Typography } from "@mui/material";

const LeftTop=()=>{
    const iconStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '25px',
        height: '25px',
      };
    return(
        <Box 
            margin="8px 8px 0 8px"
            height="16%"
            padding="5px"
            borderRadius="10px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{background:"white"}}
        >
            <Box display="flex" flexDirection="column" gap="5px">
                <a href="/home" style={{textDecoration:"none", color:"black"}}>
                    <Box display="flex"  sx={{m:1,gap:1}}>   
                        <Box sx={{...iconStyle,p:1}}>
                            <HiHome size="25px"/>                 
                        </Box>
                        <Typography variant="h6" fontWeight="bold" sx={{m:.5}}>   
                            Home
                        </Typography>
                    </Box>
                </a>
                <a href="/search" style={{textDecoration:"none", color:"black"}}>
                    <Box display="flex"  sx={{m:1,gap:1}}>   
                        <Box sx={{...iconStyle,p:1}}>
                            <HiSearch size="25px"/>                 
                        </Box>
                        <Typography variant="h6" fontWeight="bold"  sx={{m:.5}}>   
                            Search
                        </Typography>
                    </Box>
                </a>
            </Box>
        </Box>
    )
}

export default LeftTop