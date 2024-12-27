import { type SchemaTypeDefinition } from 'sanity'

// import { blockContentType } from './blockContentType'
// import { postType } from './postType'
// import { authorType } from './authorType'
import { Product } from './product'
import { Category } from './category'
import { SubCategory } from './Subcategory'
import { Brand } from './brand'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product, Category, SubCategory, Brand],
}
