import React from "react";

import { getTranslations } from "../../lib/getTranslations";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const montserratExtraBold = localFont({
  src: "../../public/fonts/Montserrat-ExtraBold.ttf",
  weight: "800",
  style: "normal",
  display: "swap",
});

export default function LocaleHomePage({
  params,
}: {
  params: { locale: string };
}) {
  const translations = getTranslations(params.locale);

  return (
    <>
      <section className="hero-section d-flex align-items-center">
        <div>
          <h1 className={`${montserratExtraBold.className} m-0`}>
            Full-Stack Developer
          </h1>
          <h3>{translations.description}</h3>
        </div>
        <div>
          <img
            src="/profile-photo.png"
            alt="Liza Blomdahl photo"
            className="profile-photo"
            width={560}
            height={560}
          />
        </div>
      </section>
      <section className="contact-section d-flex">
        <div>
          <h2
            className={`${montserratExtraBold.className} m-0 section-first-column`}
          >
            Contact
          </h2>
        </div>
        <div>
          <h3 className="m-0">{translations.name}</h3>
          <ul className="contact-list">
            <li>
              <Image src={"/phone.png"} alt={"Phone"} width={24} height={24} />
              0730-500 244
            </li>
            <li>
              <Image src={"/mail.png"} alt={"Mail"} width={24} height={24} />
              liza.blomdahl@gmail.com
            </li>
            <li>
              <Link
                href={"https://www.linkedin.com/in/liza-blomdahl/"}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <Image
                  src={"/linkedin.png"}
                  alt={"Linkedin link"}
                  width={24}
                  height={24}
                />
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href={"https://github.com/okaziya"}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <Image
                  src={"/github.png"}
                  alt={"Github link"}
                  width={24}
                  height={24}
                />
                GitHub
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
