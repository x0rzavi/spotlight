/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * A file entry
 * @export
 * @interface FileEntry
 */
export interface FileEntry {
    /**
     *
     * @type {string}
     * @memberof FileEntry
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof FileEntry
     */
    path: string;
    /**
     *
     * @type {string}
     * @memberof FileEntry
     */
    type: FileEntryTypeEnum;
    /**
     *
     * @type {number}
     * @memberof FileEntry
     */
    size: number;
}

/**
 * @export
 */
export const FileEntryTypeEnum = {
    File: 'file',
    Folder: 'folder',
} as const;
export type FileEntryTypeEnum =
    typeof FileEntryTypeEnum[keyof typeof FileEntryTypeEnum];

/**
 * Check if a given object implements the FileEntry interface.
 */
export function instanceOfFileEntry(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && 'name' in value;
    isInstance = isInstance && 'path' in value;
    isInstance = isInstance && 'type' in value;
    isInstance = isInstance && 'size' in value;

    return isInstance;
}

export function FileEntryFromJSON(json: any): FileEntry {
    return FileEntryFromJSONTyped(json, false);
}

export function FileEntryFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): FileEntry {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: json['name'],
        path: json['path'],
        type: json['type'],
        size: json['size'],
    };
}

export function FileEntryToJSON(value?: FileEntry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        path: value.path,
        type: value.type,
        size: value.size,
    };
}