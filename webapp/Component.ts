import UIComponent from "sap/ui/core/UIComponent";

/**
 * @namespace your.name
 */
export default class Component extends UIComponent {
    public static metadata = {
        "interfaces": ["sap.ui.core.IAsyncContentCreation"],
        "manifest": "json"
    };
    init(): void {
        super.init();
    };
};