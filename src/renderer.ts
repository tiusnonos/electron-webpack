import * as fs from 'fs';
import '@styles/renderer.scss';

document.body.addEventListener('click', () => {
    console.log('test');
    // tslint:disable-next-line: no-console
    console.log(getDirectoryFiles('D:/'));
});

const getDirectoryFiles = function (dirName: string): string[] {
    let files: string[] = [];
    files = fs.readdirSync(dirName);
    return files;
};
