import * as vscode from 'vscode';
import * as mdItContainer from 'markdown-it-container';

export function activate(context: vscode.ExtensionContext) {
	// console.log('Congratulations, your extension "vscode-markdown-it-container" is now active!');

	let config = vscode.workspace.getConfiguration('vscode-markdown-it-container');
	// console.log(config);
	let containers = config.get('containers');
	// console.log(containers);

	return {
		extendMarkdownIt(md: any) {
			let mdRef = md;
			if (containers && (containers as string[]).length > 0) {
				(containers as string[]).forEach((container: string) => {
					mdRef.use(mdItContainer, container);
				});
			}
			return mdRef;
		}
	};
}

export function deactivate() { }
