export const Product = {
    name: "Product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            // validation: (rule) => rule.required()  // No need for ValidationRule import
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
            },
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
            options: {
                list: [
                    { title: 'Male', value: 'Male' },
                    { title: 'Female', value: 'Female' }
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
            name: "Brand",
            title: "Brand",
            type: "reference",
            to: [{ type: 'Brand' }]
        },
        {
            name: "Category",
            title: "Category",
            type: "reference",
            to: [{ type: 'category' }]
        },
        {
            name: "Subcategory",
            title: "Subcategory",
            type: "reference",
            to: [{ type: "Subcategory" }]
        },
        {
            name: "type",
            title: "Type",
            type: "string",
            options: {
                list: [
                    { title: 'Sale', value: 'Sale' },
                    { title: 'New Season', value: 'New Season' }
                ]
            }
        },
        {
            name: "style",
            title: "Style",
            type: "string",
            options: {
                list: [
                    { title: 'Oversized', value: 'Oversized' },
                    { title: 'Regular', value: 'Regular' },
                    { title: 'Relaxed', value: 'Relaxed' },
                    { title: 'Wide Leg', value: 'Wide Leg' },
                    { title: 'Other', value: 'Other' },
                    { title: 'Flat', value: 'Flat' },
                    { title: 'Loose', value: 'Loose' },
                    { title: 'Body Fit', value: 'Body Fit' },
                ]
            }
        },
        {
            name: "color",
            title: "Color",
            type: "string",
            options: {
                list: [
                    { title: 'Red', value: 'Red' },
                    { title: 'Blue', value: 'Blue' },
                    { title: 'Green', value: 'Green' },
                    { title: 'Black', value: 'Black' },
                    { title: 'White', value: 'White' },
                    { title: 'Grey', value: 'Grey' },
                    { title: 'Pink', value: 'Pink' },
                    { title: 'Brown', value: 'Brown' },
                ]
            }
        },
        {
            name: "size",
            title: "Size",
            type: "string",
            options: {
                list: [
                    { title: 'Small', value: 'Small' },
                    { title: 'Medium', value: 'Medium' },
                    { title: 'Large', value: 'Large' },
                    { title: 'XL', value: 'XL' },
                    { title: '2XL', value: '2XL' },
                    { title: 'No Size', value: 'No Size' }
                ]
            }
        }
    ]
};
