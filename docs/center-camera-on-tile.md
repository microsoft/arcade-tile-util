# center Camera On Tile

Center the screen camera view at a tile location in the tilemap.

```sig
tileUtil.centerCameraOnTile(tiles.getTileLocation(0 0))
```

## Parameters

* **location**: a tile location in the tilemap to center the screen camera view at.

## Example

Create 16 x 16 tilemap. Center the screen camera at a random tile location every second.

```blocks
tiles.setCurrentTilemap(tilemap`level1`)
game.onUpdateInterval(1000, function () {
    tileUtil.centerCameraOnTile(tiles.getTileLocation(randint(0, 15), randint(0, 15)))
})
```

## See also

[center camera at](/reference/scene/center-camera-at)

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
    "tile2": {
        "data": "hwQQABAAAAAREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREQ==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile0"
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
        "data": "MTAxMDAwMTAwMDAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwNDA0MDQwNDA0MDQwNDA0MDQwNDA0MDQwNDA0MDMwMzA0MDQwNDA0MDQwNDA0MDQwNDA0MDQwNDA0MDQwMzAzMDQwNDAyMDIwMjAyMDIwMjAyMDIwMjAyMDQwNDAzMDMwNDA0MDIwNDA0MDQwNDA0MDQwNDA0MDIwNDA0MDMwMzA0MDQwMjA0MDQwNDA0MDQwNDA0MDQwMjA0MDQwMzAzMDQwNDAyMDQwNDAxMDEwMTAxMDQwNDAyMDQwNDAzMDMwNDA0MDIwNDA0MDEwNDA0MDEwNDA0MDIwNDA0MDMwMzA0MDQwMjA0MDQwMTA0MDQwMTA0MDQwMjA0MDQwMzAzMDQwNDAyMDQwNDAxMDEwMTAxMDQwNDAyMDQwNDAzMDMwNDA0MDIwNDA0MDQwNDA0MDQwNDA0MDIwNDA0MDMwMzA0MDQwMjA0MDQwNDA0MDQwNDA0MDQwMjA0MDQwMzAzMDQwNDAyMDIwMjAyMDIwMjAyMDIwMjAyMDQwNDAzMDMwNDA0MDQwNDA0MDQwNDA0MDQwNDA0MDQwNDA0MDMwMzA0MDQwNDA0MDQwNDA0MDQwNDA0MDQwNDA0MDQwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile2",
            "myTiles.tile3",
            "myTiles.tile4",
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