import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import * as Topaz from '@webappaloosa/topaz-sig-web';
import {Form, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';

/**
 * Created by Bradley Brandon on 9/4/19.
 */
@Component({
    selector: 'topaz-demo',
    templateUrl: './topaz-demo.component.html',
})
export class TopazDemoComponent implements AfterViewInit, OnDestroy {

    // @ViewChild(Form, 'SigPlus1')
    // _sigPlus: any;

    private _destroy$: Subject<boolean> = new Subject<boolean>();

    @ViewChild('sigImg', {static: false})
    cnv: ElementRef;
    cnvContext: CanvasRenderingContext2D;

    tmr;

    formGroup: FormGroup;
    //
    // window.onunload = window.onbeforeunload = (function(){
    //     closingSigWeb()
    // })
    //



    constructor(private fb: FormBuilder) {
        this.formGroup = this.fb.group({
            bioSigData: new FormControl(null),
            sigImgData: new FormControl(null),
            sigStringData: new FormControl(null),
            sigImageData: new FormControl(null),

        });
    }

    ngAfterViewInit(): void {
        this.cnvContext =  ( <HTMLCanvasElement> this.cnv.nativeElement).getContext('2d');

    }

    ngOnDestroy(): void {
        this.closingSigWeb();
        this._destroy$.next(true);
    }

    get bioSigDataCtrl(): FormControl {
        return <FormControl>this.formGroup.get('bioSigData');
    }

    get sigImgDataCtrl(): FormControl {
        return <FormControl>this.formGroup.get('sigImgData');
    }

    get sigStringDataCtrl(): FormControl {
        return <FormControl>this.formGroup.get('sigStringData');
    }

    get sigImageDataCtrl(): FormControl {
        return <FormControl>this.formGroup.get('sigStringData');
    }

    closingSigWeb() {
        Topaz.ClearTablet();
        Topaz.SetTabletState(0, this.tmr);
    }

    onSign() {

        console.log('onSign Clicked!');

        // let ctx = document.getElementById('cnv').getContext('2d');

        Topaz.SetDisplayXSize( 500 );
        Topaz. SetDisplayYSize( 100 );
        Topaz.SetTabletState(0, this.tmr);
        Topaz.SetJustifyMode(0);
        Topaz.ClearTablet();

        if ( this.tmr == null) {
            this.tmr = Topaz.SetTabletState(1, this.cnvContext, 50);
        }
        else {
            Topaz.SetTabletState(0, this.tmr);
            this.tmr = null;
            this.tmr = Topaz.SetTabletState(1, this.cnvContext, 50);
        }
    }



    onClear() {
        Topaz.ClearTablet();
    }

    onDone() {
        if (Topaz.NumberOfTabletPoints() === 0) {

            alert('Please sign before continuing');

        } else {
            Topaz.SetTabletState(0, this.tmr);

            // RETURN TOPAZ-FORMAT SIGSTRING
            Topaz.SetSigCompressionMode(1);
            this.bioSigDataCtrl.patchValue(Topaz.GetSigString());
            this.sigImgDataCtrl.patchValue(Topaz.GetSigString());

            // this returns the signature in Topaz's own format, with biometric information


            // RETURN BMP BYTE ARRAY CONVERTED TO BASE64 STRING
            Topaz.SetImageXSize(500);
            Topaz.SetImageYSize(100);
            Topaz.SetImagePenWidth(5);
            Topaz.GetSigImageB64((base64: string) => {
                this.sigImageDataCtrl.patchValue(base64);
            });
        }
    }

    // SigImageCallback( str ) {
    //     this.sigImageDataCtrl.patchValue(str);
    // }


}
