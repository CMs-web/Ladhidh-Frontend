import NavigationBar from "../../components/Navs/NavigationBar";
import Categories from "../Category/Categories";
import Category from "../Category/Category";
import OfferForYou from "./OfferForYou";
import SaleForYou from "./SaleForYou";
import TrendProducts from "./TrendProducts";
import { useCategory } from "../admin/page/Categories/useCategory";

function HomePage() {
  const navigateCategories = "/category";

  const { categories } = useCategory();

  return (
    <>
      <div className="pt-16 relative overflow-hidden">
        <Category heading={"Categories"} btn={"view all"}>
          {categories?.slice(0, 6).map((dts) => (
            <Categories
              key={dts._id}
              img={dts.img}
              tittle={dts.name}
              redirect={navigateCategories}
            />
          ))}
        </Category>
        <OfferForYou />
        <SaleForYou />
        <TrendProducts />
        <NavigationBar />
      </div>
    </>
  );
}

export default HomePage;
