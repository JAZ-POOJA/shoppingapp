

import styled from "styled-components";
const Image = styled.img`
     width : 80%;
     height: 80%;
     margin-left : 40px;
     object-fit : cover;
`;

const Info = styled.div`
      position: absolute;
      top : 0;
      left :0;
      width : 100%;
      height : 100%;
      display: flex;
      flex-direction : row;
      align-items : center;
      justify-content : center;
      &:hover {
            background-color: white;
            transform: scale(1.0);
          }
`;

const Container = styled.div`
      flex:1;
      margin: 3px;
      height: 70vh;
      position: relative;
      &:hover ${Info}{
            opacity: 0.25;
          }
`;



const Title = styled.h1`
      color: black;
      margin-left: 30px;
      margin-bottom: 80px;
`;
const Button = styled.button`
    padding: 10px ;
    padding-right : 10px;
    font-size: 15px;
    width: 18 %;
    height: 50 %;
    position: absolute;
    border-color : black;
    background-color : white;
    cursor: pointer;
`;

const CategoryItem = ( {item}) => {
  return (
    <Container>
     <Image src ={item.img}/>
    <Info>
        <Title> {item.title} </Title>
        <Button> SHOP </Button>
    </Info>
    

    </Container>
  );
};

export default CategoryItem;