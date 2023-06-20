import { Link } from "react-router-dom";
import Footer from './Footer'

const About = () => {
  return (<>
    <section className='column about second'>
      <h2 className="test">CONTACT US</h2>
      <div className="row">
        <div className="column">
          <h4>NAME</h4>
          <input type="text"></input>
        </div>
        <div className="column">
          <h4>EMAIL</h4>
          <input type='text'></input>
        </div>
      </div>
      <div className="column bigbox">
        <h4>MESSAGE</h4>
        <input type="text" className='bigbox'></input>

      </div>
      
      
      
      <btn className='btn second secondBorder'>SEND</btn>
    </section>
    <Footer></Footer>
    </>
  );
};
export default About;
