/**
 * Ampelsteuerung 1 x  Ampel
 * 
 *                                     Rot  Gelb  Grün
 * 
 * Benutzte Pins Ampel1: P0;   P1;  P2
 */
basic.showIcon(IconNames.Yes)
/**
 * Ampel1: Rot
 */
/**
 * Ampel1:
 * 
 * Rot-Gelb
 */
/**
 * Ampel1:
 * 
 * Grün
 */
/**
 * Ampel1:
 * 
 * Gelb
 */
/**
 * und von vorne
 */
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(1500)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
