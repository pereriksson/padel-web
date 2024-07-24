import Image from "next/image";

type SocialMediaProps = {
  cfd: any;
}

export default function SocialMedia(props: SocialMediaProps) {
  const {cfd} = props
  const paragraph = cfd.fields.paragraph
  return (
    <div className="social-media">
      <h2>{cfd.fields.title}</h2>
      <p>Join our community on social media for the latest updates,<br/>tips, and some behind-the-scenes fun:</p>
      <div className="channels">
        <div className="channel">
          <div className="image">
            <Image src="/images/icons/ig.svg" width="50" height="50" alt=""/>
          </div>
          <div className="username">@username</div>
        </div>
        <div className="channel">
          <div className="image">
            <Image src="/images/icons/fb.svg" width="50" height="50" alt=""/>
          </div>
          <div className="username">@username</div>
        </div>
        <div className="channel">
          <div className="image">
            <Image src="/images/icons/in.svg" width="50" height="50" alt=""/>
          </div>
          <div className="username">@username</div>
        </div>
      </div>
      <p>{paragraph}</p>
    </div>
  )
}
