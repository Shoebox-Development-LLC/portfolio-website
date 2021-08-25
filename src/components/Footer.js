import React from "react"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerSocialMedia'>
        <h3>Social Media</h3>
        <ul>
          <li>
            <a
              href='https://www.instagram.com/shoeboxdevelopment'
              target='_blank'
              rel='noreferrer'
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href='https://www.twitter.com/shoeboxdevelop'
              target='_blank'
              rel='noreferrer'
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className='footerQuickNavigation'>
        <h3>Quick Navigation</h3>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/services'>Services</a>
          </li>
          <li>
            <a href='/about'>About Shoebox Development</a>
          </li>
          <li>
            <a href='/contact'>Contact Us</a>
          </li>
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
