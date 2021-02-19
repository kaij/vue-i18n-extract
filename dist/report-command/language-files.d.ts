/// <reference types="dot-object" />
import { I18NLanguage, I18NItem } from '../types';
export declare function writeMissingToLanguage(resolvedLanguageFiles: string, missingKeys: I18NItem[], dot?: DotObject.Dot): void;
export declare function parseLanguageFiles(languageFilesPath: string, dot?: DotObject.Dot): I18NLanguage;
