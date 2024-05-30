import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertsComponent } from './warning-alerts/warning-alerts.component';
import { SuccessAlertsComponent } from './success-alerts/success-alerts.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { HeaderComponent } from './MainComponent/header/header.component';
import { FooterComponent } from './MainComponent/footer/footer.component';
import { RecipesComponent } from './MainComponent/recipes/recipes.component';
import { RecipesListComponent } from './MainComponent/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './MainComponent/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './MainComponent/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './MainComponent/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './MainComponent/shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './Helper/cockpit/cockpit.component';
import { ServerElementComponent } from './Helper/server-element/server-element.component';
import { Assignment1Component } from './Assignment/assignment1/assignment1.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertsComponent,
    SuccessAlertsComponent,
    FormExampleComponent,
    HeaderComponent,
    FooterComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    Assignment1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
