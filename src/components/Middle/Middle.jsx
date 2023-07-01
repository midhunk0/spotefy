import React from "react";
import { Box, Typography } from "@mui/material";

const Middle=()=>{
    return(
        <Box
            width="100%"
            height="94.7%"
            margin="8px 0 8px 0"
            padding="10px"
            borderRadius="10px"
            sx={{background:"white",}}
        >
            <Typography variant="h5" fontWeight="bold" sx={{m:1}}>
                middle part
            </Typography>
        </Box>
    )
}

export default Middle