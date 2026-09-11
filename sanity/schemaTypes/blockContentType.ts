import { defineArrayMember, defineType } from "sanity";
import {PhotoIcon} from '@heroicons/react/20/solid';

export const blockContent = defineType({
    title:'Block Content',
    name:'blockContent',
    type:'array',
    of:[
        defineArrayMember({
            type:'block',
            /* for text style for content */
            styles:[
                {title:'Normal',value:'normal'},
                {title:'H1',value:'h1'},
                {title:'H2',value:'h2'},
                {title:'H3',value:'h3'},
                {title:'H4',value:'h4'},
                {title:'Quote',value:'blockquote'}
            ],
            /* for paragraph listing */
            lists:[
                {title:'Bullet',value:'bullet'}
            ],
            /* for decorator of text */
            marks:{    
                decorators:[
                    {title:'Strong',value:'strong'},
                    {title:'Emphasis',value:'em'},
                ],
                annotations:[
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                        {
                            title: 'URL',
                            name: 'href',
                            type: 'url',
                        },
                        ],
                    }
                ]
            }
            
        }),
        defineArrayMember({
            type:'image',
            icon:PhotoIcon,
            options:{
                hotspot:true
            }
        })
    ]
})