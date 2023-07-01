import React from "react";
import Left from "../Left/Left";
import Middle from "../Middle/Middle";
import Right from "../Right/Right";
import { Box } from "@mui/material";

const Home=()=>{
    return(
        <Box display="flex" width="100%" height="100%">
            <Box display="flex" flexDirection="column" width="25%">
                <Left/>
            </Box>
            <Box display="flex" width="50%">
                <Middle/>
            </Box>
            <Box display="flex" width="25%">
                <Right/>
            </Box>
        </Box>
    )
}

export default Home