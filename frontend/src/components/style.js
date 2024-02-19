import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const WholeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: -20px;
`;

export const CardContainer = styled.div`
  width: 200px;
  height: 350px;
  padding: 20px;
  background-color: silver;
  border-radius: 13px;
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 40px;
  margin-bottom: 40px;
  border: 2px solid #a9a9a9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardWrapper = styled.div`
  flex: 0 0 calc(25% - 80px);
  margin: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 5px;
  text-shadow: 2px 2px 4px #000000;
  text-align: center;
`;

export const CardContent = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: -30px;
  margin-bottom: 7px;
  font-weight: 700;
`;

export const SpecialCardContent = styled(CardContent)`
  font-weight: 200;
`;

export const CardImage = styled.img`
  width: 220px;
  height: 150px;
  margin-top: 0px;
  border-radius: 50%;
  border: 4px solid grey;
  max-width: 250px;
`;

export const RangeInput = styled.input`
  --range-progress: 0;

  -webkit-appearance: none;
  position: relative;
  background: #ccc;
  width: 100%;
  height: 5px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0px;

  &::-moz-range-track {
    position: relative;
    background: #ccc;
    width: 13%;
    height: 5px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 0px;
  }

  &::before {
    content: '';
    height: 5px;
    background: darkgreen;
    width: var(--range-progress);
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::-moz-range-progress {
    background: darkgreen;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    height: 5px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 9px;
    width: 9px;
    border-radius: 50%;
    border: none;
    background-color: darkgreen;
    cursor: pointer;
    position: relative;
  }

  &:active::-webkit-slider-thumb {
    transform: scale(1.2);
  }

  &::-moz-range-thumb {
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background: darkgreen;
    cursor: pointer;
    border: transparent;
    position: relative;
  }

  &:active::-moz-range-thumb {
    transform: scale(1.2);
  }
`;

export const ProgressBarContainer = styled.div`
  .progress {
    display: flex;
    align-items: center;
    margin-top: -10px;
  }

  .time {
    font-size: 12px;
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 8px;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 30px;
  border: 2px solid #a9a9a9;
  box-sizing: border-box;
  margin-bottom: 50px;
  
`;

export const CreateMusicButton = styled.button`
  padding: 10px 20px;
  background-color: darkgreen;
  color: white;
  border: none;
  border-radius: 13px;
  font-size: 16px;
  cursor: pointer;
  float: right;
  margin-right: 30px;

  &:hover {
    background-color: black;
  }
`;
export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0px;
  overflow: hidden;
  background-color: #f3f3f3;
  border: 1px solid #e7e7e7;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
`;

export const NavItem = styled.li`
   float: right;
   margin-right: 30px;
   ${'' /* margin-bottom:14px */}
`;

export const NavLink = styled.a`
  color: #666;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
 &:hover {
    background-color: #ddd;
  }
`;

export const LogoImage = styled.img`
  margin-left: 10px;
  width: 125px;
  height: auto; /* Maintain aspect ratio */
  float: left;
`;
