import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className=' bg-gray-100 bottom-0 py-6  flex flex-col items-center'>
        <p className='mb-3'>
          <Link to = "" >Privacy Policy | </Link>
          
          <Link to= "">Terms & Condition | </Link>
          <Link  to = ''> Refund & Cancellation Policy</Link>
        </p>
        <p>© 2025 webinar.gg. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer;