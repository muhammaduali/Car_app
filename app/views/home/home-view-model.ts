import { Observable, Frame } from '@nativescript/core';

export class HomeViewModel extends Observable {
    private _username: string = "Michael Schmidt";
    private _vehicleModel: string = "BMW iX M60";
    private _connectedDevices: string = "iPhone 15 Pro, Apple Watch";
    private _temperature: number = 22;
    private _batteryLevel: number = 85;
    private _fuelLevel: number = 75;
    private _range: number = 420;
    private _seatPosition: number = 5;
    private _isLocked: boolean = true;
    private _tireStatus: string = "Optimal";
    private _musicStatus: string = "Playing";
    private _carStatus: string = "Ready";

    private _activities = [
        { icon: "\\uf2c8", title: "Climate adjusted to 22°C", time: "2 mins ago", iconColor: "text-blue-500" },
        { icon: "\\uf5cc", title: "Seat position updated", time: "15 mins ago", iconColor: "text-purple-500" },
        { icon: "\\uf52f", title: "Fuel level checked", time: "1 hour ago", iconColor: "text-yellow-500" },
        { icon: "\\uf7e9", title: "Tire pressure optimal", time: "2 hours ago", iconColor: "text-red-500" }
    ];

    constructor() {
        super();
    }

    // Navigation Methods
    navigateToClimate() {
        Frame.topmost().navigate({
            moduleName: "views/climate/climate-page",
            transition: { name: "slide" }
        });
    }

    navigateToSeat() {
        Frame.topmost().navigate({
            moduleName: "views/seat/seat-page",
            transition: { name: "slide" }
        });
    }

    navigateToMusic() {
        Frame.topmost().navigate({
            moduleName: "views/music/music-page",
            transition: { name: "slide" }
        });
    }

    // Getters
    get username(): string { return this._username; }
    get vehicleModel(): string { return this._vehicleModel; }
    get connectedDevices(): string { return this._connectedDevices; }
    get temperature(): number { return this._temperature; }
    get batteryLevel(): number { return this._batteryLevel; }
    get fuelLevel(): number { return this._fuelLevel; }
    get range(): number { return this._range; }
    get seatPosition(): number { return this._seatPosition; }
    get activities(): any[] { return this._activities; }
    get tireStatus(): string { return this._tireStatus; }
    get musicStatus(): string { return this._musicStatus; }
    get carStatus(): string { return this._carStatus; }
    get lockStatus(): string { return this._isLocked ? "Locked" : "Unlocked"; }
    get lockIcon(): string { return this._isLocked ? "\\uf023" : "\\uf09c"; }
    get lockIconColor(): string { return this._isLocked ? "text-red-500" : "text-green-500"; }

    // Actions
    toggleLock() {
        this._isLocked = !this._isLocked;
        this.notifyPropertyChange('lockStatus', this.lockStatus);
        this.notifyPropertyChange('lockIcon', this.lockIcon);
        this.notifyPropertyChange('lockIconColor', this.lockIconColor);
        this.addActivity(this._isLocked ? "\\uf023" : "\\uf09c", 
                        this._isLocked ? "Vehicle locked" : "Vehicle unlocked",
                        this._isLocked ? "text-red-500" : "text-green-500");
    }

    onFuelTap() {
        this.addActivity("\\uf52f", `Range: ${this._range}km remaining`, "text-yellow-500");
    }

    onTireTap() {
        this.addActivity("\\uf7e9", `Tire pressure checked: ${this._tireStatus}`, "text-red-500");
    }

    onBatteryTap() {
        this.addActivity("\\uf241", `Battery level: ${this._batteryLevel}%`, "text-green-500");
    }

    private addActivity(icon: string, title: string, iconColor: string) {
        this._activities.unshift({
            icon,
            title,
            time: "Just now",
            iconColor
        });
        this.notifyPropertyChange('activities', this._activities);
    }
}