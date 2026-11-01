type TechStack = {
    id:number,
    tech:string,
}

const mainTech:TechStack[] = [
    {
        id:1,
        tech:"Typescript",
    },
    {
        id:2,
        tech:"React",
    },
    {
        id:3,
        tech:"Next-js",
    },
    {
        id:4,
        tech:"Go"
    }
]

const secondaryTech:TechStack[] = [
    {
        id:1,
        tech:"Django",
    },
    {
        id:2,
        tech:"Postgres",
    },
    {
        id:3,
        tech:"Docker",
    },{
        id:4,
        tech:"Supabase",
    }
]

export {mainTech,secondaryTech};