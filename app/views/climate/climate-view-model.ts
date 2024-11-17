import { Observable } from '@nativescript/core';

export class ClimateViewModel extends Observable {
    private _temperature: number = 22;
    private _fanSpeed: number = 3;
    private _humidity: number = 45;
    private _isACOn: boolean = true;
    private _isAutoOn: boolean = false;
    private _isRecirculateOn: boolean = false;
    private _frontDefrost: boolean = false;
    private _rearDefrost: boolean = false;

    constructor() {
        super();
    }

    // Getters
    get temperature(): number { return this._temperature; }
    get fanSpeed(): number { return this._fanSpeed; }
    get humidity(): number { return this._humidity; }
    get isACOn(): boolean { return this._isACOn; }
    get isAutoOn(): boolean { return this._isAutoOn; }
    get isRecirculateOn(): boolean { return this._isRecirculateOn; }
    get frontDefrost(): boolean { return this._frontDefrost; }
    get rearDefrost(): boolean { return this._rearDefrost; }

    // Actions
    increaseTemp() {
        if (this._temperature < 30) {
            this._temperature++;
            this.notifyPropertyChange('temperature', this._temperature);
        }
    }

    decreaseTemp() {
        if (this._temperature > 16) {
            this._temperature--;
            this.notifyPropertyChange('temperature', this._temperature);
        }
    }

    increaseFan() {
        if (this._fanSpeed < 5) {
            this._fanSpeed++;
            this.notifyPropertyChange('fanSpeed', this._fanSpeed);
        }
    }

    decreaseFan() {
        if (this._fanSpeed > 0) {
            this._fanSpeed--;
            this.notifyPropertyChange('fanSpeed', this._fanSpeed);
        }
    }

    toggleAC() {
        this._isACOn = !this._isACOn;
        this.notifyPropertyChange('isACOn', this._isACOn);
    }

    toggleAuto() {
        this._isAutoOn = !this._isAutoOn;
        this.notifyPropertyChange('isAutoOn', this._isAutoOn);
    }

    toggleRecirculation() {
        this._isRecirculateOn = !this._isRecirculateOn;
        this.notifyPropertyChange('isRecirculateOn', this._isRecirculateOn);
    }
}