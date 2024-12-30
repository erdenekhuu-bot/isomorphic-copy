import { routes } from "../../config/routes";
import { Title, Text } from "rizzui";
import cn from "../../utils/class-names";
import WishlistButton from "../wishlist-button";
import { generateSlug } from "../../utils/generate-slug";
import ColorSwatch from "../../utils/color-swatch";
import { Product } from "../../types";
import { toCurrency } from "../../utils/to-currencty";

interface ProductProps {
  product: Product;
  className?: string;
}

export default function ProductModernCard({
  product,
  className,
}: ProductProps) {
  const {
    title,
    thumbnail,
    slug,
    description,
    price,
    sale_price,
    colors = [],
  } = product;
  return (
    <div className={cn(className)}>
      <div className="relative">
        <div className="relative mx-auto aspect-[4/5.06] w-full overflow-hidden rounded-lg bg-gray-100">
          <img
            alt={title}
            src={thumbnail}
            sizes="(max-width: 768px) 100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <WishlistButton className="absolute end-3 top-3" />
      </div>

      <div className="pt-3">
        <a
          href={routes.eCommerce.productDetails(
            String(slug ?? generateSlug(title))
          )}
        >
          <Title
            as="h6"
            className="mb-1 truncate font-semibold transition-colors hover:text-primary"
          >
            {title}
          </Title>
        </a>

        <Text as="p" className="truncate">
          {description}
        </Text>
        <div className="mt-2 flex items-center font-semibold text-gray-900">
          {toCurrency(Number(price))}
          {sale_price && (
            <del className="ps-1.5 text-[13px] font-normal text-gray-500">
              {toCurrency(Number(sale_price))}
            </del>
          )}
        </div>

        {colors?.length ? <ColorSwatch colors={product?.colors} /> : null}
      </div>
    </div>
  );
}
