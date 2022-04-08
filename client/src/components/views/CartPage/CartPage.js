import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCartItems } from "../../../_actions/user_actions";

function CartPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    let cartItems = [];

    //리덕스 User state안에 cart안에 상품이 들어이쓴ㄴ지 확인
    if (props.user.userData && props.user.userData) {
      if (props.user.userdata.cart.length > 0) {
        props.user.userData.cart.foreach((item) => {
          cartItems.push(item.id);
        });

        dispatch(getCartItems(cartItems, props.user.userdat.cart));
      }
    }
  }, []);
  return <div>CartPage</div>;
}

export default CartPage;
