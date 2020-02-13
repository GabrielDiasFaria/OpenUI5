sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"../formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"

], function(Controller, MessageToast, JSONModel, ResourceModel, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("project.controller.App", {
		formatter: formatter,
		onFilterInvoices: function(oEvent) {
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");

			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		onInit: function() {
			var oData = {
				recipient: {
					name: "..."
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);

			var oInvoice = new JSONModel("json/invoice.json");
			this.getView().setModel(oInvoice, "invoice");

			var i18nModel = new ResourceModel({
				bundleName: "project.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},
		onShowHello: function() {

			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			MessageToast.show(sMsg);
		}
	});

});