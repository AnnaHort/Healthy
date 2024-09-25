import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainerStyle = styled.div`
  display: flex;
  background-color: #0f0f0f;
  justify-content: space-between;
  padding: 19px 0 19px 0;
  align-items: center;
  @media (min-width: 1024px) {
    padding: 36px 0 36px 0;
  }
`;

export const LogoStyle = styled.a`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-primary-grey);
`;

export const HeaderLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const HeaderLinkSignIn = styled(NavLink)`
  &:hover {
    color: var(--color-primary-green-lite);
  }
`;

export const HeaderLinkSignUp = styled(NavLink)`
  &:hover {
    color: var(--color-primary-green-lite);
  }
`;
