import debug, { IDebugger } from 'debug';

const createDebugLog =
    (appName: string) =>
    (logInfo: string): IDebugger =>
        debug(`${appName}:${logInfo}`);

export default createDebugLog('printshopserver');
