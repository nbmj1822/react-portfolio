import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import PageContent from './PageContent';
import {ThemeProvider} from './context/ThemeContext';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import Landing from './components/landing/Landing';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import BackgroundPage from './BackgroundPage';


function App() {
  const addAnim = (e)=>{
    const elemClass = e.target.classList
    elemClass.add('rubberband')
    setTimeout(() => {
        elemClass.remove('rubberband')
    }, 1000);
}
  return (
    <ThemeProvider>
      <Navbar />
      <BackgroundPage />
      <PageContent>
      <Route render={({location}) => (
        <TransitionGroup className="transition-group">
          <CSSTransition key={location.key}  timeout={300} classNames="fade">
              <section className="route-section">
                    <Switch location={location}>
                      <Route exact path="/home" render={() => <Landing addAnim={addAnim} />} />
                      <Route exact path="/about" render={() => <About addAnim={addAnim} />} />
                      <Route exact path="/projects" render={() => <Projects addAnim={addAnim} />} />
                      <Route exact path="/contact" render={() => <Contact addAnim={addAnim} />} />
                      <Route exact path="/">
                        <Redirect to="/home" />
                      </Route>
                    </Switch>
              </section>
          </CSSTransition>
        </TransitionGroup>
      )}></Route>
      </PageContent>
    </ThemeProvider>
  );
}

export default withRouter(App);
