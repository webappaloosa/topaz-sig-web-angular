import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TopazDemoComponent} from './topaz-demo.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';

/**
 * Created by Bradley Brandon on 9/4/19.
 */
@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    declarations: [
        TopazDemoComponent
    ],
    exports: [
        TopazDemoComponent
    ],
    providers: [],
})
export class TopazDemoModule { }
