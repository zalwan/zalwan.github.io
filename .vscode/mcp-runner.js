import { spawn } from 'node:child_process';

export function runMcp(pkg, args = []) {
	const isWindows = process.platform === 'win32';
	const command = isWindows ? 'cmd' : 'npx';
	const commandArgs = isWindows ? ['/c', 'npx', '-y', pkg, ...args] : ['-y', pkg, ...args];

	const child = spawn(command, commandArgs, {
		stdio: 'inherit',
		env: process.env,
		windowsHide: true
	});

	child.on('exit', (code, signal) => {
		if (signal) {
			process.kill(process.pid, signal);
		}

		process.exit(code ?? 0);
	});
}
