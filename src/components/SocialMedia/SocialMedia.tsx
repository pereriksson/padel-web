type SocialMediaProps = {
  cfd: any;
}

export default function SocialMedia(props: SocialMediaProps) {
  const {cfd} = props
  const paragraph = cfd.fields.paragraph
  return (
    <div className="social-media">
      <h2>{cfd.fields.title}</h2>
      <p>{paragraph}</p>
    </div>
  )
}
