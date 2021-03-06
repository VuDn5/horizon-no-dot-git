/**
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

(function() {
  'use strict';

  /**
  * @ngdoc overview
  * @ngname horizon.app.core.network_qos.actions
  *
  * @description
  * Provides all of the actions for network_qos.
  */

  angular.module('horizon.app.core.network_qos.actions', [
    'horizon.framework.conf',
    'horizon.app.core.network_qos'
  ])
  .run(registerQosActions);

  registerQosActions.$inject = [
    'horizon.framework.conf.resource-type-registry.service',
    'horizon.app.core.network_qos.actions.create.service',
    'horizon.app.core.network_qos.actions.delete.service',
    'horizon.app.core.network_qos.resourceType'
  ];

  function registerQosActions(
    registry,
    createService,
    deleteService,
    qosResourceTypeCode
  ) {
    var qosResourceType = registry.getResourceType(qosResourceTypeCode);

    qosResourceType.globalActions
      .append({
        id: 'createPolicyAction',
        service: createService,
        template: {
          text: gettext('Create Policy'),
          type: 'create'
        }
      }
    );

    qosResourceType.itemActions
      .append({
        id: 'deletePolicyAction',
        service: deleteService,
        template: {
          text: gettext('Delete Policy'),
          type: 'delete'
        }
      });

    qosResourceType.batchActions
      .append({
        id: 'batchDeletePolicyAction',
        service: deleteService,
        template: {
          text: gettext('Delete Policies'),
          type: 'delete-selected'
        }
      });
  }

})();
