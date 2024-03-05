# for each Tile in Map

Loops over every location in a tilemap and runs some code at each tile.

```sig
tileUtil.forEachTileInMap(tileUtil.currentTilemap(), function (column, row, location) {
})
```

## Parameters

* **tileMap**: the tilemap to loop over.
* **column**: the column of the current location in the map.
* **row**: the row of the current location in the map.
* **location**: the current location in the map.

## Example

This example takes a simple tilemap where the walls are marked with a single tile and automatically fills in the appropriate wall tile for each location based on the surrounding tiles

```blocks
tiles.setCurrentTilemap(tilemap`level1`)
tileUtil.setWalls(assets.tile`myTile`, true)
tileUtil.forEachTileInMap(tileUtil.currentTilemap(), function (column, row, location) {
    if (tiles.tileAtLocationIsWall(location)) {
        if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(column + 1, row)))) {
            if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(column, row + 1)))) {
                tiles.setTileAt(location, sprites.dungeon.purpleInnerSouthEast)
            } else if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(column, row - 1)))) {
                tiles.setTileAt(location, sprites.dungeon.purpleInnerNorthEast)
            } else {
                tiles.setTileAt(location, sprites.dungeon.purpleOuterWest0)
            }
        } else if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(column - 1, row)))) {
            if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(column, row + 1)))) {
                tiles.setTileAt(location, sprites.dungeon.purpleInnerSouthWest)
            } else if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(column, row - 1)))) {
                tiles.setTileAt(location, sprites.dungeon.purpleInnerNorthWest)
            } else {
                tiles.setTileAt(location, sprites.dungeon.purpleOuterEast1)
            }
        } else if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(column, row + 1)))) {
            tiles.setTileAt(location, sprites.dungeon.purpleOuterNorth0)
        } else if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(column, row - 1)))) {
            tiles.setTileAt(location, sprites.dungeon.purpleOuterSouth1)
        } else if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(column + 1, row + 1)))) {
            tiles.setTileAt(location, sprites.dungeon.purpleOuterNorthWest)
        } else if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(column + 1, row - 1)))) {
            tiles.setTileAt(location, sprites.dungeon.purpleOuterSouthEast)
        } else if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(column - 1, row + 1)))) {
            tiles.setTileAt(location, sprites.dungeon.purpleOuterNorthEast)
        } else if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(column - 1, row - 1)))) {
            tiles.setTileAt(location, sprites.dungeon.purpleOuterSouthWest)
        }
    }
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
    "tile1": {
        "data": "hwQQABAAAABmZmZmZmZmZmZmERFhZmZmZmZmZmFmZmZmZmYWYWZmZmZmZmZhZmZmZmYREWFmZmZmZmZmZmZmZmZmZhFhZmZmZmZmYWFmZmZmZmYRYWZmZmZmZmZhZmZmZmZmZmZmZmZmZhERYWZmZmZmZmZmZmZmZmYREWFmZmZmZmZmZmZmZg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile"
    },
    "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAxMDEwMTAxMDIwMjAxMDEwMTAxMDEwMjAyMDIwMjAyMDIwMjAyMDEwMTAyMDIwMjAyMDIwMjAyMDIwMTAyMDIwMjAyMDEwMTAyMDIwMjAyMDIwMjAyMDIwMTAxMDIwMjAyMDIwMTAyMDIwMjAyMDIwMjAyMDIwMTAxMDIwMjAyMDIwMjAyMDIwMjAxMDEwMTAxMDEwMjAyMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile1",
            "sprites.dungeon.floorLight0"
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