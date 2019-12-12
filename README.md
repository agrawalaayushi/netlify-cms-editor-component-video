# netlify-cms-editor-component-video

This package provide a Video component for [Netlify CMS](https://www.netlifycms.org/) editor widget ready to drop in your Netlify CMS projects.
[video-shortcode] plugin is used for video shortcode processing.
    
---

## Installation

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install netlify-cms-editor-component-video gatsby-remark-video-shortcode --save

```

---

## Requirements

1. Gatsby version >=2.17.15
2. Gatsby Transformer Remark Plugin >=2.6.36

````

---

## Usage

Add to your CMS.js inside Netlify CMS project

```js
import pill from 'netlify-cms-editor-component-video';

CMS.registerEditorComponent(video);
````

### Configuration

```js
// In your gatsby-config.js
plugins: [
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-video-shortcode`
        }
      ]
    }
  }
];
```
