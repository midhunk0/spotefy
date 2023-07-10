import React, { useState } from "react"
import { Box } from "@mui/material"
import Left from "./components/Left/Left"
import Middle from "./components/Middle/Middle"
import Right from "./components/Right/Right"
import BottomBar from "./components/Global/BottomBar"

function App() {
    const [right, setRight]=useState(false)
    const [left, setLeft]=useState(false);        
    const toggleRight=()=>{
        setRight(!right)
    }
    const toggleLeft=()=>{
        setLeft(!left)
    }
    return(
        <Box className="app" display="flex" flexDirection="column" sx={{ background: "black" }}>
            <Box height="90%" display="flex">
                <Box display="flex" width="19.5%">
                    <Left toggleLeft={toggleLeft}/>
                </Box>
                <Box display="flex" width={right ? "60.5%" : "80.5%" } >
                    <Middle/>
                </Box>
                {right && (
                    <Box display="flex" width="20%">
                        <Right/>
                    </Box>
                )}
            </Box>
            <Box height="10%">
                <BottomBar toggleRight={toggleRight}/>
            </Box>
        </Box>
    );
}

export default App;