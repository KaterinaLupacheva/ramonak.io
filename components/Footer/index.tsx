import Contacts from './Contacts';
import { Copyright, FooterContainer } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <Copyright>All rights reserved © ramonak.io 2019 - {new Date().getFullYear()}</Copyright>
      <Contacts />
    </FooterContainer>
  );
}
