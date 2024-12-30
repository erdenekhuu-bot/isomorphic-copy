import { routes } from "../../../../config/routes";
import PageHeader from "../../../shared/page-header";
import CheckoutPageWrapper from "../../../shared/ecommerce/checkout";
import { metaObject } from "../../../../config/site.config";

export const metadata = {
  ...metaObject("Checkout"),
};

const pageHeader = {
  title: "Checkout",
  breadcrumb: [
    {
      name: "Home",
    },
    {
      href: routes.eCommerce.dashboard,
      name: "E-Commerce",
    },
    {
      name: "Checkout",
    },
  ],
};

export default function CheckoutPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <CheckoutPageWrapper />
    </>
  );
}
