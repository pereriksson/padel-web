import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer_logo">
          <Image src="/images/logo.png" width="143" height="68" alt="Logo"/>
        </div>
        <div className="footer__inner__right">
          <div className="footer__inner__right__column">
            <h2>Visit us</h2>
            <p>165 Eileen Way, Syosset, Long Island, New York, USA<br/>
              Questions? Call<br/>
              816-541-8270 (office)  or<br/>
              855-752-7227</p>
          </div>
          <div className="footer__inner__right__column">
            <h2>OUR HOURS</h2>
            <p>Restaurant open 10:45am - 3pm or sellout Tuesday’s thru Saturday.<br/>
              No online orders or call-ins available</p>
          </div>
          <div className="footer__inner__right__column">
            <h2>KEEP IN TOUCH</h2>
            <p>Follow us on Instagram<br/>
              Like us on Facebook</p>
          </div>
          <div className="footer__inner__right__column">
            <h2>FOR MEDIA INQUIRIES</h2>
            <p>Deborah<br/>
              orders@jonesbbqkc.com<br/>
              Made with Squarespace</p>
          </div>
        </div>
      </div>
    </div>
  )
}
