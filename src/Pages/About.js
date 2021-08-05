/* eslint-disable arrow-body-style */
import styled from 'styled-components';
import {
  FaGithub,
  FaFacebookMessenger,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <ContactWrapper>
      <SocialMedia>
        <SocialLink href="https://github.com/oasaleh" target="_blank">
          <FaGithub />
        </SocialLink>
      </SocialMedia>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  margin-top: 14rem;
  margin-bottom: 26.5rem;
  animation: fadeIn ease 2s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 480px) {
    margin-top: 5rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 10rem;
  font-size: 10rem;
  @media (max-width: 768px) {
    gap: 5rem;
    font-size: 8rem;
  }
  @media (max-width: 480px) {
    font-size: 5rem;
  }
`;

const ContactInfo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const SocialLink = styled.a`
  cursor: pointer;
  transition: transform 0.15s ease-in-out;
  color: black;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Contact;
