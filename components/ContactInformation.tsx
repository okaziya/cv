import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "../config";
import { getTranslations } from "../lib/getTranslations";
import { Locale } from "../types";
import { getImagePath } from "../utils/imagePath";

export default function ContactInformation({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

  const contactItems = [
    {
      href: `tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`,
      icon: "/phone.png",
      alt: translations.contact.phone,
      text: CONTACT_INFO.phone,
      isExternal: false,
    },
    {
      href: `mailto:${CONTACT_INFO.email}`,
      icon: "/mail.png",
      alt: translations.contact.email,
      text: CONTACT_INFO.email,
      isExternal: false,
    },
    {
      href: CONTACT_INFO.linkedin,
      icon: "/linkedin.png",
      alt: translations.contact.linkedin,
      text: "/in/liza-blomdahl",
      isExternal: true,
    },
    {
      href: CONTACT_INFO.github,
      icon: "/github.png",
      alt: translations.contact.github,
      text: "@okaziya",
      isExternal: true,
    },
  ];

  return (
    <>
      <h3 className="m-0">{CONTACT_INFO.name}</h3>
      <address>
        <ul className="contact-list">
          {contactItems.map(({ href, icon, alt, text, isExternal }, index) => (
            <li key={index}>
              <Image
                src={getImagePath(icon)}
                alt={alt}
                width={24}
                height={24}
                priority
                unoptimized
              />
              {isExternal ? (
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  {text}
                </Link>
              ) : (
                <a href={href}>{text}</a>
              )}
            </li>
          ))}
        </ul>
      </address>
    </>
  );
}
