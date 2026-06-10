# All Tiles Overlapping Sprite Edge

Gets an array of all tile Locations that are overlapping a sprite on a given edge. Note that this only returns locations that are overlapping, so walls that the sprite is colliding with will not be returned.

If no tilemap is given, this function will return all locations in the current global tilemap.

```sig
tileUtil.allTilesOverlappingSpriteEdge(null, CollisionDirection.Top)
```

## Parameters

* **sprite**: The sprite to get the locations for
* **edge**: The edge of the sprite to check
* **tilemap**: An optional tilemap to check against. If no tilemap is given, checks against the global tilemap


```package
arcade-tile-util=github:microsoft/arcade-tile-util
```