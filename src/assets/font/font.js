import { createGlobalStyle } from 'styled-components';

import PoppinsExtraBold from './Poppins-ExtraBold.woff';
import PoppinsExtraBold2 from './Poppins-ExtraBold.woff2';

export default createGlobalStyle`
// @font-face {
//   font-family: 'Roboto';
//   src: url('Roboto-Black.woff2') format('woff2'),
//     url('Roboto-Black.woff') format('woff');
//   font-weight: 900;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Roboto';
//   src: url('Roboto-BlackItalic.woff2') format('woff2'),
//     url('Roboto-BlackItalic.woff') format('woff');
//   font-weight: 900;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Roboto';
//   src: url('Roboto-Italic.woff2') format('woff2'),
//     url('Roboto-Italic.woff') format('woff');
//   font-weight: normal;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Roboto';
//   src: url('Roboto-Medium.woff2') format('woff2'),
//     url('Roboto-Medium.woff') format('woff');
//   font-weight: 500;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Roboto';
//   src: url('Roboto-MediumItalic.woff2') format('woff2'),
//     url('Roboto-MediumItalic.woff') format('woff');
//   font-weight: 500;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Roboto';
//   src: url('Roboto-BoldItalic.woff2') format('woff2'),
//     url('Roboto-BoldItalic.woff') format('woff');
//   font-weight: bold;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Roboto';
//   src: url('Roboto-LightItalic.woff2') format('woff2'),
//     url('Roboto-LightItalic.woff') format('woff');
//   font-weight: 300;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Roboto';
//   src: url('Roboto-Light.woff2') format('woff2'),
//     url('Roboto-Light.woff') format('woff');
//   font-weight: 300;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Roboto';
//   src: url('Roboto-Bold.woff2') format('woff2'),
//     url('Roboto-Bold.woff') format('woff');
//   font-weight: bold;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Roboto';
//   src: url('Roboto-ThinItalic.woff2') format('woff2'),
//     url('Roboto-ThinItalic.woff') format('woff');
//   font-weight: 100;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Roboto';
//   src: url('Roboto-Thin.woff2') format('woff2'),
//     url('Roboto-Thin.woff') format('woff');
//   font-weight: 100;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Roboto';
//   src: url('Roboto-Regular.woff2') format('woff2'),
//     url('Roboto-Regular.woff') format('woff');
//   font-weight: normal;
//   font-style: normal;
//   font-display: swap;
// }
// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-BlackItalic.woff2') format('woff2'),
//     url('Poppins-BlackItalic.woff') format('woff');
//   font-weight: 900;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-Black.woff2') format('woff2'),
//     url('Poppins-Black.woff') format('woff');
//   font-weight: 900;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-Bold.woff2') format('woff2'),
//     url('Poppins-Bold.woff') format('woff');
//   font-weight: bold;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-ExtraLightItalic.woff2') format('woff2'),
//     url('Poppins-ExtraLightItalic.woff') format('woff');
//   font-weight: 200;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-Italic.woff2') format('woff2'),
//     url('Poppins-Italic.woff') format('woff');
//   font-weight: normal;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-LightItalic.woff2') format('woff2'),
//     url('Poppins-LightItalic.woff') format('woff');
//   font-weight: 300;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-SemiBold.woff2') format('woff2'),
//     url('Poppins-SemiBold.woff') format('woff');
//   font-weight: 600;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-Light.woff2') format('woff2'),
//     url('Poppins-Light.woff') format('woff');
//   font-weight: 300;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-ExtraLight.woff2') format('woff2'),
//     url('Poppins-ExtraLight.woff') format('woff');
//   font-weight: 200;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-BoldItalic.woff2') format('woff2'),
//     url('Poppins-BoldItalic.woff') format('woff');
//   font-weight: bold;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-Thin.woff2') format('woff2'),
//     url('Poppins-Thin.woff') format('woff');
//   font-weight: 100;
//   font-style: normal;
//   font-display: swap;
// }

@font-face {
  font-family: 'Poppins';
  src: local('Poppins')
  url(${PoppinsExtraBold2}) format('woff2'),
  url(${PoppinsExtraBold}) format('woff');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-Regular.woff2') format('woff2'),
//     url('Poppins-Regular.woff') format('woff');
//   font-weight: normal;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-Medium.woff2') format('woff2'),
//     url('Poppins-Medium.woff') format('woff');
//   font-weight: 500;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-SemiBoldItalic.woff2') format('woff2'),
//     url('Poppins-SemiBoldItalic.woff') format('woff');
//   font-weight: 600;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-ThinItalic.woff2') format('woff2'),
//     url('Poppins-ThinItalic.woff') format('woff');
//   font-weight: 100;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-ExtraBoldItalic.woff2') format('woff2'),
//     url('Poppins-ExtraBoldItalic.woff') format('woff');
//   font-weight: 800;
//   font-style: italic;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Poppins';
//   src: url('Poppins-MediumItalic.woff2') format('woff2'),
//     url('Poppins-MediumItalic.woff') format('woff');
//   font-weight: 500;
//   font-style: italic;
//   font-display: swap;
// }
`;
