// import React, { useState } from "react"
// import { Box } from "@mui/material"
// import Left from "./components/Left/Left"
// import Middle from "./components/Middle/Middle"
// import Right from "./components/Right/Right"
// import BottomBar from "./components/Global/BottomBar"


// function App() {
//     const [right, setRight]=useState(false)
//     const [left, setLeft]=useState(false);        
//     const toggleRight=()=>{
//         setRight(!right)
//     }
//     const toggleLeft=()=>{
//         setLeft(!left)
//     }
//     return(
//         <Box className="app" display="flex" flexDirection="column" sx={{ background: "black" }}>
//             <Box height="90%" display="flex">
//                 <Box display="flex" width="19.5%">
//                     <Left toggleLeft={toggleLeft}/>
//                 </Box>
//                 <Box display="flex" width={left ? right ? "60.5%" : "40.5%" : right ? "60.5%" : "80.5%" } >
//                     <Middle/>
//                 </Box>
//                 {right && (
//                     <Box display="flex" width="20%">
//                         <Right/>
//                     </Box>
//                 )}
//             </Box>
//             <Box height="10%">
//                 <BottomBar toggleRight={toggleRight}/>
//             </Box>
//         </Box>
//     );
// }

// export default App;




import React, { useState } from 'react';
import { Box, Divider } from '@mui/material';
import Left from './components/Left/Left';
import Middle from './components/Middle/Middle';
import Right from './components/Right/Right';
import Bottom from './components/Global/BottomBar';
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
  left: {
    flex: '0 0 auto',
    minWidth: '10px',
    transition: 'width 0.3s ease',
    marginTop:-20
  },
  middle: {
    flex: 1,
    minWidth: '10px',
    marginTop:-20
  },
  right: {
    flex: '0 0 auto',
    minWidth: '10px',
    marginTop:-20
  },
  adjuster: {
    cursor: 'ew-resize',
    width: '5px',
    backgroundColor: 'lightgray',
  },
  bottom: {
    flexShrink: 0,
    marginTop:-20

  },
}));

const App = () => {
  const classes = useStyles();
  const [showRight, setShowRight] = useState(false);
  const [leftWidth, setLeftWidth] = useState('20%');
  const [rightWidth, setRightWidth] = useState('20%');
  const leftMinWidth = '5%';

  const toggleRight = () => {
    setShowRight(!showRight);
  };

  const toggleLeft = () => {
    setLeftWidth((prevWidth) =>
      prevWidth === leftMinWidth ? '20%' : leftMinWidth
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
    <Box className={classes.container}>
      <Box className={classes.content}>
        <Box className={classes.left} style={{ width: leftWidth }}>
          <Left toggleLeftWidth={toggleLeft} />
        </Box>
        <Divider
          className={classes.adjuster}
          onMouseDown={() => {
            document.addEventListener('mousemove', handleLeftResize);
            document.addEventListener('mouseup', () => {
              document.removeEventListener('mousemove', handleLeftResize);
            });
          }}
        />
        <Box className={classes.middle}>
          <Middle />
        </Box>
        {showRight && (
          <>
            <Divider
              className={classes.adjuster}
              onMouseDown={() => {
                document.addEventListener('mousemove', handleRightResize);
                document.addEventListener('mouseup', () => {
                  document.removeEventListener(
                    'mousemove',
                    handleRightResize
                  );
                });
              }}
            />
            <Box className={classes.right} style={{ width: rightWidth }}>
              <Right />
            </Box>
          </>
        )}
      </Box>
      <Box className={classes.bottom}>
        <Bottom toggleRight={toggleRight} />
      </Box>
    </Box>
  );
};

export default App;
