// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None") {
    badge= "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  //creating license section with link to license information
  if(license != "None") {
    licenseSection += "## License\n"
    licenseSection += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n"
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  


const sections = ["title", "Installation", "instrucitons", "license"];

// add title
let markdown = "# " + data.title + "\n";

// add license badge
markdown += renderLicenseBadge(data.license) + "\n";

// add table of contents
markdown += "## Table of Contents\n";
for (let i=0; i<sections.length; i++) {
  if (! (sections[i] === "License" && data.license === "None")) {
    markdown += i+1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
  }
}
markdown += "\n";

// add title
markdown += "## " + sections[0] + "\n";
markdown += data.title + "\n";
// add description
markdown += "## " + sections[0] + "\n";
markdown +=data.description + "\n";
//add contents
markdown += "## " + sections[0] + "\n";
markdown +=data.contents + "\n";

// add installation
markdown += "## " + sections[1] + "\n";
markdown += data.installation + "\n";

// add usage
markdown += "## " + sections[2] + "\n";
markdown += data.usage + "\n";


// add license
markdown += renderLicenseSection(data.license) + "\n";

// add contributing
markdown += "## " + sections[0] + "\n";
markdown +=data.contributing + "\n";

// add tests
markdown += "## " + sections[0] + "\n";
markdown +=data.tests + "\n";

// add questions
markdown += "## " + sections[3] + "\n";
markdown += "You can find me [HERE](https://github.com/" + data.git + ") on Github\n";
markdown += "You can email me at " + data.email + " if you have any additional questions.\n"



return markdown;
}


module.exports = generateMarkdown;
