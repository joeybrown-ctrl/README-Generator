// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents

  \n* [Description](#description)
  \n* [Installation](#installation) 
  \n* [Usage](#usage) 
  \n* [License](#license) 
  \n* [Contribution](#contribution)
  \n* [Tests](#tests) 
  \n* [Questions](#questions)

  \n<hr>

  ## Description \n${data.description}
  <br>
  ## Installation \n${data.installation}
  <br>
  ## Usage \n${data.usage}
  <br>
  ## Contributing \n${data.contributing}
  <br>
  ## Tests \n${data.tests}
  <br>
  ## Licence \n${data.license}
  <br>
  ## Questions 
  \n* [email](#${data.email})
  \n* {githut](#${data.github})

`;

  //create logic for license choices:

  //   if (`${data.license.choices[0]} === true`) {
  //     generateMarkdown()
  //   } else if (`${data.license.choices[1]} === true`) {
  //     generateMarkdown()
  //   } else if (`${data.license.choices[2]} === true`) {
  //     generateMarkdown()
  // }

  //create logic for badges:

  module.exports = generateMarkdown;
}
