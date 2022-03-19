# clone Map

Clone a tilemap to make a new copy of it.

```sig
tileUtil.cloneMap(null)
```

## Parameters

* **map**: the tilemap to clone from.

## Returns

* a tilemap that is a new copy of the the original tilemap.

## Example

Create checkerboard tilemap. Make a copy of the tilemap by cloning it. Set the original tilemap into the game scene and change its brown tiles into red tiles. Connect the original tilemap and the cloned tilemap. Switch between the two maps when button `A` is pressed.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tileUtil.loadConnectedMap(MapConnectionKind.Door1)
})
let mapOriginal = tilemap`level1`
let mapCopy = tileUtil.cloneMap(mapOriginal)
tileUtil.connectMaps(mapOriginal, mapCopy, MapConnectionKind.Door1)
tiles.setCurrentTilemap(mapCopy)
tileUtil.replaceAllTiles(assets.tile`myTile1`, assets.tile`myTile2`)
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
    "tile4": {
        "data": "hwQQABAAAAAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile2"
    },
    "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAxMDIwMTAyMDEwMjAxMDIwMTAyMDIwMTAyMDEwMjAxMDIwMTAyMDEwMTAyMDEwMjAxMDIwMTAyMDEwMjAyMDEwMjAxMDIwMTAyMDEwMjAxMDEwMjAxMDIwMTAyMDEwMjAxMDIwMjAxMDIwMTAyMDEwMjAxMDIwMTAxMDIwMTAyMDEwMjAxMDIwMTAyMDIwMTAyMDEwMjAxMDIwMTAyMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile3",
            "myTiles.tile1"
        ],
        "displayName": "level1"
    },
    "level2": {
        "id": "level2",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAyMDEwMjAxMDIwMTAyMDEwMjAxMDEwMjAxMDIwMTAyMDEwMjAxMDIwMjAxMDIwMTAyMDEwMjAxMDIwMTAxMDIwMTAyMDEwMjAxMDIwMTAyMDIwMTAyMDEwMjAxMDIwMTAyMDEwMTAyMDEwMjAxMDIwMTAyMDEwMjAyMDEwMjAxMDIwMTAyMDEwMjAxMDEwMjAxMDIwMTAyMDEwMjAxMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile1",
            "myTiles.tile4"
        ],
        "displayName": "level2"
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```