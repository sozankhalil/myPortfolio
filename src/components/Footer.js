import './FooterStyles.css'
import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <div className='address'>
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
              <div>
                <p>Malik-Mahmood-ring-road</p>
                <p>Sulaymaniyah, Iraq</p>
              </div>
</div>
          
            <div className='phone'>
              <h4> <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} /> +964 770 866 6837 </h4>
            </div>
            <div className='email'>
              <h4> <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} /> sozan.civil@gmail.com </h4>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='social'>
            <FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            <FaInstagram size={30} style={{ color: '#fff', marginRight: '1rem' }} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer