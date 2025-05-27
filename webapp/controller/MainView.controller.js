sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],/**
* @param {typeof sap.ui.core.mvc.Controller} Controller
*/
function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.training.exer1cantuba.controller.MainView", {
        onInit() {
        },
        onAddItem: function (){
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var sMsg = oTextBundle.getText("addButtonMsg");
                this.fnDisplayMsg(sMsg);
            },

        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");
            var oCreditLabel = this.getView().byId("idLblCreditCard");
            var oCreditInput = this.getView().byId("idInputCreditCard");
            var sSelectedText = oEvent.getParameter("selectedItem").getProperty("text");

            if (sSelectedKey === "GCASH"){
                // show the mobile field
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
                oCreditLabel.setVisible(false);
                oCreditInput.setVisible(false);
            } 
            else if (sSelectedKey === "CC"){
                //show credit card field
                oCreditLabel.setVisible(true);
                oCreditInput.setVisible(true);
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
            } else {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
                oCreditLabel.setVisible(false);
                oCreditInput.setVisible(false);
            }
            //Message Toast output
            this.fnDisplayMsg(sSelectedText);
        },
        onPressCheckout: function (){
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();
            var oInputLNameValue = this.getView().byId("idInptLName").getValue();
            // Check if first name is blank
            if (oInputFNameValue === "" || oInputLNameValue === ""){
                sap.m.MessageToast.show("Required Field is blank"); 
            }
        },

        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },

    });
});