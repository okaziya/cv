import LanguageSwitcher from "./LanguageSwitcher";
import { getTranslations } from "../../lib/getTranslations";
import { Locale } from "../../types";
import Image from "next/image";
import Button from "../Button";
import { StyledHeader } from "./Header.styles";
import { CONTACT_INFO } from "../../config";
import { getImagePath } from "../../utils/imagePath";

export default function Header({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);

  return (
    <StyledHeader className="mx-auto d-flex justify-content-between">
      <div className="d-flex flex-column justify-content-between">
        <Image
          src={getImagePath("/glasses.png")}
          alt={translations.images.logoAlt}
          width={80}
          height={16}
          priority
          unoptimized
        />
        <h3 className="m-0">{translations.name}</h3>
      </div>
      <div className="d-flex">
        <LanguageSwitcher locale={locale} />
        <Button>{translations.downloadCv}</Button>
      </div>
    </StyledHeader>
  );
}
