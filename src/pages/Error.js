import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='section'>
      <h2>Error 404</h2>
      <p>Page not Found</p>
      <Link to='/' className="btn">Home</Link>
    </section>
  );
};
export default Error;
