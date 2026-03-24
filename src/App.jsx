import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <section id="home">
                <Home />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="services">
                <Services />
              </section>
              <section id="work">
                <Work />
              </section>
              <section id="testimonials">
                <Testimonials />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </Layout>
          }
        />
        <Route
          path="/project/:id"
          element={
            <Layout>
              <ProjectDetail />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
