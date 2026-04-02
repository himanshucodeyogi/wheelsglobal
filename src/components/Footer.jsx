import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/image-removebg-preview.png" alt="WHEELS Global Foundation" style={{ width: '260px', height: 'auto' }} />
          </div>
          <p>Leveraging the collective strength of IIT alumni to bring technology-enabled solutions to rural India.</p>
          <p className="footer-address">📍 7306 Hooking Rd, McLean, VA 22101, USA</p>
          <p>📧 <a href="mailto:info@WHEELSGlobal.org">info@WHEELSGlobal.org</a></p>
          <p className="footer-ein">EIN: 46-2376177 | US 501(c)(3)</p>
        </div>

        <div>
          <h4>Councils</h4>
          <ul>
            <li><Link to="/water">Water</Link></li>
            <li><Link to="/health">Health</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/energy">Energy</Link></li>
            <li><Link to="/livelihood">Livelihood</Link></li>
          </ul>
        </div>

        <div>
          <h4>Organization</h4>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/trustees">Trustees / Board</Link></li>
            <li><Link to="/board-of-advisors">Board of Advisors</Link></li>
            <li><Link to="/ambassadors">Ambassadors</Link></li>
            <li><Link to="/chapters">Chapters</Link></li>
            <li><Link to="/committees">Committees</Link></li>
          </ul>
        </div>

        <div>
          <h4>Resources</h4>
          <ul>
            <li><Link to="/events-and-news">News & Events</Link></li>
            <li><Link to="/financial-records">Financial Records</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn" onClick={e => e.preventDefault()}>LinkedIn</a>
              <a href="#" aria-label="Twitter" onClick={e => e.preventDefault()}>Twitter</a>
              <a href="#" aria-label="Facebook" onClick={e => e.preventDefault()}>Facebook</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} WHEELS Global Foundation. All rights reserved. | US 501(c)(3) Nonprofit</p>
          <p className="footer-tagline">Transforming 20% of Rurban India by 2030</p>
        </div>
      </div>
    </footer>
  )
}
