import React, { useState } from 'react';
import { Box, Divider } from '@mui/material';
import Left from './components/Left/Left';
import Middle from './components/Middle/Middle';
import Right from './components/Right/Right';
import Bottom from './components/Global/BottomBar';

const App = () => {
    const [showRight, setShowRight] = useState(true);
    const [leftWidth, setLeftWidth] = useState('20%');
    const [rightWidth, setRightWidth] = useState('20%');

    const toggleRight = () => {
        setShowRight(!showRight);
    };

    const toggleLeft = () => {
        setLeftWidth((prevWidth) =>
        prevWidth === "5%" ? "20%" : "5%"
        );
    };

    const handleLeftResize = (event) => {
        const newLeftWidth = `${event.clientX}px`;
        setLeftWidth(newLeftWidth);
    };
    
    const handleRightResize = (event) => {
        const newRightWidth = `${window.innerWidth - event.clientX}px`;
        setRightWidth(newRightWidth);
    };

    return (
        <Box className="app" display="flex" flexDirection="column" bgcolor="black">
            <Box display="flex" height="90%">
                <Box display="flex" minWidth="5%" maxWidth="40%" style={{ width: leftWidth }}>
                    <Left toggleLeftWidth={toggleLeft} />
                </Box>
                <Divider
                    sx={{ cursor: 'col-resize', width: '8px', backgroundColor: 'black',}}
                    onMouseDown={() => {
                        document.addEventListener('mousemove', handleLeftResize);
                        document.addEventListener('mouseup', () => {
                            document.removeEventListener('mousemove', handleLeftResize);
                        });
                    }}
                />
                <Box display="flex" flex="1">
                    <Middle />
                </Box>
                {showRight && (
                <>
                    <Divider
                        sx={{ cursor: 'col-resize', width: '8px', backgroundColor: 'black',}}
                        onMouseDown={() => {
                            document.addEventListener('mousemove', handleRightResize);
                            document.addEventListener('mouseup', () => {
                                document.removeEventListener( 'mousemove', handleRightResize);
                            });
                        }}
                    />
                    <Box display="flex" minWidth="20%" maxWidth="30%" style={{ width: rightWidth }}>
                        <Right toggleRightWidth={toggleRight}/>
                    </Box>
                </>
                )}
            </Box>
            <Box display="flex" height="10%">
                <Bottom toggleRight={toggleRight} />
            </Box>
        </Box>
    );
};

export default App;
