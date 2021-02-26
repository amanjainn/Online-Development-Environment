import {Command, option} from 'commander';
import {serve} from 'local-api';
import path from 'path';

export const serveCommand = new Command().command('serve [filename] ').description('Open a file for editing').option('-p,--port <number>','port to run server on','4005').action((filename='pad.js',options:{port:string})=>{
    const dir=path.join(process.cwd(),path.dirname(filename));
    serve(parseInt(options.port),filename,dir);
})