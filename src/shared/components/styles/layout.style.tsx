//src/shared/infrastructure/layout/layout.style.tsx

import React from 'react';
//@ts-ignore
import styled from 'styled-components/native';
import {CSSObject} from 'styled-components';

interface LayoutProps {
  padding?: number | string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  paddingVertical?: number | string;
  paddingHorizontal?: number | string;
  margin?: number | string;
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  style?: CSSObject;
}

interface HStackProps extends LayoutProps {
  children: React.ReactNode;
}

interface VStackProps extends LayoutProps {
  children: React.ReactNode;
}

interface ZStackProps extends LayoutProps {
  children: React.ReactNode;
}

interface SpacerProps extends LayoutProps {
  size?: number | string;
}

const layoutStyles = ({
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingVertical,
  paddingHorizontal,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginVertical,
  marginHorizontal,
  style,
}: LayoutProps): CSSObject => ({
  padding: padding || 0,
  paddingTop: paddingTop || paddingVertical || padding || 0,
  paddingRight: paddingRight || paddingHorizontal || padding || 0,
  paddingBottom: paddingBottom || paddingVertical || padding || 0,
  paddingLeft: paddingLeft || paddingHorizontal || padding || 0,
  margin: margin || 0,
  marginTop: marginTop || marginVertical || margin || 0,
  marginRight: marginRight || marginHorizontal || margin || 0,
  marginBottom: marginBottom || marginVertical || margin || 0,
  marginLeft: marginLeft || marginHorizontal || margin || 0,
  ...(style || {}),
});

export const HStack = styled.View<HStackProps>`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  align-items: center;
  ${layoutStyles};
`;

export const VStack = styled.View<VStackProps>`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  ${layoutStyles};
`;

export const ZStack = styled.View<ZStackProps>`
  position: relative;
  ${layoutStyles};
`;

export const Spacer = styled.View<SpacerProps>`
  flex: ${({size = 1}) => size};
  ${layoutStyles};
`;
