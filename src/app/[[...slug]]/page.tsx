import {Fragment, useEffect, useState} from "react";
import Hero from "@/components/Hero/Hero";
import Ribbon from "@/components/Ribbon/Ribbon";
import TwoColumn from "@/components/TwoColumn/TwoColumn";
import BulletinBoard from "@/components/BulletinBoard/BulletinBoard";
import Newsletter from "@/components/Newsletter/Newsletter";
import {getEntries} from "@/apis/api";
import ContactForm from "@/components/ContactForm/ContactForm";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import Placard from "@/components/Placard/Placard";
import NotFound from "next/dist/client/components/not-found-error";

function getPageFromSlug(slug: string, entries: any) {
  if (!slug) {
    return entries.find((e: any) => e.fields.frontPage)
  }
  return entries.find((e: any) => e.fields.slug === slug)
}

export default async function Home(props: any) {
  const slug = props?.params?.slug ? props.params.slug.join("/") : ''

  const entries = await getEntries()
  const page = getPageFromSlug(slug, entries)

  if (!page) return <NotFound/>

  return (
    <Fragment>
      {page.fields.content.map((c: any, index: number) => {
        const mapContentTypeToComponent = {
          "hero": Hero,
          "ribbon": Ribbon,
          "twoColumn": TwoColumn,
          "bulletinBoard": BulletinBoard,
          "newsletter": Newsletter,
          "contactForm": ContactForm,
          "socialMedia": SocialMedia,
          "placard": Placard
        }

        // @ts-ignore
        const Component = mapContentTypeToComponent[c.sys.contentType.sys.id]

        if (!Component) return null

        return (
          <Component key={index} cfd={c}/>
        )
      })}
    </Fragment>
  );
}
