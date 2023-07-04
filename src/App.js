import React from "react";
import { Box } from "@mui/material";
import BottomBar from "./components/Global/BottomBar";
import Left from "./components/Left/Left";
import Middle from "./components/Middle/Middle";
import Right from "./components/Right/Right";

function App() {
    return (
        <Box
            className="app"
            display="flex"
            flexDirection="column"
               sx={{background:"black"}} 
        >
            <Box height="90%" display="flex">
                <Box display="flex" width="19.5%">
                    <Left/>
                </Box>
                <Box display="flex" width="60.5%">
                    <Middle/>
                </Box>
                <Box display="flex" width="20%">
                    <Right/>
                </Box>
            </Box>
            <Box>
                <BottomBar/>
            </Box>
            
        </Box>
    );
}

export default App;
