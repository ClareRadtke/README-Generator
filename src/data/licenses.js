const licenses = [
  {
    name: "MIT",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "https://opensource.org/licenses/MIT",
  },
  {
    name: "ISC",
    badge:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    link: "https://opensource.org/licenses/ISC",
  },
  {
    name: "Academic Free v3.0",
    link: "https://opensource.org/licenses/AFL-3.0",
  },
  {
    name: "Apache 2.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "https://opensource.org/licenses/Apache-2.0",
  },
  {
    name: "Artistic 2.0",
    badge:
      "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    link: "https://opensource.org/licenses/Artistic-2.0",
  },
  {
    name: "Boost Software 1.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    link: "https://www.boost.org/LICENSE_1_0.txt",
  },
  {
    name: "BSD 2-clause 'Simplified'",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    link: "https://opensource.org/licenses/BSD-2-Clause",
  },
  {
    name: "BSD 3-clause 'New' or 'Revised'",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    link: "https://opensource.org/licenses/BSD-3-Clause",
  },
  {
    name: "Creative Commons Zero v1.0 Universal",
    badge:
      "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
    link: "http://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    name: "Creative Commons Attribution 4.0",
    badge:
      "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)",
    link: "https://creativecommons.org/licenses/by/4.0/",
  },
  {
    name: "Creative Commons Attribution Share Alike 4.0",
    badge:
      "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)",
    link: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    name: "Do What The F*ck You Want To Public",
    badge:
      "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
    link: "http://www.wtfpl.net/about/",
  },
  {
    name: "Educational Community v2.0",
    link: "https://opensource.org/licenses/ECL-2.0",
  },
  {
    name: "Eclipse Public 1.0",
    badge:
      "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    link: "https://opensource.org/licenses/EPL-1.0",
  },
  {
    name: "Eclipse Public 2.0",
    link: "https://opensource.org/licenses/EPL-2.0",
  },
  {
    name: "European Union Public 1.2",
    link: "https://opensource.org/licenses/EUPL-1.2",
  },

  {
    name: "GNU General Public v2.0",
    badge:
      "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  },
  {
    name: "GNU General Public v3.0",
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    link: "https://www.gnu.org/licenses/gpl-3.0",
  },
  {
    name: "GNU Lesser General Public v2.1",
    link: "https://opensource.org/licenses/LGPL-2.1",
  },
  {
    name: "GNU Lesser General Public v3.0",
    badge:
      "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    link: "https://www.gnu.org/licenses/lgpl-3.0",
  },
  {
    name: "LaTeX Project Public v1.3c",
    link: "https://opensource.org/licenses/LPPL-1.3c",
  },
  { name: "Microsoft Public", link: "https://opensource.org/licenses/MS-PL" },
  {
    name: "Mozilla Public 2.0",
    badge:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    link: "https://opensource.org/licenses/MPL-2.0",
  },
  {
    name: "Open Software 3.0",
    link: "https://opensource.org/licenses/OSL-3.0",
  },
  { name: "PostgreSQL", link: "https://opensource.org/licenses/PostgreSQL" },
  {
    name: "SIL Open Font 1.1",
    badge:
      "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
    link: "https://opensource.org/licenses/OFL-1.1",
  },
  {
    name: "University of Illinois/NCSA Open Source",
    link: "https://opensource.org/licenses/NCSA",
  },
  {
    name: "The Unlicense",
    badge:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    link: "http://unlicense.org/",
  },
  {
    name: "zLib",
    badge:
      "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
    link: "https://opensource.org/licenses/Zlib",
  },
  {
    name: "no license",
  },
];

module.exports.licenses = licenses;
