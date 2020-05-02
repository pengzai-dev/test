const { spawn } = require('child_process');
try {
    const ls = spawn('export', ['https_proxy="http://127.0.0.1:8001"']);
    ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
        console.log(`子进程退出，使用退出码 ${code}`);
    });
} catch (error) {
    console.log(1)
}