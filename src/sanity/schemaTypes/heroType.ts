import { defineField, defineType } from '@sanity/types';

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the hero section.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      validation: Rule => Rule.required().max(1000),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      validation: Rule => Rule.required(),
    }),
  ],
});
