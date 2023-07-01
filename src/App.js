import React from "react";
import { Box } from "@mui/material";
import TopBar from "./components/Global/TopBar";
import BottomBar from "./components/Global/BottomBar";
import Home from "./components/Global/Home";

function App() {
    return (
        <Box
            className="app"
            display="flex"
            flexDirection="column"
               sx={{background:"#010001"}} 
        >
            <Box height="5%">
                <TopBar/>
            </Box>
            <Box height="85%">
                <Home/>
            </Box>
            <Box height="10%">
                <BottomBar/>
            </Box>
            
        </Box>
    );
}

export default App;
