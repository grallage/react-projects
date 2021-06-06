import styled from "styled-components/macro";

const FONT_PRIMARY_COLOR = "#ffffff";

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  min-height: 100vh;

  @media (min-width: 1100px) {
    flex-wrap: nowrap;
    flex-direction: row;
    /* max-width: 1280px; */
  }
`;

// ----- left site -----

export const ShoppingCardContainer = styled.section`
  background-color: #252839;
  width: 100%;
  flex: 1 1 auto;
  color: ${FONT_PRIMARY_COLOR};

  /* justify-content: center; */

  padding: 110px 55px 117px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;

  @media (min-width: 1100px) {
    flex-grow: 7;
    padding: 110px 95px 117px;
  }
`;

export const ShoppingCartTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1.7px;
  margin: 0 0 80px;
`;
export const ShoppingCartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const ShoppingCartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 45px;
  margin-bottom: 45px;
`;

export const ItemImg = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  display: inline-block;

  & img {
    width: 100%;
  }

  @media (min-width: 1100px) {
    width: 150px;
    height: 150px;
  }
`;

export const ItemMsg = styled.div`
  line-height: 0.1rem;
`;

export const ItemName = styled.p`
  font-size: 1rem;
`;

export const ItemSize = styled.p`
  font-size: 0.5rem;
`;

export const ItemCount = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NumberInput = styled.span`
  display: inline-block;
  width: 60px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Minus = styled.div`
  width: 50px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  user-select: none;
`;

export const Plus = styled.div`
  width: 50px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  user-select: none;
`;

export const Price = styled.div`
  min-width: 70px;
`;

export const DeleteButton = styled.div`
  width: 50px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

export const ShoppingCartFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;

  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 1100px) {
    flex-wrap: nowrap;
    flex-direction: row;
  }
`;
export const ShoppingCartLink = styled.a`
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 1.15px;
  font-size: 20px;
  text-decoration: none;
  margin-bottom: 50px;

  @media (min-width: 1100px) {
    margin-bottom: 0;
  }
`;
export const ShoppingCartSubtotal = styled.span`
  display: flex;
  align-items: center;
`;

export const ShoppingCartSubtotalLabel = styled.span`
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 1.15px;
  font-size: 20px;
`;
export const ShoppingCartSubtotalPrice = styled.span`
  margin-left: 10px;
  font-size: 30px;
  font-weight: 600;
`;

// ----- right site -----

export const CheckoutContainer = styled.section`
  background-color: #677077;
  color: ${FONT_PRIMARY_COLOR};
  flex: 1 1 auto;
  padding: 120px 95px 172px;
  padding: 120px 95px 172px;

  justify-content: flex-start;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  position: relative;

  @media (min-width: 1100px) {
    flex-grow: 3;
    padding: 100px 95px 150px;
  }
`;

export const CheckoutTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 2.3px;
  margin: 0 0 85px;
  height: 50px;
`;
export const CheckoutTypeWrapper = styled.div`
  margin: 0;
`;
export const CheckoutTypeTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1.7px;
`;
export const VISAIcon = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  margin-bottom: 30px;
  & svg {
    margin-right: 20px;
    font-size: 2.9rem;
    cursor: pointer;
  }
`;

export const CheckoutForm = styled.form`
  max-width: 364px;
`;

export const FormGroup = styled.div`
  margin-bottom: 30px;
`;
export const FormLabel = styled.label`
  font-size: 20px;
  display: block;
  margin-bottom: 10px;
`;
export const FormInput = styled.input`
  color: ${FONT_PRIMARY_COLOR};
  font-size: 20px;
  border: 0;
  border-bottom: 1px solid #ffffff;
  line-height: 20px;
  background-color: transparent;
  outline: none;
  width: 364px;
`;

export const FormGroup2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const FormSubGroupLeft = styled.div``;
export const FormSubGroupRight = styled.div``;
export const FormInput2 = styled.input`
  color: ${FONT_PRIMARY_COLOR};
  font-size: 20px;
  border: 0;
  border-bottom: 1px solid #ffffff;
  line-height: 20px;
  background-color: transparent;
  outline: none;
  width: 63px;
`;

export const CheckoutFooter = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 152px;
  margin: 0;
  padding: 0;
`;

export const CheckoutButton = styled.input`
  background-color: #f2b632;
  outline: none;
  border: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  cursor: pointer;
  color: ${FONT_PRIMARY_COLOR};
  font-size: 20px;
`;
