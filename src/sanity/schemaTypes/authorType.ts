// import { UserIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

// Ensure UserIcon is treated as a React component
export const authorType = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    // icon: UserIcon,  // Use the icon directly from the @sanity/icons package
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
            },
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'bio',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
})
