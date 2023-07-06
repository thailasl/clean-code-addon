import * as vscode from 'vscode';
import axios from 'axios';
import config from './config';

async function getCodeSuggestion(codeSnippet: string): Promise<string> {
  const response = await axios.post(
    'https://api.openai.com/v1/engines/davinci-codex/completions',
    {
      prompt: codeSnippet,
      max_tokens: 100,
      temperature: 0.7,
      n: 1,
      stop: ['\n'],
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
    }
  );

  const suggestion = response.data.choices[0].text;
  return suggestion;
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('extension.getCodeSuggestion', async () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const codeSnippet = editor.document.getText();

      try {
        const suggestion = await getCodeSuggestion(codeSnippet);

        // Display the suggestion in a new editor tab
        const suggestionEditor = await vscode.workspace.openTextDocument({ content: suggestion });
        vscode.window.showTextDocument(suggestionEditor);
      } catch (error) {
        vscode.window.showErrorMessage('An error occurred while getting the code suggestion.');
        console.error(error);
      }
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
