import React from 'react';
import Slide from "react-reveal/Slide";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

const TopbarWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 6000;
  background: ${({darken}) => !darken ? `rgba(0,0,0,0.25)` : `rgba(0,0,0,0.55)` };
`;


const SideBarMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 9000;
  background: linear-gradient(45deg, rgba(0,0,0,0.4) 0%, rgba(46,0,37,0.8) 37%, rgba(254,0,100,0.4) 51%, rgba(0,0,0,0.9) 100%),linear-gradient(51deg, rgba(82,55,15,1) 0%, rgba(71,83,0,1) 40%, rgba(0,50,124,1) 100%);
  color: white;
  box-shadow: -10px 0 8px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  max-width: 400px;
  .sidebar-container {
     height: 100vh;
     width: 100%;
     background-color: rgba(0,0,0,0.65);
  }
  img {
    max-height: 28px;
  }
  button {
      border: none;
      padding: 0.5rem;
      border-radius: 5px;
      background: none!important;
      &:hover, &:focus {
        outline: none!important;
      }
  }
  li {
    list-style-type: none;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    a, button {
        text-decoration: none!important;
        font-size: 24px;
        color: #EEE;
        font-weight: 600;
        padding: 0;
        display: flex;
        align-items: center;
        img {
          margin-right: 8px;
          max-height: 40px;
        }
    }
    &:hover {
      background: rgba(74,20,140,0.8);
      a{ color: white!important; }
    }   
  }
`;

const SocialMediaLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    a {
       display: block;
       margin-right: 16px;
       i {
          font-size: 30px;
          color: #AAA;
          &:hover {
            color: #fd7e14;
          }
       }
    }
`;

const SideBar = ({ onClose, darkenOnSidebar }) => {

    const sidebarLinks =  [
        { icon: "far fa-home mr-2", "title": "Home", "href": "/" },
        { icon: "far fa-info-circle mr-2", "title": "About", "href": "/about" },
        { icon: "far fa-transporter-1 mr-2", "title": "Trainings", "href": "/trainings" },
        { icon: "far fa-microphone-stand mr-2", "title": "Speakers", "href": "/speakers" },
        { icon: "far fa-calendar-alt mr-2", "title": "Schedule", "href": "/schedule" },
        { icon: "far fa-heart mr-2", "title": "Sponsors", "href": "/sponsors" },
    ];

    return <TopbarWrap darken={darkenOnSidebar} onClick={onClose}>
        <Slide right duration={300}>
            <SideBarMenu onClick={(e) => { e.stopPropagation() }}>
                <div className="sidebar-container">
                    <div style={{ position: 'absolute', right: '0.25rem', top: '0.25rem' }}>
                        <button onClick={onClose}>
                            <i style={{ fontSize: '32px' }} className="fa text-light fa-times" />
                        </button>
                    </div>
                    <div className="text-center pt-5">
                        <img alt="ShaktiCon" style={{ maxHeight: '20vh', maxWidth: '100%' }} className="p-3" src={require('../../images/logo.svg')} />
                    </div>
                    <ol className="pl-0 mt-3">{sidebarLinks.map((l, index) =>
                        <Fade delay={index*250}>
                            <li>
                                {l.href ? <a href={l.href} className="w-100">
                                    <i className={l.icon} /> {l.title}
                                </a> : <button onClick={l.onClick} className="w-100">
                                    <i className={l.icon} /> {l.title}
                                </button>}
                            </li>
                        </Fade>
                    )}</ol>
                    <div style={{ color: '#999' }} className="text-center pt-4">
                        follow us on
                    </div>
                    <SocialMediaLinks className="social-bar d-flex align-items-center justify-content-center px-2">
                        <Fade delay={50}>
                            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/shakticon">
                                <i className="fab fa-instagram" />
                            </a>
                        </Fade>
                        <Fade delay={250}>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/shakticon">
                                <i className="fab fa-twitter" />
                            </a>
                        </Fade>
                        <Fade delay={500}>
                            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/Dv8hEV7vWv">
                                <i className="fab fa-discord" />
                            </a>
                        </Fade>
                    </SocialMediaLinks>
                </div>
            </SideBarMenu>
        </Slide>
    </TopbarWrap>;

};

export default SideBar;