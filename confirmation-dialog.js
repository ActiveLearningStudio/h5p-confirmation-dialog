/*global H5P*/
H5P.ConfirmationDialog = (function (EventDispatcher) {
  "use strict";
  function ConfirmationDialog() {
    EventDispatcher.call(this);
    var self = this;

    // Create outer popup
    var popup = document.createElement('div');
    popup.classList.add('h5p-confirmation-dialog-popup');

    // Popup symbol
    var symbol = document.createElement('div');
    symbol.classList.add('h5p-confirmation-dialog-symbol');

    // Popup text
    var text = document.createElement('div');
    text.classList.add('h5p-confirmation-dialog-text');

    // Popup buttons
    var buttons = document.createElement('div');
    buttons.classList.add('h5p-confirmation-dialog-buttons');

    // Cancel button
    var cancelButton = document.createElement('button');
    cancelButton.classList.add('h5p-confirmation-dialog-button',
      'h5p-confirmation-dialog-cancel-button');
    cancelButton.onclick = function () {
      self.hide();
      self.trigger('canceled');
    };

    // Confirm button
    var confirmButton = document.createElement('button');
    confirmButton.classList.add('h5p-confirmation-dialog-button',
      'h5p-confirmation-dialog-confirm-button');
    confirmButton.onclick = function () {
      self.hide();
      self.trigger('confirmed');
    };

    this.appendTo = function ($wrapper) {
      $wrapper.get(0).appendChild(popup);
    };

    this.show = function () {
      popup.classList.remove('hidden');
    };

    this.hide = function () {
      popup.classList.add('hidden');
    };
  }

  ConfirmationDialog.prototype = Object.create(EventDispatcher.prototype);
  ConfirmationDialog.prototype.constructor = ConfirmationDialog;

  return ConfirmationDialog;

}(H5P.EventDispatcher));
