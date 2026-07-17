import type { SchemaTypeDefinition } from 'sanity';
import { heroType } from '@/sanity/schemaTypes/heroType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType],
};
