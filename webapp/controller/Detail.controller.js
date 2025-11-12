sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("mvsplit.controller.Detail", {
      onInit() {

      },
      Edit(){
        console.log("Edit clicked");
        var p = this.byId("_IDGenText");
        globalThis.pID  = p.getText();
        console.log(pID,typeof pID)
        var tModel = this.getOwnerComponent().getModel("tempJSON");
        tModel.setProperty("/v",true);
        var eModel = this.getOwnerComponent().getModel("editJSON");
        var oModel = this.getView().getModel();
        var productD = oModel.getProperty("/products").find(obj => obj.id == pID);
        var deepCopy = JSON.parse(JSON.stringify(productD));
        eModel.setData(deepCopy);
        this.getView().setModel(eModel, "editJSON");
        console.log("eModel Data",eModel.getData())
   
      },
      Delete(){
        console.log("Delete clicked");
        var p = this.byId("_IDGenText");
        var pID  = p.getText();
        const pModel = this.getOwnerComponent().getModel("productJSON");
        const eModel = this.getOwnerComponent().getModel("editJSON");
        const aProducts = pModel.getProperty("/products");
        const iIndex = aProducts.findIndex(obj => obj.id == pID);
        if(iIndex == -1){
          eModel.setData({});
          return
        }
        console.log(iIndex,aProducts.length);
        aProducts.splice(iIndex, 1);
        console.log(iIndex,aProducts.length);
        pModel.setProperty("/products", aProducts);
        if(iIndex == aProducts.length){
          eModel.setData({});
          return
        }
        var p = this.byId("_IDGenText");
        var pID  = p.getText();
        var productD = pModel.getProperty("/products").find(obj => obj.id == pID);
        var deepCopy = JSON.parse(JSON.stringify(productD));
        eModel.setData(deepCopy);
        const tModel = this.getOwnerComponent().getModel("tempJSON");
        tModel.setProperty("/v", false);
      },
      Save(){
        console.log("Save clicked");
        const eModel = this.getOwnerComponent().getModel("editJSON");
        const updated = eModel.getData();

        var pModel = this.getOwnerComponent().getModel("productJSON");
        const products = pModel.getProperty("/products");
        const index = products.findIndex(obj => String(obj.id) === pID);        
        products[index] = JSON.parse(JSON.stringify(updated));
        console.log(products[index]);
        pModel.setProperty("/products", products);
        var productD = pModel.getProperty("/products").find(obj => obj.id == pID);
        var deepCopy = JSON.parse(JSON.stringify(productD));

        console.log(pModel.getData());
        var tModel = this.getOwnerComponent().getModel("tempJSON");
        tModel.setProperty("/v",false);
      },
      Cancel(){console.log("Cancel clicked");
        
        console.log(pID)
        var pModel = this.getOwnerComponent().getModel("productJSON");
        var productD = pModel.getProperty("/products").find(obj => obj.id == pID);
        var deepCopy = JSON.parse(JSON.stringify(productD));

        console.log(pModel.getData());
        var eModel = this.getOwnerComponent().getModel("editJSON");
        console.log(eModel.getData());
        eModel.setData(deepCopy);
        console.log(eModel.getData());
        var tModel = this.getOwnerComponent().getModel("tempJSON");
        tModel.setProperty("/v",false);
      }

  });
});