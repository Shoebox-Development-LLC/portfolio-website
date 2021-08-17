import React from "react"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerSocialMedia'>
        <h3>Social Media</h3>
        <ul>
          <a
            href='https://www.instagram.com/shoeboxdevelopment'
            target='_blank'
            rel='noreferrer'
          >
            <li>Instagram</li>
          </a>
          <a
            href='https://www.twitter.com/shoeboxdevelop'
            target='_blank'
            rel='noreferrer'
          >
            <li>Twitter</li>
          </a>
        </ul>
      </div>
      <div className='footerQuickNavigation'>
        <h3>Quick Navigation</h3>
        <ul>
          <a href='/'>
            <li>Home</li>
          </a>
          <a href='/services'>
            <li>Services</li>
          </a>
          <a href='/about'>
            <li>About Shoebox Development</li>
          </a>
          <a href='/contact'>
            <li>Contact Us</li>
          </a>
        </ul>
      </div>
      <div className='footerContacts'>
        <h3>Contacts</h3>
        <ul>
          <li>Address Line (if applicable)</li>
          <li>Phone Number: (555) 555-5555</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
