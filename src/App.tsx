import React from 'react';
import {HeaderSection} from './sections/header';
import {AboutMeSection} from './sections/aboutMe';
import {ThemeProvider} from 'react-jss';
import {theme} from './tools/theme/theme';
import {TimelineSection} from './sections/timeline/TimelineSection';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <HeaderSection/>
        <AboutMeSection/>
        <TimelineSection/>
      </ThemeProvider>
  );
}

export default App;
