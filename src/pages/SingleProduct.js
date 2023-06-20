import { Link, useParams } from "react-router-dom";
import products from "../data";
import Footer from './Footer'

const SingleProduct = () => {
  const {productId} = useParams()
  const product = products.find((product)=> product.id === productId)
  const {image, name, desc, price} = product
  return (<>
    <section className='section product'>
      <div className="padder">      
      <img src={image}></img>
      </div>
      <div className="padder2">
        <div className="row">
        <h3>{name}</h3>
        <h3>{price}</h3>
        </div>
      <div className="row">
      <Link to='/products' className="btn">back to products</Link>
      <btn className='btn'>Buy this item</btn>
      </div>    
      <p>{desc}</p>
      </div>

    

    </section>
    <Footer></Footer>
    </>
  );


};

export default SingleProduct;
