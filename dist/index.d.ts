/// <reference types="dot-object" />
/// <reference types="node" />
import * as report from './report-command';
export * from './types';
export * from './report-command';
declare const _default: {
    createI18NReport(vueFiles: string, languageFiles: string, command: import("./types").ReportOptions, dot?: DotObject.Dot): import("./types").I18NReport;
    reportCommand(command: import("./types").ReportOptions): Promise<void>;
    readVueFiles(src: string): import("./types").SimpleFile[];
    parseVueFiles(vueFilesPath: string): import("./types").I18NItem[];
    writeMissingToLanguage(resolvedLanguageFiles: string, missingKeys: import("./types").I18NItem[], dot?: DotObject.Dot): void;
    parseLanguageFiles(languageFilesPath: string, dot?: DotObject.Dot): import("./types").I18NLanguage;
    extractI18NReport(parsedVueFiles: import("./types").I18NItem[], parsedLanguageFiles: import("./types").I18NLanguage, reportType?: report.VueI18NExtractReportTypes): import("./types").I18NReport;
    writeReportToFile(report: import("./types").I18NReport, writePath: string): Promise<void | NodeJS.ErrnoException>;
    VueI18NExtractReportTypes: typeof report.VueI18NExtractReportTypes;
};
export default _default;
