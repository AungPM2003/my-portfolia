import { defineField, defineType } from "sanity";

export const author = defineType({
    title:'Author',
    name:'author',
    type:"document",
    fields:[
        defineField({
            title:'Name',
            name:'name',
            type:'string'
        }),
        defineField({
            title:'Bio',
            name:'bio',
            type:'text',
        })
    ]
})