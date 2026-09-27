import { defineArrayMember, defineField, defineType } from "sanity";

export const article = defineType({
    title:"Article",
    name:"article",
    type:"document",
    fields:[
        defineField({
            name:"title",
            type:'string',
        }),
        defineField({
            name:'slug',
            type:'slug',
            options:{
                source:'title'
            }
        }),
        defineField({
            name:'author',
            type:'reference',
            to:{type:'author'},
        }),
        defineField({
            name:'catergories',
            type:'array',
            of:[defineArrayMember({type:'reference',to:{type:'catergory'}})]
        }),
        defineField({
            name:'publishedAt',
            type:'datetime',
        }),
        defineField({
            name:'body',
            type:'blockContent'
        })

    ]
})