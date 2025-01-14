import React from "react";
import { montserratExtraBold } from "../../styles/fonts";
import { SkillList } from "./SkillCategory.styles";

interface SkillCategoryProps {
  title: string;
  skillList: string[];
}

export default function SkillCategory({
  title,
  skillList,
}: SkillCategoryProps) {
  return (
    <div className="col w-50">
      <h2 className={montserratExtraBold.className}> {title}</h2>
      <SkillList className="d-flex flex-wrap mt-5">
        {skillList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </SkillList>
    </div>
  );
}
