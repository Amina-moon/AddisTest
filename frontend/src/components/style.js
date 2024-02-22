import styled from '@emotion/styled';
import background from '../assets/img/background2.jpg';

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
  margin-left: 70px;
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
  width: 160px;
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
export const Time = styled.div`
  font-size: 14px; 
`;
export const ProgressBarContainer = styled.div`
  .progress {
    display: flex;
    align-items: center;
    margin-top: -10px;
  }

  
`;

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  margin-left:25px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-right:25px;
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
export const Navbarcontainer = styled.div`
  width: 86%;
  height:40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #89CFF0;
  padding: 15px 7%;
  border-radius:14px 14px 0px 0px;
`;

export const NavList = styled.ul`
  list-style: none;
  flex:1;
  text-align:right;
  margin-left:80px
`;

export const NavItem = styled.li`
     display:inline-block;
     margin:10px 20px ;
     cursor:pointer;
     font-size:18px;
     margin-right:20px;
     margin-left:20px;
     margin-bottom:10px;
     margin-top:10px;
     color:#808080 ;
   
`;



export const LogoImage = styled.img`
  margin-left: 10px;
  width: 125px;
  height: auto; /* Maintain aspect ratio */
  float: left;
`;


export const ContainerHero = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

export const ImageHero = styled.div`
  background: url(${background}) center/cover no-repeat;
  width: 100%;
  height: 100%;
`;

export const ContentHero = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:Black;
  font-size: 40px;
  font-weight:bold;
  font-family: 'Arial, Helvetica', 'sans-serif';
  font-style: oblique;
`;
export const CreateFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  margin-left:20px;
`;


export const CreateFormInput = styled.input`
  
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid silver;
  border-radius: 14px;
  box-sizing: border-box;
  
`;

export const CreateFormButton = styled.button`
  
  margin-top: 10px;
  padding: 5px 10px;
  background-color:#757575 ;
  border-radius: 5px;
  color: white;
  border: none;
  width:10%;
`;
export const CreateFormSubmitButton=styled.button`
 width: 50%;
  background-color:#757575 ;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  `
  export const DropdownButton = styled.button`
  border: none;
 margin-left:200px;
 margin-top:-10px;
 background-color:transparent;
 width:10px;
 height:10px;
 svg {
 font-size: 20px; /* Adjust the size here */
}
`;

export const DropdownContent = styled.div`
 display: ${props => (props.show ? 'block' : 'none')};
 background-color: #f9f9f9;
 position:absolute;
 min-width: 100px;
 float:right;
`;

export const DropdownLink = styled.a`
 color: black;
 padding: 12px 16px;
 text-decoration: none;
 display: block;

 &:hover {
   background-color: beige;
 }
`;
