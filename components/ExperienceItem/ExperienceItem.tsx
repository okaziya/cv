import React from "react";
import { ExperienceItemArticle } from "./ExperienceItem.styles";
import ReactMarkdown from "react-markdown";
import ShowDetails from "../ShowDetails";

interface ExperienceItemProps {
  date: string;
  jobTitle: string;
  companyTitle: string;
  highlights: string;
  assignmentsText: string | null;
}

export default function ExperienceItem({
  date,
  jobTitle,
  companyTitle,
  assignmentsText,
  highlights,
}: ExperienceItemProps) {
  return (
    <ExperienceItemArticle>
      <h3 className="m-0">{jobTitle}</h3>
      <h5 className="mb-0 mt-3">{date}</h5>
      <h5 className="mb-0 mt-3 company-title">{companyTitle}</h5>
      <div className="mt-3">
        <ReactMarkdown>{highlights}</ReactMarkdown>
      </div>
      {assignmentsText && <ShowDetails assignmentsText={assignmentsText} />}
    </ExperienceItemArticle>
  );
}
