/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ClientScriptForConnect class.
 * @constructor
 * Client script details for the file or folder restore.
 *
 * @member {string} [scriptContent] File content of the client script for file
 * or folder restore.
 *
 * @member {string} [scriptExtension] File extension of the client script for
 * the file or folder restore. Some examples of the extension are: .ps1 and
 * .sh.
 *
 * @member {string} [osType] The operating system platform ("Windows" or
 * "Linux") for which this file or folder restore client script works.
 *
 */
class ClientScriptForConnect {
  constructor() {
  }

  /**
   * Defines the metadata of ClientScriptForConnect
   *
   * @returns {object} metadata of ClientScriptForConnect
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ClientScriptForConnect',
      type: {
        name: 'Composite',
        className: 'ClientScriptForConnect',
        modelProperties: {
          scriptContent: {
            required: false,
            serializedName: 'scriptContent',
            type: {
              name: 'String'
            }
          },
          scriptExtension: {
            required: false,
            serializedName: 'scriptExtension',
            type: {
              name: 'String'
            }
          },
          osType: {
            required: false,
            serializedName: 'osType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ClientScriptForConnect;
