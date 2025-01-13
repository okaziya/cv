import React from "react";

import { getTranslations } from "../lib/getTranslations";

import Image from "next/image";
import Link from "next/link";
import { Locale } from "../types";

export default function ContactInformation({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

  return (
    <>
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
    </>
  );
}
