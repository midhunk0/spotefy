import React from "react";
import { Box, Typography } from "@mui/material";

const BottomBar=()=>{
    return(
        <Box
            margin="0 8px"
            padding="10px"
            borderRadius="10px"
            sx={{background:"white",}}
        >
            <Box>
                <Typography variant="h5" fontWeight="bold" sx={{m:1}}>
                    bottom bar
                </Typography>
            </Box>
        </Box>
    )
}

export default BottomBar