"use client"

import Image from 'next/image'
import {AiFillGithub, AiFillLinkedin, AiFillHome} from 'react-icons/ai'
import {FaEarlybirds, FaHandPeace} from 'react-icons/fa'
import {BsTerminalFill} from 'react-icons/bs'
import {SiTensorflow, SiPytorch, SiJulia, SiPython} from 'react-icons/si'
import { VerticalTimelineElement, VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

/* eslint-disable react/no-unescaped-entities */



import Link from 'next/link';

export default function Home() {
  return (
    
    <div>
      <main className='bg-[#003049] px-10 md:px-20 lg:px-30'>

        <section>
          <nav className='pt-10 pb-2  flex flex-wrap flex-col sm:flex-row justify-between'>
            <h1 className='text-white font-black md:text-[40px] sm:text-[30px] xs:text-[30px] text-[20px]'>Muhammad Zaeem Chaudhary</h1>
            <ul className='flex items-center'>
              <Link className=' ml-3 md:ml-6 sm:ml-1 text-white'  href="#Experience">Experience</Link>
              <Link className=' ml-3 md:ml- text-white' href="#Projects">Projects</Link>
              <Link className=' ml-3 md:ml-5 text-white' href="#Contact">Contact</Link>

              <button className="text-[#C0D6DF] outline outline-2 outline-white hover:bg-[#415A77] hover-text:  rounded px-4 py-1 ml-5 md:ml-8 sm:mt-0 sm:px-2 sm:py-0.5 sm:text-sm"> 
                <a href="Muhammad Zaeem Chaudhary Resume .pdf" target="_blank">Resume </a>
              </button>
            </ul>
          </nav>
          <hr className="h-0.5 border-t-0 bg-gray-300 opacity-100" />
          
          <div className='pb-10'>
            <p className='text-base py-4 leading-8 text-white'>
            Hello, my name is Zaeem. I’m a Computer Science and Mathematics double major at the University of Massachusetts Amherst, with a focus on artificial intelligence and data science.
            </p>
            <p className='text-base py-4 leading-8 text-white'>
            Currently, I am working with Professor Hamed Zamani at the Center for Intelligent Information Retrieval as a research fellow, focusing on developing methods and techniques for making large language models more useful for individuals through personalization. 
Over the summer, I worked on a research project that focused on optimizing convolutional neural networks for American Sign Language recognition and worked as a Data Science Intern at Neftwerk. 
            </p>
            <p className='text-base py-4 leading-8 text-white'>
            Additionally, I like  watching football, cricket, tennis and Formula 1. 
            </p>
          </div>
        </section>

        <section id="Experience">   
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Experience</h3>
     <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#415A77', color: '#fff'}}
    contentArrowStyle={{ borderRight: '8px solid  rgb(255, 255, 255)' }}
    date='March 2024 - April 2024'
    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src='snapchat.png' alt="psfdsa"
        className="w-[80%] h-[80%] object-contain"
        />
      </div>
    }
    visible={true}
  >
   <div>
      <h3 className="text-white text-[24px] font-bold">AR & VR Developer Extern</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>Snap Inc.</p>
    </div>

     <ul className="mt-5 list-disc ml-5 space-y-2">

        <li className="text-white-100 text-[14px] l-1 tracking-wider">
       Designed a soccer-themed AR lens incorporating Snap's Lens Studio and 3D modeling, certified by Snap Inc.’s Head of Entertainment.
        </li>
        <li className="text-white-100 text-[14px] l-1 tracking-wider">
        Launched a Snapchat lens inspired by Reebok and soccer, compatible with iOS and Android, gathering views from 100+ countries.
        </li>
        <li className="text-white-100 text-[14px] l-1 tracking-wider">
        Conducted data-driven market research in sports and technology using Tableau, and MySQL enhancing data visualization by 30%.
        </li>
 
 
    </ul> 
           
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#415A77', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
    date='May 2024 - July 2024'
    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src='result.png' alt="psfdsa"
        className="w-[90%] h-[90%] object-contain"
        />
      </div>
    }
    visible={true}
  >
     <div>
      <h3 className="text-white text-[24px] font-bold">Data Science Intern</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>Neftwerk</p>
    </div>

     <ul className="mt-5 list-disc ml-5 space-y-2">

        <li className="text-white-100 text-[14px] l-1 tracking-wider">
        Designed and sorted data from CSVs to Attio dashboards to improve client information accuracy and operational efficiency by 60%.
        </li>
        <li className="text-white-100 text-[14px] l-1 tracking-wider">
        Leveraged Attio’s REST API to implement filtering and pagination, optimizing data retrieval by 30% and enhancing user experience.
        </li>
        <li className="text-white-100 text-[14px] l-1 tracking-wider">
        Structured app’s code and documentation on GitHub, contributing to increased project workflows and easier team collaboration.
        </li>
    </ul> 
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#415A77',color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
    date='Sep 2024 - present'
    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src='lab.png' alt="psfdsa"
        className="w-[90%] h-[90%] object-contain"
      />
      </div>
    }
    visible={true}
  >
    
    <div>
      <h3 className="text-white text-[24px] font-bold">Personalizing LLM Research Fellow</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>Center for Intelligent Information Retrieval</p>
    </div>

     <ul className="mt-5 list-disc ml-5 space-y-2">

        <li className="text-white-100 text-[14px] l-1 tracking-wider">
        TBD
        </li>
        </ul>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#415A77', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}

    date="June 2024 - Aug 2024"
    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src='UMass.png' alt="psfdsa"
        className="w-[80%] h-[80%] object-contain"
        />
      </div>
    }
    visible={true}
  >
    
    <div>
      <h3 className="text-white text-[24px] font-bold">Undergraduate ML Researcher </h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>University of Massachusetts Amherst</p>
    </div>

     <ul className="mt-5 list-disc ml-5 space-y-2">

        <li className="text-white-100 text-[14px] l-1 tracking-wider">
        Optimized a CNN for ASL recognition, achieving a 97% F1 score through data augmentation and additional convolutional layers.
        </li>
        <li className="text-white-100 text-[14px] l-1 tracking-wider">
        Utilized ResNet pre-trained models to enhance accuracy to 98% and reduce overfitting, improving generalization on unseen data.
        </li>
        <li className="text-white-100 text-[14px] l-1 tracking-wider">
        Enhanced model robustness in Keras with batch normalization, and the Image Data Generator for consistent validation performance.
        </li>
    </ul> 
   
  </VerticalTimelineElement>

  </VerticalTimeline>
  </section>
 
  <section id="Projects">
  <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects</h3>
  <div className="w-full flex">
    <p className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]">
      Each Project has a link to my GitHub code. Feel free to look at the quick video demos or check out my code.
    </p>
  </div>

  <div className='mt-10 flex flex-wrap'>
    <div className='bg-[#415A77] p-5 rounded-2xl sm:w-[400px] min-w-[350px] w-full mr-6 mb-4'>
      <div className='relative w-full h-[240px]'>
        <video playsInline className='w-full h-full object-cover rounded-2xl' autoPlay loop muted>
          <source src="Demo.mp4" type="video/mp4" />
        </video>

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open('https://github.com/SatyaShodhaka/perfectpitch', '_blank')}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img
              src="github.png"
              alt="github"
              className="bg-black rounded-full flex items-center justify-center text-white"
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>PerfectPitch</h3>
        <p className='mt-2 text-gray-200 text-[14px]'>
          AI-powered platform designed to provide tailored feedback, script assistance, and a performance score for personalized interview preparation.
        </p>
      </div>
    </div>

    <div className='bg-[#415A77] p-5 rounded-2xl sm:w-[400px] min-w-[350px] w-full mr-6 mb-4'>
      <div className='relative w-full h-[240px]'>
        <video playsInline className='w-full h-full object-cover rounded-2xl' autoPlay loop muted>
          <source src="leetbank.mp4" type="video/mp4" />
        </video>

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open('https://github.com/rahmanMian/LeetBank', '_blank')}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img
              src="github.png"
              alt="github"
              className="bg-black rounded-full flex items-center justify-center text-white"
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>LeetBank</h3>
        <p className='mt-2 text-gray-200 text-[14px]'>
          Web-based platform that is designed to help you store, annotate and manage your LeetCode questions efficiently.
        </p>
      </div>
    </div>

    <div className='bg-[#415A77] p-5 rounded-2xl sm:w-[400px] min-w-[350px] w-full mr-6 mb-4'>
      <div className='relative w-full h-[240px]'>
        <video playsInline className='w-full h-full object-cover rounded-2xl' autoPlay loop muted>
          <source src="sonar.mp4" type="video/mp4" />
        </video>

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open('https://github.com/chaudharycoding/Dropout-Regularization-', '_blank')}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img
              src="github.png"
              alt="github"
              className="bg-black rounded-full flex items-center justify-center text-white"
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>Sonar Data Classification</h3>
        <p className='mt-2 text-gray-200 text-[14px]'>
          Developed a sonar signal classification model to distinguish between "Rock" and "Mine" signals using XGBoost.
        </p>
      </div>
    </div>

    <div className='bg-[#415A77] p-5 rounded-2xl sm:w-[400px] min-w-[350px] w-full mr-6 mb-4'>
      <div className='relative w-full h-[240px]'>
        <video playsInline className='w-full h-full object-cover rounded-2xl' autoPlay loop muted>
          <source src="olympic.mp4" type="video/mp4" />
        </video>

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open('https://github.com/chaudharycoding/-Predictive-Analytics-for-Olympic-Medal-Counts-using-Machine-Learning-', '_blank')}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img
              src="github.png"
              alt="github"
              className="bg-black rounded-full flex items-center justify-center text-white"
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>Olympic Medal Predictor</h3>
        <p className='mt-2 text-gray-200 text-[14px]'>Predictive analytics project designed to forecast Olympic medal counts using historical data and machine learning models.</p>
      </div>
     </div>
     </div>

         </section>
        
        <section id="Contact">
        <hr className="mt-20 h-0.5 border-t-0 bg-gray-300 opacity-100" />
          <div className= 'py-10 text-5xl flex items-center justify-center align-items-center gap-16 text-gray-600'>
            <p className='text-base py-4 leading-8 text-white'>muhammadzaee@umass.edu</p>
            <a href="https://github.com/chaudharycoding" target="_blank" rel="noopener noreferrer"><AiFillGithub className='hover:fill-white -500'/></a>
            <a href="https://www.linkedin.com/in/zaeem-chaudhary/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className='hover:fill-white -500'/></a>
            
          </div>
        </section>
        
        
      
        
      </main>
      
    </div>
    
   
  )
}

      