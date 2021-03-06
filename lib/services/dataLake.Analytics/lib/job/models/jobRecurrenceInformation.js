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
 * Initializes a new instance of the JobRecurrenceInformation class.
 * @constructor
 * Recurrence job information for a specific recurrence.
 *
 * @member {uuid} [recurrenceId] the recurrence identifier (a GUID), unique per
 * activity/script, regardless of iterations. This is something to link
 * different occurrences of the same job together.
 *
 * @member {string} [recurrenceName] the recurrence name, user friendly name
 * for the correlation between jobs.
 *
 * @member {number} [numJobsFailed] the number of jobs in this recurrence that
 * have failed.
 *
 * @member {number} [numJobsCanceled] the number of jobs in this recurrence
 * that have been canceled.
 *
 * @member {number} [numJobsSucceeded] the number of jobs in this recurrence
 * that have succeeded.
 *
 * @member {number} [auHoursFailed] the number of job execution hours that
 * resulted in failed jobs.
 *
 * @member {number} [auHoursCanceled] the number of job execution hours that
 * resulted in canceled jobs.
 *
 * @member {number} [auHoursSucceeded] the number of job execution hours that
 * resulted in successful jobs.
 *
 * @member {date} [lastSubmitTime] the last time a job in this recurrence was
 * submitted.
 *
 */
class JobRecurrenceInformation {
  constructor() {
  }

  /**
   * Defines the metadata of JobRecurrenceInformation
   *
   * @returns {object} metadata of JobRecurrenceInformation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobRecurrenceInformation',
      type: {
        name: 'Composite',
        className: 'JobRecurrenceInformation',
        modelProperties: {
          recurrenceId: {
            required: false,
            readOnly: true,
            serializedName: 'recurrenceId',
            type: {
              name: 'String'
            }
          },
          recurrenceName: {
            required: false,
            readOnly: true,
            serializedName: 'recurrenceName',
            type: {
              name: 'String'
            }
          },
          numJobsFailed: {
            required: false,
            readOnly: true,
            serializedName: 'numJobsFailed',
            type: {
              name: 'Number'
            }
          },
          numJobsCanceled: {
            required: false,
            readOnly: true,
            serializedName: 'numJobsCanceled',
            type: {
              name: 'Number'
            }
          },
          numJobsSucceeded: {
            required: false,
            readOnly: true,
            serializedName: 'numJobsSucceeded',
            type: {
              name: 'Number'
            }
          },
          auHoursFailed: {
            required: false,
            readOnly: true,
            serializedName: 'auHoursFailed',
            type: {
              name: 'Number'
            }
          },
          auHoursCanceled: {
            required: false,
            readOnly: true,
            serializedName: 'auHoursCanceled',
            type: {
              name: 'Number'
            }
          },
          auHoursSucceeded: {
            required: false,
            readOnly: true,
            serializedName: 'auHoursSucceeded',
            type: {
              name: 'Number'
            }
          },
          lastSubmitTime: {
            required: false,
            readOnly: true,
            serializedName: 'lastSubmitTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = JobRecurrenceInformation;
