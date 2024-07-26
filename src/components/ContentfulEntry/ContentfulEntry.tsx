import Hero from "@/components/Hero/Hero";
import Ribbon from "@/components/Ribbon/Ribbon";
import TwoColumn from "@/components/TwoColumn/TwoColumn";
import BulletinBoard from "@/components/BulletinBoard/BulletinBoard";
import Newsletter from "@/components/Newsletter/Newsletter";
import ContactForm from "@/components/ContactForm/ContactForm";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import Placard from "@/components/Placard/Placard";
import MembershipBenefits from "@/components/MembershipBenefits/MembershipBenefits";
import TwoCards from "@/components/TwoCards/TwoCards";
import Text from "@/components/Text/Text";
import SubscriptionForm from "@/components/SubscriptionForm/SubscriptionForm";
import Subscription from "@/components/Subscription/Subscription";
import SubscriptionTerm from "@/components/SubscriptionTerm/SubscriptionTerm";
import SubscriptionTermCard from "@/components/SubscriptionTermCard/SubscriptionTermCard";

type ContentfulComponentProps = {
  c: any
}

export default function ContentfulEntry(props: ContentfulComponentProps) {
  const {c} = props
  const mapContentTypeToComponent = new Map<string, any>(
    [
      ["hero", Hero],
      ["ribbon", Ribbon],
      ["twoColumn", TwoColumn],
      ["bulletinBoard", BulletinBoard],
      ["newsletter", Newsletter],
      ["contactForm", ContactForm],
      ["socialMedia", SocialMedia],
      ["placard", Placard],
      ["membershipBenefits", MembershipBenefits],
      ["twoCards", TwoCards],
      ["text", Text],
      ["subscriptionForm", SubscriptionForm],
      ["subscription", Subscription],
      ["subscriptionTerm", SubscriptionTerm],
      ["subscriptionTermCard", SubscriptionTermCard]
    ]
  )

  const Component = mapContentTypeToComponent.get(c.sys.contentType.sys.id)

  if (!Component) return null

  return (
    <Component cfd={c}/>
  )
}
