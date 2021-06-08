import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { ComponentToViewComponent } from './components/component-to-view/component-to-view.component';
import { ViewToComponentComponent } from './components/view-to-component/view-to-component.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { NgForComponent } from './components/structural-directive/ng-for/ng-for.component';
import { SwitchCaseComponent } from './components/structural-directive/switch-case/switch-case.component';
import { NgClassComponent } from './components/attribute-directive/ng-class/ng-class.component';
import { ChildComponent } from './components/component-interaction/child/child.component';
import { ListUserComponent } from './components/component-interaction/list-user/list-user.component';
import { PipeTestComponent } from './components/pipe/pipe-test/pipe-test.component';
import { FormatDataPipe } from './components/pipe/custom-pipe/format-data.pipe';
import { FilterPipe } from './components/pipe/filter-pipe/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ComponentToViewComponent,
    ViewToComponentComponent,
    TwoWayBindingComponent,
    StructuralDirectiveComponent,
    NgForComponent,
    SwitchCaseComponent,
    NgClassComponent,
    ChildComponent,
    ListUserComponent,
    PipeTestComponent,
    FormatDataPipe,
    FilterPipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
