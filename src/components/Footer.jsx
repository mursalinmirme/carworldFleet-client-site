import logo from '../assets/logo.png';
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs'
const Footer = () => {
    return (
        <div className='mt-20'>
          <footer className="footer flex flex-col justify-between lg:flex-row w-11/12 mx-auto lg:p-10 text-base-content">
  <aside>
    <img className='w-28 ' src={logo} alt="" />
    <h2 className='text-xl font-bold'>CarWorldFleet</h2>
    <p className='w-80'>Explore a captivating journey through the latest car models, industry insights, and the art of driving. Discover the perfect ride for your lifestyle and stay updated. </p>
    <ul className='flex text-xl space-x-5 mt-5'>
      <a href="#"><li className='text-blue-500'><BsFacebook></BsFacebook></li></a>
      <a href="#"><li className='text-orange-600'><BsInstagram></BsInstagram></li></a>
      <a href="#"><li className='text-sky-500'><BsTwitter></BsTwitter></li></a>
      <a href="#"><li className='text-red-600'><BsPinterest></BsPinterest></li></a>
    </ul>
  </aside> 
  <nav className="font-medium space-y-3">
    <header className="footer-title">ABOUT US</header> 
    <a className="link link-hover">ABOUT US</a> 
    <a className="link link-hover">WHO WE ARE</a> 
    <a className="link link-hover">OUR OFFERS</a> 
    <a className="link link-hover">OUR CLIENTS</a>
  </nav> 
  <nav className="font-medium space-y-3">
    <header className="footer-title">Services</header> 
    <a className="link link-hover">WHEELS & TIRES</a> 
    <a className="link link-hover">DRIVING EVENTS</a> 
    <a className="link link-hover">CLASSIC STORE</a> 
    <a className="link link-hover">FAQ PAGE</a>
  </nav> 
  <nav className="font-medium space-y-3">
    <header className="footer-title">CONTACT</header> 
    <a className="link link-hover">WHERE WE ARE</a> 
    <a className="link link-hover">CONTACT US</a> 
    <a className="link link-hover">OUR TEAM</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav className="font-medium space-y-3">
    <header className="footer-title">DISCOVER MORE</header> 
    <a className="link link-hover">OIL CHANGE</a> 
    <a className="link link-hover">VEHICLES</a> 
    <a className="link link-hover">SCHEDULE</a>
  </nav>
</footer>
      <p className="text-center text-sm mb-6 mt-6">© All right reserved by Mursalin Mir 2023</p>
        </div>
    );
};

export default Footer;