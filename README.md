# JavaScript with Node JS Template

#### By Scott Bergler

## Description
This template will create the directories and basic files needed to start a web project in JavaScript. I adapted it from Sayed I. Hashimi's [article](https://blogs.msdn.microsoft.com/dotnet/2017/04/02/how-to-create-your-own-templates-for-dotnet-new/). The directory structure and file contents are from Epicodus JavaScript curriculum and may not be suited for all projects.

[Here](https://github.com/dotnet/templating/wiki/Reference-for-template.json) is another good source on using dotnet and JSON to create templates.

The project files generated will have starter content as outlined in the Epicodus JavaScript course. The template will give relevant namespaces and paths for your project (i.e. beeBoop will be replaced everywhere with the name you give to your project - YourProjectName).

The directory/file structure created is:

```
YourProjectName
├── .gitignore
├── .eslintrc
├── package.json
├── webpack.config.js
├── README.md
│
└── src
    ├── index.html
    ├── main.js
    ├── beeBoop.js
    └── styles.css
```

### Specifications:
##### Spec 1: Do a thing:
- [ ] **Expect:**  
Input: some input;  
Output: some output;

## Setup/Installation Requirements
Clone the code from [GitHub](https://github.com/skillitzimberg/beeBoop).

While following this set up guide, replace both the brackets - [] - and the content between them with the information relevant to your situation. This is just an example guide.

Install the template using the command line interface (cli)/terminal:
* dotnet new --install [ /Users/Your/Path/Here ]/beeBoop

For example: When cloned to the Epicodus computer Desktop, the path would be /Users/Guest/Desktop/beeBoop.
The above command would then be:
* dotnet new --install /Users/Guest/Desktop/beeBoop

Navigate to the directory that you want your project to be in (i.e. Desktop, Documents, or wherever you keep your projects).

Run the this command in the cli/terminal:
* dotnet new beeboop -n [ YourProjectName ]

For example: If your project is called Banana the command would be:
* dotnet new beeboop -n Banana

Remove .git directory: run this command in YourProjectName directory.
* rm -rf .git

Be sure to git init again for a fresh start!

Open the directory in your text editor. Open the .template.config/template.json file and change the author name to your own. Read the article mentioned above for details on this file and how this template was created.

## Known Bugs

## Support and contact details
Scott Bergler :: commandinghands@gmail.com

## Technologies Used

HTML, CSS, Json, C#.

### License

Licensed under the MIT license.

Copyright (c) 2018 ** Scott Bergler **
