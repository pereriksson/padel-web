import Image from "next/image";

export default function MembershipBenefits() {
  return (
    <div className="membership-benefits">
      <div className="container">
        <h2>Membership Benefits</h2>
        <p>As a member, you will receive:</p>
        <div className="grid">
          <div className="card">
            <div className="image">
              <Image src="/images/icons/1.svg" fill={true} alt=""/>
            </div>
            <div className="text">
              <h3>20% Discount on Court Times</h3>
              <p>Enjoy substantial savings every time you book a court.</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image src="/images/icons/2.svg" fill={true} alt=""/>
            </div>
            <div className="text">
              <h3>Complimentary T-Shirt</h3>
              <p>Show off your membership pride with a free, high-quality t-shirt</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image src="/images/icons/3.svg" fill={true} alt=""/>
            </div>
            <div className="text">
              <h3>Early Booking Access</h3>
              <p>Reserve your court time up to 20 days in advance.</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image src="/images/icons/4.svg" fill={true} alt=""/>
            </div>
            <div className="text">
              <h3>25% Discount in the Pro Shop</h3>
              <p>Get great deals on all your equipment and apparel needs</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image src="/images/icons/5.svg" fill={true} alt=""/>
            </div>
            <div className="text">
              <h3>Earn Extra Points</h3>
              <p>Accumulate points with each booking and purchase to redeem for exciting rewards.</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image src="/images/icons/6.svg" fill={true} alt=""/>
            </div>
            <div className="text">
              <h3>Weekly Clinic</h3>
              <p>Participate in our weekly clinics to improve your skills and meet fellow members.</p>
            </div>
          </div>
        </div>
        <p>We look forward to welcoming you as a member and providing you with an unparalleled experience. Join us today and start enjoying all these fantastic benefits!</p>
      </div>
    </div>
  )
}
