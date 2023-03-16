//path 모듈
let path = require('path');

//디렉터리 이름 합치기
let directories = ["users", "mike", "docs"];
let docsDirectory = directories.join(path.sep);
console.log('문서 디렉터리 : %s', docsDirectory);

//디렉터리와 파일 이름 합치기
let curPath = path.join('/Users/mike', 'notepad.exe');
console.log('파일패스 : %s', curPath);