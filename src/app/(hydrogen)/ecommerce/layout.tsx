import CartDrawer from "../../shared/ecommerce/cart/cart-drawer";
import { CartProvider } from "../../../store/quick-cart/cart.context";

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
