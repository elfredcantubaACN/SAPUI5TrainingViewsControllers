sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/routing/History"
],/**
* @param {typeof sap.ui.core.mvc.Controller} Controller
*/
function (Controller, MessageToast, History) {
    "use strict";

    return Controller.extend("com.training.exer1cantuba.controller.ReviewPage", {
        onInit() {
        },
        onPressBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();
            var oRouter = this.getOwnerComponent().getRouter();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                oRouter.navTo("RouteMainView", {}, true);
            }
        }
    });
});