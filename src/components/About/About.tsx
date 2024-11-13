const About = () => {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
      <div>
        {/* <p className="mb-4">Hello! I&apos;m Cheer, a Software Engineer based in Houston, TX</p> */}
        <p className="mb-4">
          My approach to software engineering is not just about writing code—it&apos;s about creating
          impactful solutions that bridge the gap between technology and user needs. With a solid foundation
          in full stack development, particularly with{' '}
          <span className="text-white">JavaScript (React.js, Node.js)</span> and{' '}
          <span className="text-white">Python</span>, I specialize in building scalable and efficient
          applications. My experience spans both frontend and backend technologies, and I am passionate about
          leveraging these skills to solve complex problems while maintaining a focus on user experience and
          performance.
        </p>
        <p>
          Throughout my career, I&apos;ve had the opportunity to work on a variety of projects, from enhancing
          user interfaces to architecting robust back-end systems. My current role involves working with
          cutting-edge technologies like{' '}
          <span className="text-white">React.js, Node.js, Python, Postgres, and AWS</span>, where I lead the
          development of key features that contribute directly to business growth. I believe that successful
          software engineering is a blend of technical excellence and a deep understanding of the product, and
          I strive to bring both to every project I work on.
        </p>
      </div>
    </>
  );
};

export default About;
