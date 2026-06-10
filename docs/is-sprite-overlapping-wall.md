# Is Sprite Overlapping Wall

Checks to see if a Sprite is overlapping a wall in the given tilemap. Note that this is checking to see if the sprite is overlapping a tile that is a wall, not if the sprite is colliding with a wall. If a sprite is colliding with a wall, it will not be overlapping it.

```sig
tileUtil.isSpriteOverlappingWall(null)
```

## Parameters

* **sprite**: the Sprite to check
* **tilemap**: an optional tilemap to check against. If not specified, the current tilemap will be used


```package
arcade-tile-util=github:microsoft/arcade-tile-util
```