sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("mvsplit.controller.Master", {
        onInit() {
            var oModel = this.getOwnerComponent().getModel("productJSON");

            this.getView().setModel(oModel)
            console.log("model in the view ", this.getView().getModel())

            const oList = this.byId("_IDGenList");

        },
        onListItemPress(oEvent) {
            var oItem = oEvent.getParameter("listItem");
            var eModel = this.getOwnerComponent().getModel("editJSON");
            var oContext = oItem.getBindingContext("productJSON");
            var product = oContext.getObject();
            var sp = JSON.parse(JSON.stringify(product));
            eModel.setData(sp);
            console.log(product.id, product.name);
            console.log(eModel.getData);
            
            var oDetailView = this.byId("detailView");
            oDetailView.setBindingContext(oContext);
        }
    });
});