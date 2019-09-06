# webdriverio-test

## To add debug step-by-step possibility in VS code:
1. open ```launch.js``` file (in ```.vscode```)
2. change file content (change the paths accordingly) to
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "WebdriverIO",
            "env": {},
            "args": [
                "config/wdio.conf.js",
                "--spec",
                "${file}",
            ],
            "cwd": "${workspaceFolder}",
            "autoAttachChildProcesses": true,
            "program": "${workspaceRoot}/node_modules/@wdio/cli/bin/wdio.js",
            "console": "integratedTerminal"
        }
    ]
}
```
3. in ```wdio.conf.js``` add 
```
exports.config = {
		...,
    debug: true,
		...
}
```
4. enjoy!
