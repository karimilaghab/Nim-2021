import styled from "styled-components";
import { space } from "styled-system";

export const Header = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.headerBg};
  height: 150px;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${space}
`;

export const Title = styled.h2``;
