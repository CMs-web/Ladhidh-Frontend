import Categories from "./Categories";
import Category from "./Category";
import { useCategory } from "../admin/page/Categories/useCategory";

function CategoryPage({ onClick }) {

  const { categories} = useCategory()
  
  return (
    <>
      <Category>
        {categories?.map((dts, index) => (
          <Categories
            key={index}
            id= {dts._id}
            img={dts.img}
            tittle={dts.name}
            redirect={onClick || `/product-list/${dts.cat_id}`}
          />
        ))}
      </Category>
    </>
  );
}

export default CategoryPage;
