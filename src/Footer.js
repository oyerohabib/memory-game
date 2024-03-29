import React from 'react';
import styled from 'styled-components';
import GitHubIcon from './GitHubIcon';

const StyledFooter = styled.div`
flex:none;
background-color: rgb(232, 232, 232);
color: rgb(0, 0, 0);
padding-top: 10px;
text-align: center;

& .footerheart {
  color: #D4726A;
}

& .footerlink {
  text-decoration: none;
  color: #226666;
}
`;

const Footer = () => (
  <StyledFooter>
    <a
      href="https://github.com/oyerohabib/memory-game"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon className="menuIcon" />
    </a>
    <p>
      Made with{' '}
      <span className="footerheart">♥</span>
      {' '}by{' '}
      <a
        className="footerlink"
        href="https://github.com/oyerohabib"
        rel="noopener noreferrer"
        target="_blank"
      >
        {' '}Oyero Habib
      </a>
    </p>
  </StyledFooter>
);

export default Footer;
