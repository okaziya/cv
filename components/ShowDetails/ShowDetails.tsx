"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { AccordionWrapper, ArrowIcon, ToggleButton, Details } from "./ShowDetails.styles";
import { useLocale } from "../../context/LocaleContext";
import { getTranslation } from "../../lib/getTranslation";
import ReactMarkdown from "react-markdown";

interface ShowDetailsProps {
  assignmentsText: string;
}

const ShowDetails = ({ assignmentsText }: ShowDetailsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { locale } = useLocale();

  const translations = getTranslation(locale);

  return (
    <AccordionWrapper>
      <ToggleButton onClick={() => setIsExpanded(!isExpanded)} className="px-0">
        <ArrowIcon isExpanded={isExpanded}>
          {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </ArrowIcon>
        {translations.showDetails}
      </ToggleButton>
      <Details isExpanded={isExpanded}>
        <div>
          <ReactMarkdown>{assignmentsText}</ReactMarkdown>
        </div>
      </Details>
    </AccordionWrapper>
  );
};

export default ShowDetails;
