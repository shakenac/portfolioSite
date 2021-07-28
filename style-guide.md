# Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Black: #343434
- Gray: #f5f5f5
- White: #ffffff

### Secondary

- Orange: #f7d891
- Light Cream: #f8f6f0
- Dark Cream: #f2f0e7


## Typography

### Font Families

- Family [Fira Sans](https://fonts.google.com/specimen/Fira+Sans?query=fira)
- Weights: 300, 400, 500, 600, 700

- Family [Source Code Pro](https://fonts.google.com/specimen/Source+Code+Pro?query=source)
- Weights: 400, 500, 600, 700

### Character Styles

- h1: Fira Sans, 50px, 400, #343434
- h2: Source Code Pro , 16px, 500, #ffffff
- h3: Fira Sans, 18px, 600, #343434
- h4: Fira Sans, 18pt, 400, #ffffff
- p: Fira Sans, 12pt, 400, #343434 or #ffffff

- Nav Links: Source Code Pro, 12pt, (Hover & Active: 700)

- Buttons: Source Code Pro, 16pt, 600, #343434 (Hover: 700, #ffffff)

- Header & Subheader Underline Drop Shadow (make adjustments):
   className > a {
      display: inline-block;
      position: relative;
      padding: 0;
      font-style: normal;
      box-shadow: inset 0 -6px 0px #f7d891;
      color: inherit;
   }


## Portfolio Image Thumbnails

- Browser thumbnail:
   .media-box.has-browser-frame {
      padding: 30px 0 0 0;
      border-radius: 8px 8px 0 0;
      background: #ffffff;
   }

   //browser thumbnail shadow (make adjustments):
      .media-box.has-shadow {
         box-shadow: 0 0 28px rgb(30 30 30 / 20%);
      }

   //browser thumbnail menu dots:
      .media-box.has-browser-frame:after {
         content: '···';
         font-family: "Times New Roman", Times, serif;
         letter-spacing: -6px;
         font-weight: 700;
         color: rgba(0, 0, 0, 0.1);
         position: absolute;
         line-height: 1;
         top: -11px;
         left: 12px;
         font-size: 54px;
      }


   //media-box transition:
      .media-box {
         position: relative;
         transition: all 0.2s ease-out;
      }

   // media-box image (inside the browser-frame):
      .media-box img {
         display: block;
         width: 100%;
      }


## Resources/References

- https://themes.pixelwars.org/unrovr/demo-01/#/about-me
- https://themes.pixelwars.org/unrovr/
- https://themes.pixelwars.org/life/portfolio-default/
