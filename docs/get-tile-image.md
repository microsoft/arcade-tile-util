# Get Tile Image

Gets the tile image at a location in a tilemap.

```sig
tileUtil.getTileImage(null, null)
```

## Parameters

* **tilemap**: the tilemap to check the location in
* **location**: the location to get the tile image from

## Example

Set a checkerboard tilemap with brown and white tiles into the game scene. When button `A` is pressed, chooses a random tile and spreads it to adjacent tiles

```blocks
let tileImage: Image;
let location: tiles.Location;

controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
    location = tiles.getTileLocation(
        randint(
            0,
            tileUtil.tilemapProperty(
                tileUtil.currentTilemap(),
                tileUtil.TilemapProperty.Columns
            ) - 1
        ),
        randint(
            0,
            tileUtil.tilemapProperty(
                tileUtil.currentTilemap(),
                tileUtil.TilemapProperty.Rows
            ) - 1
        )
    )
    tileImage = tileUtil.getTileImage(
        tileUtil.currentTilemap(),
        location
    );

    tileUtil.setTileAt(
        tileUtil.currentTilemap(),
        location.getNeighboringLocation(CollisionDirection.Left),
        tileImage
    )
    tileUtil.setTileAt(
        tileUtil.currentTilemap(),
        location.getNeighboringLocation(CollisionDirection.Top),
        tileImage
    )
    tileUtil.setTileAt(
        tileUtil.currentTilemap(),
        location.getNeighboringLocation(CollisionDirection.Right),
        tileImage
    )
    tileUtil.setTileAt(
        tileUtil.currentTilemap(),
        location.getNeighboringLocation(CollisionDirection.Bottom),
        tileImage
    )
})
tiles.setCurrentTilemap(tilemap`level1`)
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
    "tile1": {
        "data": "hwQQABAAAAAREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREQ==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile0"
    },
    "tile2": {
        "data": "hwQQABAAAADu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7g==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile1"
    },
    "tile3": {
        "data": "hwQQABAAAAD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////w==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile2"
    },
    "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYzAwMGEwMDAyMDEwMjAxMDIwMTAyMDEwMjAxMDIwMTAxMDIwMTAyMDEwMjAxMDIwMTAyMDEwMjAyMDEwMjAxMDIwMTAyMDEwMjAxMDIwMTAxMDIwMTAyMDEwMjAxMDIwMTAyMDEwMjAyMDEwMjAxMDIwMTAyMDEwMjAxMDIwMTAxMDIwMTAyMDEwMjAxMDIwMTAyMDEwMjAyMDEwMjAxMDIwMTAyMDEwMjAxMDIwMTAxMDIwMTAyMDEwMjAxMDIwMTAyMDEwMjAyMDEwMjAxMDIwMTAyMDEwMjAxMDIwMTAxMDIwMTAyMDEwMjAxMDIwMTAyMDEwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile1",
            "myTiles.tile2",
            "myTiles.tile3"
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