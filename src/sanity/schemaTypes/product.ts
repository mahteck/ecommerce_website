import { list } from "postcss";
import { off, title } from "process";
import { validation } from "sanity";

export const Product = {
    name: "Product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule: any) => rule.required()
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "price",
            title: "Price",
            type: "number"
        },
        {
            name: "image",
            title: "Image",
            type: "image"
        },
        {
            name: "gender",
            title: "Gender",
            type: "string",
            option: {
                list: [
                    { title: 'male', value: 'male' },
                    { title: 'female', value: 'female' }
                ]
            }
        },
        {
            name: "tags",
            title: 'Tags',
            type: "array",
            of: [{ type: 'string' }]
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: 'category' }]
        }
    ]
}