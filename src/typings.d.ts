/**
 * Created by Bradley Brandon on 9/4/19.
 */
// declare var Topaz: any;

export namespace Topaz {
    /*~ For example, given this definition, someone could write:
     *~   import { subProp } from 'yourModule';
     *~   subProp.foo();
     *~ or
     *~   import * as yourMod from 'yourModule';
     *~   yourMod.subProp.foo();
     */
    export type ImgStringCallback = (base64: string) => void;

    export function SetDisplayXSize(px: number): void;

    export function SetDisplayYSize(px: number): void;

    export function SetTabletState(state: number, timer: number): void;

    export function SetTabletState(state: number, ctx: CanvasRenderingContext2D, delay: number): void;

    export function SetJustifyMode(mode: number): void;

    export function ClearTablet(): void;

    export function NumberOfTabletPoints(): number;

    export function SetSigCompressionMode(mode: number): void;

    export function GetSigString(): string;

    export function SetImageXSize(px: number): void;

    export function SetImageYSize(px: number): void;

    export function SetImagePenWidth(px: number): void;

    export function GetSigImageB64(callback: (base64: string) => void): string;
}
