import React from 'react';
import {HeaderSection} from './sections/header';
import {AboutMeSection} from './sections/aboutMe';
import {ThemeProvider} from 'react-jss';
import {theme} from './tools/theme/theme';
import {TimelineSection} from './sections/timeline/TimelineSection';
import {PageScrollContainer} from './components/PageScrollContainer/PageScrollContainer';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <PageScrollContainer>
                  <Route exact path='/' component={HeaderSection}/>
                  <Route exact path='/aboutMe' component={AboutMeSection}/>
                  <Route exact path='/timeline' component={TimelineSection}/>
              </PageScrollContainer>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
