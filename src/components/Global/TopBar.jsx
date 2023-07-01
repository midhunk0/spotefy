import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Box } from "@mui/material";

const TopBar=()=>{
    const iconStyle={
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'25px',
        height:'25px',
    }
    return(
        <Box
            height="55%"
            margin="8px"
            padding="5px"
            borderRadius="10px"
            display="flex"
            alignItems="center"
            sx={{background:"white"}}
        >
            <a href="/dropdown" style={{color:"black"}}>
                <Box display="flex" sx={{m:1}}>
                    <Box sx={{...iconStyle,p:1}}>
                        <HiDotsHorizontal size="25px" />
                    </Box>
                </Box>  
            </a>
        </Box>
    )
}

export default TopBar;
