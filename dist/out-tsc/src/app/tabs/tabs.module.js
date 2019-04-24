import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';
var routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'principal',
                loadChildren: '../principal/principal.module#PrincipalPageModule'
            },
            {
                path: 'projetos',
                loadChildren: '../projetos/projetos.module#ProjetosPageModule'
            },
            {
                path: 'funcionarios',
                loadChildren: '../funcionarios/funcionarios.module#FuncionariosPageModule'
            }
        ]
    }
];
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TabsPage]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());
export { TabsPageModule };
//# sourceMappingURL=tabs.module.js.map