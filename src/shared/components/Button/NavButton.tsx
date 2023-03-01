import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon/icon.component';

export const NavButton = () => {
  return (
    <NavButtonWrapper>
      <Icon name={'profil'} width={20} height={20} stroke={'#181818'} />
    </NavButtonWrapper>
  );
};

const NavButtonWrapper = styled.view``;
