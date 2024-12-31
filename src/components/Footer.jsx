import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' style={{}}>
      <div className="contacts" style={{width:'32%'}}>
        <h3 style={{marginBottom:'1rem'}}>GET IN TOUCH</h3>
        <div className="email" style={{display:'flex'}}>
            <i className='fa fa-envelope' style={{marginRight:'0.5rem'}}></i>
            <p> mithunrrathod7@gmail.com</p>
        </div>
        <div className="phone-no" style={{display:'flex'}}>
            <i className='fa fa-phone' style={{marginRight:'0.5rem'}}></i>
            <p> +918605377680</p>
        </div>
      </div>
      <div className="contact-me" style={{width:'32%', display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
        <Link to="/contact" id='contact' style={{padding:'0.5rem 1rem', backgroundColor:'rgb(0, 0, 0)', color:'white', cursor:'pointer'}}>CONTACT ME</Link>
      </div>
      <div className="header-sm footer-sm" style={{display:'flex',justifyContent: 'flex-end' ,gap:'1rem',width:'32%', alignItems:'center', fontSize:'1.2rem', fontWeight:'600'}}>
        <a href="https://github.com/MithunRR" target='blank'>
            <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mithun-r-r/" target='blank'>
            <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/mithun_r_r/" target='blank'>
            <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/mithunrr07" target='blank'>
            <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://x.com/Mithun_RR_7" target='blank'>
            <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer
