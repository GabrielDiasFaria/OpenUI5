sap.ui.define([
	"sap/ui/core/mvc/XMLView"
	
],function(XMLView){
	"use strict";
	
	// Controle UI5
	XMLView.create({
		viewName: "project.view.App"
	}).then(function (oView){
		oView.placeAt("content");
	});
	
	
});