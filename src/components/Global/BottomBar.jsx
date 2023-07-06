import React from "react";
import { Box, Typography } from "@mui/material";

const BottomBar=()=>{
    return(
        <Box
            margin="0 8px"
            height="65%"
            padding="10px"
            borderRadius="10px"
            sx={{background:"white",}}
        >
            <Box display="flex" alignItems="center" ml="-1px" borderRadius="10px"  width="16.5%" padding="8px" border="1px solid black" bgcolor="lightgray">
                <img src={`../../assets/olivia.jpeg`} width="40px" height="40px"  style={{alignItems:"center", borderRadius: "10px" }} alt="olivia"/>
                <Box display="flex" flexDirection="column">
                    <a href="/happier" style={{color:"black",textDecoration:"none"}}>
                        <Typography fontSize="15px" fontWeight="bold" sx={{alignItems:"center", ml:1.5}}>
                            Happier
                        </Typography>
                    </a>
                    <a href="/olivia" style={{color:"black",textDecoration:"none"}}>
                        <Typography fontSize="15px" sx={{alignItems:"center", ml:1.5}}>
                            Olivia Rodrigo
                        </Typography>
                    </a>
                </Box>
            </Box>
        </Box>
    )
}

export default BottomBar