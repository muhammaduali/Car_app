import { Observable } from '@nativescript/core';

export class MusicViewModel extends Observable {
    private _currentTrack: string = "Blinding Lights";
    private _currentArtist: string = "The Weeknd";
    private _currentTrackArt: string = "~/images/album-art.jpg";
    private _isPlaying: boolean = true;
    private _trackProgress: number = 35;
    private _currentTime: string = "1:45";
    private _totalTime: string = "3:20";
    private _source: string = "bluetooth";
    private _bassLevel: number = 5;
    private _midLevel: number = 5;
    private _trebleLevel: number = 5;
    private _balance: number = 0;

    constructor() {
        super();
    }

    // Getters
    get currentTrack(): string { return this._currentTrack; }
    get currentArtist(): string { return this._currentArtist; }
    get currentTrackArt(): string { return this._currentTrackArt; }
    get isPlaying(): boolean { return this._isPlaying; }
    get playIcon(): string { return this._isPlaying ? "\\uf04c" : "\\uf04b"; }
    get trackProgress(): number { return this._trackProgress; }
    get currentTime(): string { return this._currentTime; }
    get totalTime(): string { return this._totalTime; }
    get source(): string { return this._source; }
    get bassLevel(): number { return this._bassLevel; }
    get midLevel(): number { return this._midLevel; }
    get trebleLevel(): number { return this._trebleLevel; }
    get balance(): number { return this._balance; }

    // Actions
    togglePlay() {
        this._isPlaying = !this._isPlaying;
        this.notifyPropertyChange('isPlaying', this._isPlaying);
        this.notifyPropertyChange('playIcon', this.playIcon);
    }

    previousTrack() {
        // Implement previous track logic
    }

    nextTrack() {
        // Implement next track logic
    }

    selectRadio() {
        this._source = 'radio';
        this.notifyPropertyChange('source', this._source);
    }

    selectBluetooth() {
        this._source = 'bluetooth';
        this.notifyPropertyChange('source', this._source);
    }

    selectUSB() {
        this._source = 'usb';
        this.notifyPropertyChange('source', this._source);
    }
}