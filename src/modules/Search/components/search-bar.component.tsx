import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../../shared/components/Icon/icon.component';
//@ts-ignore
import styled from 'styled-components/native';

interface ISearchBarProps {
  searchQuery: string;
  setSearchQuery: (text: string) => void;
}

export const SearchBar = ({searchQuery, setSearchQuery}: ISearchBarProps) => {
  return (
    <SearchWrapper>
      <Search>
        <Icon name={'search'} width={20} height={20} stroke={'#181818'} />
        <SearchInput
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text: string) => setSearchQuery(text)}
          placeholderTextColor="#6b6b6b"
        />
        <Separator />
        <TouchableOpacity>
          <Icon name={'filter'} width={20} height={20} stroke={'#181818'} />
        </TouchableOpacity>
      </Search>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.View`
  width: 100%;
  height: 75px;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const Search = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #e5e5e5;
  border-radius: 20px;
  padding: 10px;
  width: 80%;
  height: 55px;
`;
const SearchInput = styled.TextInput`
  flex: 1px;
  margin-left: 10px;
  font-weight: 700;
`;
const Separator = styled.View`
  width: 1px;
  height: 24px;
  background-color: #ccc;
  margin-right: 10px;
`;

export default SearchBar;
