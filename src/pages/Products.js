import { Link } from "react-router-dom";
import products from '../data'
import Footer from "./Footer";

const Products = () => {
  console.log(products)
  return (
    <>
      <section className='section'>
        <h2>products</h2>
        <div className="products flexcontainer">
          {products.map((product)=>{
            return (
            <article className="relative" key={product.id}>
              <div className="div1 relative animZoomer">
              <img className="img " src={product.image} alt={product.name} />
              <Link to={ `/products/${product.id}`} className="btn2">buy</Link>
              </div>
            <div className="diver animShow">
              <div>
                <h5> {product.name} </h5>
                <h4> {product.price}</h4>
              </div>
         
                <p className="blank">{product.desc}</p>
            </div>

 </article>
            )
          })}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Products;
