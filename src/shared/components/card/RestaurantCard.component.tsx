import React from 'react';
//@ts-ignore
import styled from 'styled-components/native';
import {IRestaurant} from '../../utils/generateRandomData';
import {HStack, VStack} from '../styles/layout.style';

const RestaurantCard = ({restaurant}: {restaurant: IRestaurant}) => {
  return (
    <VStack>
      <CardImage
        source={{
          uri: restaurant?.imageUri,
        }}
      />
      <HStack>
        <CardDescriptionContainer>
          <CardTitle>{restaurant?.name}</CardTitle>
          <CardDescription>
            {restaurant.deliveryCost} &bull; {restaurant?.deliveryTime}
          </CardDescription>
        </CardDescriptionContainer>

        <CardRating>
          <CardRatingText>{restaurant?.rating}</CardRatingText>
        </CardRating>
      </HStack>
    </VStack>
  );
};

// const CardImageContainer = styled.View`
//   width: 100%;
//   height: 100px;
// `;
const CardImage = styled.Image`
  width: 100%;
  height: 300px;
`;
const CardDescriptionContainer = styled.View`
  width: 90%;
  height: 70px;
  justify-content: center;
`;
const CardRating = styled.View`
  border-radius: 50px;
  background-color: #383838;
  width: 45px;
  height: 45px;
  position: relative;
  top: 0px;
  right: 10px;
  justify-content: center;
  align-items: center;
`;
const CardRatingText = styled.Text`
  color: white;
`;
const CardTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
const CardDescription = styled.Text`
  font-weight: 400;
  font-size: 15px;
`;
export default RestaurantCard;
