import "./categories-list.style.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoriesList = (props) => {
  const { categories } = props;
  return (
    <div className="categories-list-container">
      {categories.map((category) => {
        const { id } = category;
        return <CategoryItem key={id} category={category} />;
      })}
    </div>
  );
};

export default CategoriesList;
