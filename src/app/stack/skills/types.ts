export type ISkillSection = {
  id: string;
  title: string;
  skills: Array<ISkills>;
}

export type ISkills = {
  title: string;
  description: string;
}
