import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full pt-16 md:pt-24`}>
      <div
        className={`absolute inset-0 top-[150px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Carp <span className='text-[#915EFF]'>Valentin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Web developer building business-focused platforms
            <br className='sm:block hidden' />
            for marketplace operations, seller workflows, and internal tools.
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
