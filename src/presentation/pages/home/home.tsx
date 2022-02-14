import React from 'react'
import { FiArrowDown } from 'react-icons/fi'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import Style from './home-style.scss'

const Home: React.FC = () => {
  return (
    <div className={Style.home}>
        <header className={Style.header}>
          <a href="">
            <h1>Portfolio</h1>
          </a>
          <a href="">
            <h1>Menu</h1>
          </a>
        </header>
        <div className={Style.first}>
          <h1>personal website for work</h1>
          <h2>
            The content inside the main element should be unique to the document.
            It should not contain any content that is repeated across documents
            such as sidebars, navigation links, copyright information, site logos,
            and search forms.
          </h2>
          <a className={Style.scrollDown}>
            SCROLL DOWN <p>{<FiArrowDown />}</p>
          </a>
        </div>
        <div className={Style.second}>
          <div className={Style.secondText}>
            <p className={Style.secondTitle}>/ WHO WE ARE</p>
            <h1>
              We are a group of design driven individuals passionate about
              creating beautiful UI designs.
            </h1>
            <p className={Style.secondParagraph}>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Donec rutrum congue leo eget malesuada.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse.
            </p>
          </div>
        </div>
        <div className={Style.iconsTech}>
          <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg" alt="node" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/express/express-original-wordmark.svg" alt="express" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/html5/html5-original.svg" alt="html" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/javascript/javascript-original.svg" alt="js" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/mongodb/mongodb-original.svg" alt="mongo" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/react/react-original.svg" alt="react" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/sass/sass-original.svg" alt="sass" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/travis/travis-plain.svg" alt="travis" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/typescript/typescript-original.svg" alt="ts" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/webpack/webpack-original.svg" alt="webpack" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/jest/jest-plain.svg" alt="jest" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/azure/azure-original.svg" alt="jest" />
        </div>
        <div className={Style.projects}>
          <a href="">
            <div className={Style.container}>
              <h1>projeto</h1>
            </div>
          </a>
          <a href="">
            <div className={Style.container}>
              <h1>projeto</h1>
            </div>
          </a>
          <a href="">
            <div className={Style.container}>
              <h1>projeto</h1>
            </div>
          </a>
        </div>
        <footer className={Style.footer}>
          <a href="https://linkedin.com/in/yurifardel">
            <AiFillLinkedin style={{ fontSize: '2rem', color: '#404040' }} />
          </a>
          <a href="https://github.com/yurifardel">
            <AiFillGithub style={{ fontSize: '2rem', color: '#404040' }} />
          </a>
        </footer>
    </div>
  )
}

export default Home