import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { motion } from "framer-motion";
import { slideIn } from "./utils/motion";

import { About, Experience, Hero, Navbar, Tech, Works, StarsCanvas, EarthCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
    
          <StarsCanvas />
        </div>
        <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      </div>
    </BrowserRouter>
  );
}

export default App;