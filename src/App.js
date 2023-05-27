import './App.css';
import Nav from './components/Nav';
import Description from './components/Description';
import Advantages from './components/Advantages';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
                  
      <section className="nav--picture">
                <img src="images/image-intro-mobile.jpg" alt="intro image" className="nav--intro-image" />
                <img src="images/image-intro-desktop.jpg" alt="intro image" className="nav--desktop-intro-image" />
      </section>
      <main>
        <Description />
        <Advantages />
        <Work />
      </main>
      <Footer />
    </>
  );
}

export default App;
