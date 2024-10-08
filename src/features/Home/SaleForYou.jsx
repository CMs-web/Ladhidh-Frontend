import { useSelector } from "react-redux";
import Card from "../Cart/Card";
import Loader from "../../components/Loader";
import { useProducts } from "../admin/page/products/useProducts";

function SaleForYou() {
  const navigateToProductList = "/product-details";

  // const { products = [], isLoading } = useSelector((state) => state.adminDashboard);
  const {products, isLoading} = useProducts()

  const showOnlyGreaterDisc = 5;
  const ifProductsHaveDiscount = products?.filter(
    (product) => product.discount > showOnlyGreaterDisc
  );

  return (
    <section className="mt-6 font-medium text-lg w-full">
      <h1 className="mb-2">Sale for you</h1>
      {isLoading ? (
        <Loader className={"h-40 w-full"} />
      ) : (
        <div className="flex gap-5 overflow-x-auto w-full ">
          {ifProductsHaveDiscount?.map((dtl, index) => (
            <Card
              key={index}
              id={dtl._id}
              img={dtl.img}
              pack={dtl.pack}
              tittle={dtl.title}
              discount={dtl.discount}
              code={dtl.code}
              price={dtl.price}
              redirect={navigateToProductList}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default SaleForYou;
