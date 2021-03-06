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
 * Initializes a new instance of the BackupSchedule class.
 * @constructor
 * Description of a backup schedule. Describes how often should be the backup
 * performed and what should be the retention policy.
 *
 * @member {number} frequencyInterval How often should be the backup executed
 * (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be
 * set to Day). Default value: 7 .
 *
 * @member {string} frequencyUnit The unit of time for how often should be the
 * backup executed (e.g. for weekly backup, this should be set to Day and
 * FrequencyInterval should be set to 7). Possible values include: 'Day',
 * 'Hour'. Default value: 'Day' .
 *
 * @member {boolean} keepAtLeastOneBackup True if the retention policy should
 * always keep at least one backup in the storage account, regardless how old
 * it is; false otherwise. Default value: true .
 *
 * @member {number} retentionPeriodInDays After how many days backups should be
 * deleted. Default value: 90 .
 *
 * @member {date} [startTime] When the schedule should start working.
 *
 * @member {date} [lastExecutionTime] Last time when this schedule was
 * triggered.
 *
 */
class BackupSchedule {
  constructor() {
  }

  /**
   * Defines the metadata of BackupSchedule
   *
   * @returns {object} metadata of BackupSchedule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackupSchedule',
      type: {
        name: 'Composite',
        className: 'BackupSchedule',
        modelProperties: {
          frequencyInterval: {
            required: true,
            serializedName: 'frequencyInterval',
            defaultValue: 7,
            type: {
              name: 'Number'
            }
          },
          frequencyUnit: {
            required: true,
            serializedName: 'frequencyUnit',
            defaultValue: 'Day',
            type: {
              name: 'Enum',
              allowedValues: [ 'Day', 'Hour' ]
            }
          },
          keepAtLeastOneBackup: {
            required: true,
            serializedName: 'keepAtLeastOneBackup',
            defaultValue: true,
            type: {
              name: 'Boolean'
            }
          },
          retentionPeriodInDays: {
            required: true,
            serializedName: 'retentionPeriodInDays',
            defaultValue: 90,
            type: {
              name: 'Number'
            }
          },
          startTime: {
            required: false,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          lastExecutionTime: {
            required: false,
            readOnly: true,
            serializedName: 'lastExecutionTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = BackupSchedule;
