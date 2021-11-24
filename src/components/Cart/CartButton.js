import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const totalItemsCount = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const cartClickHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={cartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItemsCount}</span>
    </button>
  );
};

export default CartButton;
