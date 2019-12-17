# netlify-cms-editor-component-video

This package provide a Video component for [Netlify CMS](https://www.netlifycms.org/) editor widget ready to drop in your Netlify CMS projects.
[Video shortcode](https://github.com/agrawalaayushi/gatsby-remark-video-shortcode) plugin is used for video shortcode processing in markdown.

---

## Installation

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install netlify-cms-editor-component-video gatsby-remark-video-shortcode

```

---

## Requirements

1. Gatsby version >=2.17.15
2. Gatsby Transformer Remark Plugin >=2.6.36
3. Gatsby plugin  gatsby-remark-video-shortcode

## Usage

Add to your CMS.js inside Netlify CMS project

```js
import video from "netlify-cms-editor-component-video"

CMS.registerEditorComponent(video)
```

### Configuration

In your gatsby-config.js

```js
plugins: [
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
]
```
