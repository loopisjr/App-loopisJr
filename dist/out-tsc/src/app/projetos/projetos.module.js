import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProjetosPage } from './projetos.page';
var routes = [
    {
        path: '',
        component: ProjetosPage
    }
];
var ProjetosPageModule = /** @class */ (function () {
    function ProjetosPageModule() {
    }
    ProjetosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProjetosPage]
        })
    ], ProjetosPageModule);
    return ProjetosPageModule;
}());
export { ProjetosPageModule };
//# sourceMappingURL=projetos.module.js.map