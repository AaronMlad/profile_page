import Image from "next/image";
import Header from "./components/header";
import { montserrat, spaceGrotesk } from "@/app/fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode, faGlobe, faGears, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow flex flex-col items-center justify-center">

        <div id="home" className="flex gap-[150px] mt-16 scroll-mt-24">
          <img src="/assets/formalnobg2.png" alt="profile-image" 
          className="w-[487px] h-[525px] drop-shadow-[0_0_10px_#000000]
          hover:drop-shadow-[0_0_15px_#ff3131] hover:scale-105
          transition-all
          duration-300" />
          <div className="my-auto">
            <span className={`${spaceGrotesk.className} text-[18px]`}>Curious by nature, driven by code.</span>

            <div className={`${montserrat.className} mt-4 mb-4`}>
            <span className={`font-bold text-[30px]`}>Hello, I'm Aaron Malda</span> <br />
            <span className="text-[#ff3131]">Computer Science</span> Student &<br />
            Aspiring <span className="text-[#ff3131]">Software Developer</span>
            </div>
            
            <span className={`${spaceGrotesk.className} text-[18px]`}>Connect with me on:</span> <br />
            <div className="flex gap-8 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} 
              className="text-white w-8 h-8 mt-3 
              drop-shadow-[0_0_10px_#000000] 
              hover:drop-shadow-[0_0_5px_#FFFFFF] hover:scale-115
              transition-all
              duration-300"/>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} 
              className="text-white w-8 h-8 hover:text-gray-300 mt-3 
              drop-shadow-[0_0_10px_#000000] 
              hover:drop-shadow-[0_0_5px_#FFFFFF] hover:scale-115
              transition-all
              duration-300"/>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} 
              className="text-white w-8 h-8 hover:text-gray-300 mt-3 
              drop-shadow-[0_0_10px_#000000] 
              hover:drop-shadow-[0_0_5px_#FFFFFF] hover:scale-115
              transition-all
              duration-300"/>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} 
              className="text-white w-8 h-8 hover:text-gray-300 mt-3 
              drop-shadow-[0_0_10px_#000000] 
              hover:drop-shadow-[0_0_5px_#FFFFFF] hover:scale-115
              transition-all
              duration-300"/>
              </a>
            </div>
          </div>
        </div>
        
        <div id="about" className="mt-30 items-center justify-center w-full scroll-mt-24">
          <h2 className={`${montserrat.className} font-bold text-center text-[35px]`}>About <span className="text-[#ff3131]">Me</span></h2>
          <hr className="mx-auto border-b-2 border-[#ff3131] w-1/5 mt-1" />
          <div className="flex items-center justify-center mt-15 mx-auto">
            <img src="/assets/7990041.jpg" alt="typescript-code" className="w-[550px] h-[400px] mr-20 ml-30"/>
            <div className={`${spaceGrotesk.className} text-white text-[18px] space-y-4 font-light w-[545px] h-[240px] mb-20`}>
              <p>I am an aspiring software developer who loves the technical world. My main skill is to turn ideas into integrated solutions.</p>
              <p>On the front-end, I am currently learning NextJS to consume APIs, and build responsive and scalable applications. On the back-end, I am studying PostgreSQL, MySQL, and Docker for database management.</p>
              <p>I firmly believe that test-driven development is the determinant of a complete feature.</p>
              <div className={`${montserrat.className} flex gap-8`}>
                <button className={`bg-[#ff3131] text-white text-[25px] w-[160px] h-[50px] rounded transition-colors duration-300`}>Projects</button>
                <button className={`border border-[#ff3131] w-[187px] h-[50px] rounded transition-colors duration-300`}>Download Resume</button>
              </div>
            </div>
          </div>
        </div>

        <div id="skills" className="mt-30 items-center justify-center w-full mb-20 scroll-mt-25">
          <h2 className={`${montserrat.className} font-bold text-center text-[35px]`}>
            My <span className="text-[#ff3131]">Skills</span> and <span className="text-[#ff3131]">Technologies</span>
            <hr className="mx-auto border-b-2 border-[#ff3131] w-1/18 mt-1" />
          </h2>
            <div className="flex justify-center gap-[5px] pt-10 pb-10">
              <FontAwesomeIcon icon={faCode} className="w-[200px] h-[200px] mt-5 mx-17" />
              <FontAwesomeIcon icon={faGlobe} className="w-[200px] h-[200px] mt-5 mx-17" />
              <FontAwesomeIcon icon={faGears} className="w-[200px] h-[200px] mt-5 mx-17" />
              <FontAwesomeIcon icon={faPuzzlePiece} className="w-[200px] h-[200px] mt-5 mx-17" />
            </div>
            <div className="flex items-center justify-center mt-10 mx-auto gap-[60px] text-[30px]">
              <div className="shadow-[4px_4px_15px_rgba(0,0,0,0.7)] rounded-lg w-[277px] h-[447px] hover:shadow-[0_0_15px_#ff3131] hover:scale-105 transition-all duration-300">
                <div className={`${spaceGrotesk.className} text-[20px] m-4`}>
                  <h3 className={`${montserrat.className} font-bold text-[25px]`}>Programming Languages</h3>
                  <hr className="border-b-2 border-[#ff3131] w-1/2 mt-1" />
                  <ul className="list-disc list-inside ml-4">
                    <li>C++</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                  </ul>
                </div>
              </div>
              <div className="shadow-[4px_4px_15px_rgba(0,0,0,0.7)] rounded-lg w-[277px] h-[447px] hover:shadow-[0_0_15px_#ff3131] hover:scale-105 transition-all duration-300">
                <div className={`${spaceGrotesk.className} text-[20px] m-4`}>
                  <h3 className={`${montserrat.className} font-bold text-[25px]`}>Web Development</h3>
                  <hr className="border-b-2 border-[#ff3131] w-1/2 mt-1" />
                  <ul className="list-disc list-inside ml-4">
                    <li>HTML5</li>
                    <li>CSS (Tailwind)</li>
                    <li>React (NextJS)</li>
                  </ul>
                </div>
              </div>
              <div className="shadow-[4px_4px_15px_rgba(0,0,0,0.7)] rounded-lg w-[277px] h-[447px] hover:shadow-[0_0_15px_#ff3131] hover:scale-105 transition-all duration-300">
                <div className={`${spaceGrotesk.className} text-[20px] m-4`}>
                  <h3 className={`${montserrat.className} font-bold text-[25px]`}>Tools & Workflow</h3>
                  <hr className="border-b-2 border-[#ff3131] w-1/2 mt-1" />
                  <ul className="list-disc list-inside ml-4">
                    <li>Git & Github</li>
                    <li>VS Code</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
              <div className="shadow-[4px_4px_15px_rgba(0,0,0,0.7)] rounded-lg w-[277px] h-[447px] hover:shadow-[0_0_15px_#ff3131] hover:scale-105 transition-all duration-300">
                <div className={`${spaceGrotesk.className} text-[20px] m-4`}>
                  <h3 className={`${montserrat.className} font-bold text-[25px]`}>Concepts</h3>
                  <hr className="border-b-2 border-[#ff3131] w-1/2 mt-1" />
                  <ul className="list-disc list-inside ml-4">
                    <li>Object-Oriented Programming</li>
                    <li>Event-Driven Programming</li>
                    <li>Data Structures</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}
