import Image from "next/image";
import Link from "next/link"

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer_logo">
            <Image src="/images/logo.png" width="143" height="68" alt="Logo"/>
          </div>
          <div className="footer__inner__right">
            <div className="footer__inner__right__column">
              <h2>Visit us</h2>
              <p>165 Eileen Way, Syosset,<br/>
                Long Island, New York, USA<br/>
                Questions? Email us at <Link target="_blank" href="mailto:hello@padeland.com">hello@padeland.com</Link><br/>
                We’ll answer you within 24 hours</p>
            </div>
            <div className="footer__inner__right__column">
              <h2>OUR HOURS</h2>
              <p>We are open from 6:00 AM to 11:30 PM. {/*All bookings must be made at <Link href="/bookhere">padeland.com/bookhere</Link>*/}</p>
            </div>
            <div className="footer__inner__right__column">
              <h2>KEEP IN TOUCH</h2>
              <p>Follow us on <Link target="_blank" href="https://www.instagram.com/padelandsyosset">Instagram</Link><br/>
                Like us on <Link target="_blank" href="https://www.facebook.com/profile.php?id=61561065563307">Facebook</Link><br/>
                Connect with us on <Link target="_blank" href="https://www.linkedin.com/company/padeland/">LinkedIn</Link></p>
            </div>
            <div className="footer__inner__right__column">
              <h2>FOR MEDIA INQUIRIES</h2>
              <p>For media inquiries<br/>
                Email us at <Link target="_blank" href="mailto:hello@padeland.com">hello@padeland.com</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
