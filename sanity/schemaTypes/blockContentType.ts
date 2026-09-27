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
                {title:"Normal",value:"normal"},
                {title:"Large",value:"lg"},
                {title:"Heading",value:"heading"},
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
                    },
                    //simple text input color
                    {
                        title:'Color',
                        type:'textColor'
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