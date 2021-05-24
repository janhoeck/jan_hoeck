import React from 'react';
import { HeaderSection } from './sections/header';
import { AboutMeSection } from './sections/aboutMe';
import { ThemeProvider } from 'react-jss';
import { theme } from './tools/theme/theme';
import { TimelineSection } from './sections/timeline';
import { SectionsScroller } from './components';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <SectionsScroller>
                <HeaderSection />
                <AboutMeSection />
                <TimelineSection />
            </SectionsScroller>
        </ThemeProvider>
    );
}

export default App;
