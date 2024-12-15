import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { postType } from './postType'
import { authorType } from './authorType'
import { Product } from './product'
import { Category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, authorType, Product, Category],
}
