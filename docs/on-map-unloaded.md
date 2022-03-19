# on Map Unloaded

Run some code when a tilemap is unloaded from the game scene.

```sig
tileUtil.onMapUnloaded(function (null) {})
```

This event is triggered when a tilemap is unloaded from the scene. The tilemap object is given as a parameter for use by the code inside the event.

## Parameters

* **cb**: the event handler to run code when a tilemap is unloaded from the game scene.
>* **tilemap**: the tilemap that was just unloaded.

## Example

Create a sprite on the screen to use as an anchor for messages. Using the controller, load a tilemap into the scene when button `A` is pressed. Use button `B` to unload the tilemap. Display a sprite message when the tilemap is loaded or unloaded.

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ....................ccfff...........
    ..........fffffffffcbbbbf...........
    .........fbbbbbbbbbfffbf............
    .........fbb111bffbbbbff............
    .........fb11111ffbbbbbcff..........
    .........f1cccc11bbcbcbcccf.........
    ..........fc1c1c1bbbcbcbcccf...ccccc
    ............c3331bbbcbcbccccfccddbbc
    ...........c333c1bbbbbbbcccccbddbcc.
    ...........c331c11bbbbbcccccccbbcc..
    ..........cc13c111bbbbccccccffbccf..
    ..........c111111cbbbcccccbbc.fccf..
    ...........cc1111cbbbfdddddc..fbbcf.
    .............cccffbdbbfdddc....fbbf.
    ..................fbdbbfcc......fbbf
    ...................fffff.........fff
    `, SpriteKind.Player)
    tileUtil.onMapUnloaded(function (tilemap) {
    mySprite.sayText("Tilemap Unloaded!")
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    tileUtil.unloadTilemap()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setCurrentTilemap(tilemap`level1`)
})
tileUtil.onMapLoaded(function (tilemap) {
    mySprite.sayText("Tilemap Loaded!")
})
```

```package
arcade-tile-util=github:microsoft/arcade-tile-util
```

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile3": {
        "data": "hwQQABAAAADu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7g==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile1"
    },
    "tile1": {
        "data": "hwQQABAAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3Q==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile"
    },
        "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYzAwMGEwMDAxMDIwMTAyMDEwMjAxMDIwMTAyMDEwMjAyMDEwMjAxMDIwMTAyMDEwMjAxMDIwMTAxMDIwMTAyMDEwMjAxMDIwMTAyMDEwMjAyMDEwMjAxMDIwMTAyMDEwMjAxMDIwMTAxMDIwMTAyMDEwMjAxMDIwMTAyMDEwMjAyMDEwMjAxMDIwMTAyMDEwMjAxMDIwMTAxMDIwMTAyMDEwMjAxMDIwMTAyMDEwMjAyMDEwMjAxMDIwMTAyMDEwMjAxMDIwMTAxMDIwMTAyMDEwMjAxMDIwMTAyMDEwMjAyMDEwMjAxMDIwMTAyMDEwMjAxMDIwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile3",
            "myTiles.tile1"
        ],
        "displayName": "level1"
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```