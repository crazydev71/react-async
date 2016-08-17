/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactHostOperationHistoryHook
 */

'use strict';

var history = [];

var ReactHostOperationHistoryHook = {
  onHostOperation(debugID, type, payload) {
    history.push({
      instanceID: debugID,
      type,
      payload,
    });
  },

  clearHistory() {
    if (ReactHostOperationHistoryHook._preventClearing) {
      // Should only be used for tests.
      return;
    }

    history = [];
  },

  getHistory() {
    return history;
  },
};

module.exports = ReactHostOperationHistoryHook;
