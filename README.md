# clean-code-addon README

Clean Code Addon
This extension will help you keep your code Clean using Clean Code rules.

## Installation

1. Open Visual Studio Code.
2. Navigate to the Extensions view.
3. Search for "${extensionName}".
4. Click "Install" to install the extension.
5. Once installed, restart Visual Studio Code.

## How to Use

1. Open Visual Studio Code.
2. Open a file with the desired programming language.
3. Trigger the action that activates the extension's functionality (e.g., use a keyboard shortcut or access it from the context menu).
4. The extension will perform the intended action, such as providing code suggestions or performing code transformations.
5. Review the result and enjoy the benefits of the extension!

## Configuration

Describe any additional configuration options supported by the extension and how users can customize them.

Example:
To customize the extension, you can adjust the following settings in Visual Studio Code's \`settings.json\` file:

\`\`\`json
"extensionName.option1": true,
"extensionName.option2": "value"
\`\`\`

## Support

If you encounter any issues, have questions, or would like to provide feedback, please feel free to open an issue in this [GitHub repository](${repositoryLink}).

## Contribution

Contributions are welcome! If you'd like to contribute improvements or fixes to the extension, please follow these steps:

1. Fork this repository.
2. Create a branch for your contribution: \`git checkout -b my-contribution\`.
3. Make the desired changes.
4. Commit your changes: \`git commit -m 'My contribution'\`.
5. Push the branch: \`git push origin my-contribution\`.
6. Open a pull request in the original repository.

## License

Include the license you want to use for your extension.

Example:
This project is licensed under the [MIT License](LICENSE). See the LICENSE file for more details.

## Acknowledgments

Thank any individuals, projects, or resources you used or were inspired by while developing your extension.

## Author

Thaila Lemes, Gisleine Souza e Erica Silva

## Notes

Include any additional notes or relevant information you'd like to share about the extension.
`;
}

// Usage example
const extensionName = 'Clean Code Addon';
const repositoryLink = 'https://github.com/yourusername/your-repo';
const readmeContent = generateReadme(extensionName, repositoryLink);

console.log(readmeContent);

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
