import UserIcon from '../../svg/UserIcon';
import {
  HeaderContainerStyle,
  HeaderLinkContainer,
  HeaderLinkSignIn,
  HeaderLinkSignUp,
  LogoStyle,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderContainerStyle>
      <LogoStyle href="/">HealthyHub</LogoStyle>
      <HeaderLinkContainer>
        <div>
          <HeaderLinkSignIn href="/">Sign in</HeaderLinkSignIn>
          <span style={{ color: 'white' }}> / </span>
          <HeaderLinkSignUp href="/">Sign up</HeaderLinkSignUp>
        </div>
        <UserIcon />
      </HeaderLinkContainer>
    </HeaderContainerStyle>
  );
};

export default Header;
