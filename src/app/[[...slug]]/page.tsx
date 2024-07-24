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
import type { Metadata, ResolvingMetadata } from 'next'
import MembershipBenefits from "@/components/MembershipBenefits/MembershipBenefits";
import TwoCards from "@/components/TwoCards/TwoCards";
import Text from "@/components/Text/Text"

function getPageFromSlug(slug: string, entries: any) {
  if (!slug) {
    return entries.find((e: any) => e.fields.frontPage)
  }
  return entries.find((e: any) => e.fields.slug === slug)
}

type ContentTypeSys = {
  id: string;
}

type ContentType = {
  sys: ContentTypeSys
}

type EntrySys = {
  contentType: ContentType
}

type Entry = {
  sys: EntrySys
}

export default async function Home(props: any) {
  const slug = props?.params?.slug ? props.params.slug.join("/") : ''

  const entries = await getEntries()
  const page = getPageFromSlug(slug, entries)

  if (!page) return <NotFound/>

  return (
    <Fragment>
      {page.fields.content.map((c: Entry, index: number) => {
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
            ["text", Text]
          ]
        )

        const Component = mapContentTypeToComponent.get(c.sys.contentType.sys.id)

        if (!Component) return null

        return (
          <Component key={index} cfd={c}/>
        )
      })}
    </Fragment>
  );
}

type Props = {
  params: { slug?: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params?.slug ? params.slug.join("/") : ''
  const entries = await getEntries()
  const page = getPageFromSlug(slug, entries)

  if (!page) return {}

  return {
    title: `${page.fields.title} | Padel&`,
    description: page.fields.description
  }
}
