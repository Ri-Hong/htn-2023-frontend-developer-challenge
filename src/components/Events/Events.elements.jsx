import styled from 'styled-components';


export const HeaderContainer = styled.div`
  display: flex;
  // border: 3px solid red;
  margin: 30px 0;
`

export const Header = styled.h1`
  text-align: left;
  padding: 0 80px;
  font-size: 24px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const EventsContainer = styled.div`
  // border: 3px solid green;
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  padding: 10px 80px 80px 80px;
  justify-content: center;
`

export const SearchBar = styled.form`
  // border: 3px solid red;
  width: auto;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 10px;
  border: 3px solid #FFFFFF;
  margin: 20px 80px;
  &:focus-within {
    border: 3px solid #8FACEF;
  }

  @media (max-width: 768px) {
    margin: 20px 20px;
  }

`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  display: block;
  border-radius: 10px;
  font-size: 20px;
  padding: 8px 40px 8px 20px;
  border: none;
  &:focus{
    outline: none;
  }
`

export const SearchButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  margin: 5px 10px 0 10px;
  padding: 0;
`

export const FilterButton = styled.button`


`