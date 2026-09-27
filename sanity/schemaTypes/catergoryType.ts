import { defineField, defineType } from "sanity";

export const catergory = defineType({
    title:"Catergory",
    name:'catergory',
    type:"document",
    fields:[
        defineField({
            name:"title",
            type:"string",
        }),
        defineField({
            name:"slug",
            type:"slug",
            options:{
                source:'title',
            }
        }),
        defineField({
            name:"description",
            type:"text",
        })
        
    ]
})
