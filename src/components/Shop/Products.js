import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    title: "Web Development",
    price: 1,
    description: "Web Developer"
  },
  { id: "p2", title: "React JS", price: 2, description: "React JS Developer" },
  {
    id: "p3",
    title: "React Native",
    price: 3,
    description: "React Native Developer"
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
