# All Tiles Overlapping Sprite

Gets an array of all tile Locations that a Sprite is currently overlapping. If no tilemap is given, this function will return all locations in the current global tilemap.

```sig
tileUtil.allTilesOverlappingSprite(null)
```

## Parameters

* **sprite**: The sprite to get the locations for
* **tilemap**: An optional tilemap to check against. If no tilemap is given, checks against the global tilemap


```package
arcade-tile-util=github:microsoft/arcade-tile-util