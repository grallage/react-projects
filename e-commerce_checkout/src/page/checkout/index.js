import React, { useEffect } from "react";
import {
  Main,
  ShoppingCardContainer,
  CheckoutContainer,
  CheckoutTitle,
  CheckoutTypeTitle,
  VISAIcon,
  CheckoutTypeWrapper,
  CheckoutForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormSubGroupLeft,
  FormSubGroupRight,
  FormGroup2,
  FormInput2,
  CheckoutFooter,
  CheckoutButton,
  ShoppingCartTitle,
  ShoppingCartWrapper,
  ShoppingCartItem,
  ItemImg,
  ItemMsg,
  ItemName,
  ItemSize,
  ItemCount,
  Minus,
  NumberInput,
  Plus,
  Price,
  DeleteButton,
  ShoppingCartFooter,
  ShoppingCartLink,
  ShoppingCartSubtotal,
  ShoppingCartSubtotalLabel,
  ShoppingCartSubtotalPrice,
} from "./components/checkoutElements";

import { data } from "./data";

import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const CheckoutPage = () => {
  const [items, setItems] = React.useState([]);
  const [subtotal, setSubtotal] = React.useState(0);

  useEffect(() => {
    setItems(data);
  }, []);

  useEffect(() => {
    handleSubtotal();
  }, [items]);

  const handleSubtotal = () => {
    const reducer = (accumulator, currentValue, index, sourceArray) => {
      let price2 = parseFloat(sourceArray[index].price);
      let count2 = parseInt(sourceArray[index].count);

      let price = parseFloat(sourceArray[index - 1].price);
      let count = parseInt(sourceArray[index - 1].count);

      let subtotal = index === 1 ? 0 : parseFloat(accumulator);
      let total = (subtotal + price2 * count2 + price * count).toFixed(2);

      return total;
    };
    const total =
      items.length > 1
        ? items.reduce(reducer)
        : items.length > 0
        ? () => {
            let price = parseFloat(items[0].price);
            let count = parseInt(items[0].count);
            return (price * count).toFixed(2);
          }
        : 0;

    setSubtotal(total);
  };

  const handlePlus = ({ item }) => {
    const newItems = items.map((obj) => {
      if (obj.id === item.id) {
        obj.count = parseInt(item.count) + 1;
      }
      return obj;
    });
    setItems(newItems);
  };
  const handleMinus = ({ item }) => {
    const newItems = items.map((obj) => {
      if (obj.id === item.id) {
        obj.count = parseInt(item.count) - 1;
        obj.count = obj.count > 0 ? obj.count : 1;
      }
      return obj;
    });
    setItems(newItems);
  };

  const handleRemove = ({ item }) => {
    const newItems = items.filter((obj) => obj.id != item.id);
    setItems(newItems);
  };

  return (
    <Main>
      <ShoppingCardContainer>
        <ShoppingCartTitle>Your Shopping Cart</ShoppingCartTitle>
        <ShoppingCartWrapper>
          {items.map((item) => {
            return (
              <ShoppingCartItem key={item.id}>
                <ItemImg>
                  <img src={item.img} />
                </ItemImg>
                <ItemMsg>
                  <ItemName>{item.name}</ItemName>
                  <ItemSize>{item.size}</ItemSize>
                </ItemMsg>
                <ItemCount>
                  <Minus
                    onClick={() => {
                      handleMinus({ item });
                    }}
                  >
                    -
                  </Minus>
                  <NumberInput>{item.count}</NumberInput>
                  <Plus
                    onClick={() => {
                      handlePlus({ item });
                    }}
                  >
                    +
                  </Plus>
                </ItemCount>
                <Price>
                  ${(parseFloat(item.price) * parseInt(item.count)).toFixed(2)}
                </Price>
                <DeleteButton
                  onClick={() => {
                    handleRemove({ item });
                  }}
                >
                  x
                </DeleteButton>
              </ShoppingCartItem>
            );
          })}

          {/* <ShoppingCartItem>
            <ItemImg>
              <img src="https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </ItemImg>
            <ItemMsg>
              <ItemName>Pizza01</ItemName>
              <ItemSize>Large</ItemSize>
            </ItemMsg>
            <ItemCount>
              <Minus>-</Minus>
              <NumberInput>1</NumberInput>
              <Plus>+</Plus>
            </ItemCount>
            <Price>$35.99</Price>
            <DeleteButton>x</DeleteButton>
          </ShoppingCartItem> */}
        </ShoppingCartWrapper>
        <ShoppingCartFooter>
          <ShoppingCartLink href="#">Continue Shopping</ShoppingCartLink>
          <ShoppingCartSubtotal>
            <ShoppingCartSubtotalLabel>Subtotal:</ShoppingCartSubtotalLabel>
            <ShoppingCartSubtotalPrice>${subtotal}</ShoppingCartSubtotalPrice>
          </ShoppingCartSubtotal>
        </ShoppingCartFooter>
      </ShoppingCardContainer>
      {/* right */}
      <CheckoutContainer>
        <CheckoutTitle>Card Details</CheckoutTitle>
        <CheckoutTypeWrapper>
          <CheckoutTypeTitle>Card Type</CheckoutTypeTitle>
          <VISAIcon>
            <FaCcVisa />
            <FaCcMastercard />
          </VISAIcon>
        </CheckoutTypeWrapper>
        <CheckoutForm>
          <FormGroup>
            <FormLabel>Name on Card</FormLabel>
            <FormInput />
          </FormGroup>
          <FormGroup>
            <FormLabel>Card Number</FormLabel>
            <FormInput />
          </FormGroup>
          <FormGroup2>
            <FormSubGroupLeft>
              <FormLabel>Expiry Day</FormLabel>
              <FormInput2 />/
              <FormInput2 />/
              <FormInput2 />
            </FormSubGroupLeft>
            <FormSubGroupRight>
              <FormLabel>CVV</FormLabel>
              <FormInput2 />
            </FormSubGroupRight>
          </FormGroup2>
          <CheckoutFooter>
            <CheckoutButton value="Complete Purchase" type="submit" />
          </CheckoutFooter>
        </CheckoutForm>
      </CheckoutContainer>
    </Main>
  );
};

export default CheckoutPage;
