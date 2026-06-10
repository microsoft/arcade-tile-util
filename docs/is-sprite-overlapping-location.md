# Is Sprite Overlapping Location

Checks to see if a Sprite is overlapping a given :ocation in a tilemap. If no tilemap is specified, checks agains the current global tilemap.

```sig
tileUtil.isSpriteOverlappingLocation(null, tiles.getTileLocation(0, 0))
```

## Parameters

* **sprite**: the Sprite to check
* **location**: the location to check for overlap
* **tilemap**: An optional tilemap to check against. If no tilemap is given, checks against the global tilemap


```package
arcade-tile-util=github:microsoft/arcade-tile-util
```