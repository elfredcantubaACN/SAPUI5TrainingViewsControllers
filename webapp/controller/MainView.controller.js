sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],/**
* @param {typeof sap.ui.core.mvc.Controller} Controller
*/
function (Controller, MessageToast) {


    return Controller.extend("com.training.exer1cantuba.controller.MainView", {
        onInit() {
        },
        onAddItem: function (){
                // Comment this code for now
                // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                // var sMsg = oTextBundle.getText("addButtonMsg");
                // this.fnDisplayMsg(sMsg);

                // Instantiate the fragment

                // create dialog lazily
                if (!this.oDialog) {
                    // By using loadFragment, we are adding the fragment as a dependent to the View
                    // By doing so, we can use the functions inside the view's controller
                    this.oDialog = this.loadFragment({
                        name: "com.training.exer1cantuba.fragment.ProductDialog"
                    });
                } 
                this.oDialog.then(function(oDialog) {
                    oDialog.open();
                });
            },
            onCloseDialog: function (){
                this.getView().byId("idProductDialog").close();
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
            var oInputFName = this.getView().byId("idInptFName");
            var oInputLName = this.getView().byId("idInptLName");
            var oInputFNameValue = oInputFName.getValue();
            var oInputLNameValue = oInputLName.getValue();
            var oRouter = this.getOwnerComponent().getRouter();

            // Check if first name and last name is blank
            if (oInputFNameValue === "" || oInputLNameValue === ""){
               
// set value state to Error
                oInputFName.setValueState("Error");
                oInputLName.setValueState("Error");
            } else {
                oInputFName.setValueState("None");
                oInputLName.setValueState("None");

                //Navigate to review page passing first
                oRouter.navTo("RouteReviewPage", {
                    firstName: oInputFNameValue
                });

            }
        },

        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },

    });
});