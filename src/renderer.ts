import * as fs from 'fs';

document.body.addEventListener('click', () => {
    // tslint:disable-next-line: no-console
    console.log(getDirectoryFiles('D:/'));
});

const getDirectoryFiles = function (dirName: string): string[] {
    let files: string[] = [];
    files = fs.readdirSync(dirName);
    return files;
};
