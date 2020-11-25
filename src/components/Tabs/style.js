import styled, { css } from "styled-components";
import { typography, space, layout } from "styled-system";

export const TabTitle = styled.ol`
  ${space}
  cursor: pointer;
  ${({ activeTab }) =>
    activeTab &&
    css`
      border-bottom: 1px solid ${(props) => props.theme.primary};
    `}
`;

export const Table = styled.table`
  width: 100%;
`;

export const Td = styled.td`
  text-align: left;
  padding: ${(props) => props.theme.space[3]}px;
  ${space}
  ${typography}
  ${layout}
`;

export const Th = styled.th`
  font-size: ${(props) => props.theme.fontSizes[3]}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.secondary};
  padding: 15px;
  text-align: left;
  border-bottom: ${(props) =>
    props.removeBorderBottom
      ? "none"
      : css`1px solid ${(props) => props.theme.colors.black}`};
`;

export const CliclableTh = styled(Th)`
  cursor: pointer;
`;
