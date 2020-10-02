
export interface SkillModel{
    id:number;
    name:string;
    icon:string;
    color:string;
    level:number;
    created_at:string;
    updated_at:string;
    skills_lists_id:number;
}

export interface SkillSectionModel{
    aprendiendo: SkillModel[];
    id:number;
    name:string;
    icon:string;
    created_at:string;
    updated_at:string;
    skills: SkillModel[]
}