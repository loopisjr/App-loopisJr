import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PrincipalPage } from './principal.page';
var routes = [
    {
        path: '',
        component: PrincipalPage
    }
];
var PrincipalPageModule = /** @class */ (function () {
    function PrincipalPageModule() {
    }
    PrincipalPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PrincipalPage]
        })
    ], PrincipalPageModule);
    return PrincipalPageModule;
}());
export { PrincipalPageModule };
//# sourceMappingURL=principal.module.js.map