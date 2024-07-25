import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBulletinBoardFields {
  headline?: EntryFieldTypes.Symbol;
  subHeadline?: EntryFieldTypes.Symbol;
  leftImage?: EntryFieldTypes.AssetLink;
  rightImage?: EntryFieldTypes.AssetLink;
}

export type TypeBulletinBoardSkeleton = EntrySkeletonType<TypeBulletinBoardFields, "bulletinBoard">;
export type TypeBulletinBoard<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBulletinBoardSkeleton, Modifiers, Locales>;

export interface TypeContactFormFields {
  title?: EntryFieldTypes.Symbol;
  image?: EntryFieldTypes.AssetLink;
  showMessage?: EntryFieldTypes.Boolean;
}

export type TypeContactFormSkeleton = EntrySkeletonType<TypeContactFormFields, "contactForm">;
export type TypeContactForm<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContactFormSkeleton, Modifiers, Locales>;

export interface TypeHeroFields {
  title?: EntryFieldTypes.Symbol;
  headline?: EntryFieldTypes.Text;
  subHeadline?: EntryFieldTypes.Symbol;
  paragraph?: EntryFieldTypes.Text;
  image?: EntryFieldTypes.AssetLink;
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, "hero">;
export type TypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroSkeleton, Modifiers, Locales>;

export interface TypeMembershipBenefitsFields {
  title?: EntryFieldTypes.Symbol;
}

export type TypeMembershipBenefitsSkeleton = EntrySkeletonType<TypeMembershipBenefitsFields, "membershipBenefits">;
export type TypeMembershipBenefits<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMembershipBenefitsSkeleton, Modifiers, Locales>;

export interface TypeNewsletterFields {
  title?: EntryFieldTypes.Symbol;
  paragraph?: EntryFieldTypes.Symbol;
}

export type TypeNewsletterSkeleton = EntrySkeletonType<TypeNewsletterFields, "newsletter">;
export type TypeNewsletter<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNewsletterSkeleton, Modifiers, Locales>;

export interface TypePageFields {
  title?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Text;
  slug?: EntryFieldTypes.Symbol;
  frontPage?: EntryFieldTypes.Boolean;
  content?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export interface TypePlacardFields {
  title?: EntryFieldTypes.Symbol;
  headline?: EntryFieldTypes.Text;
  paragraph?: EntryFieldTypes.RichText;
}

export type TypePlacardSkeleton = EntrySkeletonType<TypePlacardFields, "placard">;
export type TypePlacard<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePlacardSkeleton, Modifiers, Locales>;

export interface TypeRibbonFields {
  sentences?: EntryFieldTypes.Text;
  theme?: EntryFieldTypes.Symbol<"dark" | "light">;
}

export type TypeRibbonSkeleton = EntrySkeletonType<TypeRibbonFields, "ribbon">;
export type TypeRibbon<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRibbonSkeleton, Modifiers, Locales>;

export interface TypeSocialMediaFields {
  title?: EntryFieldTypes.Symbol;
  paragraph?: EntryFieldTypes.Text;
}

export type TypeSocialMediaSkeleton = EntrySkeletonType<TypeSocialMediaFields, "socialMedia">;
export type TypeSocialMedia<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSocialMediaSkeleton, Modifiers, Locales>;

export interface TypeTextFields {
  title?: EntryFieldTypes.Symbol;
  text?: EntryFieldTypes.RichText;
}

export type TypeTextSkeleton = EntrySkeletonType<TypeTextFields, "text">;
export type TypeText<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTextSkeleton, Modifiers, Locales>;

export interface TypeTwoCardsFields {
  title?: EntryFieldTypes.Symbol;
  headline?: EntryFieldTypes.Text;
  firstParagraph?: EntryFieldTypes.RichText;
  leftCard?: EntryFieldTypes.RichText;
  rightCard?: EntryFieldTypes.RichText;
  secondParagraph?: EntryFieldTypes.RichText;
}

export type TypeTwoCardsSkeleton = EntrySkeletonType<TypeTwoCardsFields, "twoCards">;
export type TypeTwoCards<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTwoCardsSkeleton, Modifiers, Locales>;

export interface TypeTwoColumnFields {
  title?: EntryFieldTypes.Symbol;
  image?: EntryFieldTypes.AssetLink;
  imagePosition?: EntryFieldTypes.Symbol<"left" | "right">;
  headline?: EntryFieldTypes.Symbol;
  paragraph?: EntryFieldTypes.RichText;
  buttonLink?: EntryFieldTypes.Symbol;
  theme?: EntryFieldTypes.Symbol<"dark" | "light">;
}

export type TypeTwoColumnSkeleton = EntrySkeletonType<TypeTwoColumnFields, "twoColumn">;
export type TypeTwoColumn<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTwoColumnSkeleton, Modifiers, Locales>;
