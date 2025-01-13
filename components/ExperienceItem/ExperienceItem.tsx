import React from "react";
import { ExperienceItemArticle } from "./ExperienceItem.styles";

interface ExperienceItemProps {
  date: string;
  jobTitle: string;
  companyTitle: string;
  responsibilities: string[];
}

export default function ExperienceItem({
  date,
  jobTitle,
  companyTitle,
  responsibilities,
}: ExperienceItemProps) {
  return (
    <ExperienceItemArticle>
      <h3 className="m-0">{jobTitle}</h3>
      <h5 className="mb-0 mt-3">{date}</h5>
      <h5 className="mb-0 mt-3 company-title">{companyTitle}</h5>
      <ul className="mt-3">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </ExperienceItemArticle>
  );
}
