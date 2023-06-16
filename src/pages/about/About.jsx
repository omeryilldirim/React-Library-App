import React from 'react'
import { AboutContainer, IconContainer, InfoContainer, ProfileImg } from './About.style'
import profile from "../../assets/about.png"
import Icon from '../../components/icon/Icon';
import { iconData } from '../../helper/iconData';

const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={profile} alt="anthony" />
      <InfoContainer>
        <h2>Hi, I'm Ömer</h2>
        <h3>Fullstack Developer</h3>
        <h4> Feel free to contact!</h4>
      </InfoContainer>
      <IconContainer>
        {iconData.map(item=> <a key={item.icon} href={item.href}>
          <Icon icon={item.icon} path={item.path} hoverColor={item.color} />
        </a>)}
      </IconContainer>
    </AboutContainer>
  );
}

export default About