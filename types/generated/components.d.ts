import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonText: Schema.Attribute.String;
    buttonURL: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsItemContent extends Struct.ComponentSchema {
  collectionName: 'components_sections_item_contents';
  info: {
    displayName: 'item-content';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonURL: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsItemSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_item_sections';
  info: {
    displayName: 'item-section';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    item: Schema.Attribute.Component<'sections.item-content', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSection1 extends Struct.ComponentSchema {
  collectionName: 'components_sections_section1s';
  info: {
    displayName: 'section1';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonText: Schema.Attribute.String;
    buttonText_2: Schema.Attribute.String;
    buttonURL: Schema.Attribute.String;
    buttonURL_2: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSection2 extends Struct.ComponentSchema {
  collectionName: 'components_sections_section2s';
  info: {
    displayName: 'section2';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonText: Schema.Attribute.String;
    buttonText_2: Schema.Attribute.String;
    buttonURL: Schema.Attribute.String;
    buttonURL_2: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSections extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections';
  info: {
    displayName: 'sections';
  };
  attributes: {};
}

export interface SectionsTextCenter extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_centers';
  info: {
    displayName: 'text-center';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTextLeft extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_lefts';
  info: {
    displayName: 'text-left';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.hero': SectionsHero;
      'sections.item-content': SectionsItemContent;
      'sections.item-section': SectionsItemSection;
      'sections.section1': SectionsSection1;
      'sections.section2': SectionsSection2;
      'sections.sections': SectionsSections;
      'sections.text-center': SectionsTextCenter;
      'sections.text-left': SectionsTextLeft;
    }
  }
}
