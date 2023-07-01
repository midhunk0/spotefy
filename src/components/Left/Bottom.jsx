import React from "react";
import { HiOutlineCollection, HiPlus, HiArrowRight } from "react-icons/hi"
import { Box, Typography } from "@mui/material"

const LeftBottom=()=>{
    const iconStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '25px',
        height: '25px',
      };
    
    return(
        <Box 
            height="100%"
            padding="5px"
            margin="8px"
            borderRadius="10px"
            justifyContent="center"
            sx={{
                background:"white",
            }}
        >

            <Box display="flex" alignItems="center">
                <a href="/library" style={{textDecoration:"none", color:"black"}}>
                    <Box display="flex"  sx={{m:1, gap:1}}>
                        <Box sx={{...iconStyle,p:1}}>
                            <HiOutlineCollection size="25px"/>
                        </Box>
                        <Typography variant="h6" fontWeight="bold" sx={{m:.5}}>
                            Your Library
                        </Typography>
                    </Box>
                </a>
                <Box display="flex" sx={{m:1,ml:8.45,gap:1}}>
                    <Box sx={{...iconStyle,p:1,borderRadius:"50%",background:"whitesmoke"}}>
                        <HiPlus size="25px"/>
                    </Box>
                    <Box sx={{...iconStyle,p:1,borderRadius:"50%",background:"whitesmoke"}}>
                        <HiArrowRight size="25px"/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default LeftBottom