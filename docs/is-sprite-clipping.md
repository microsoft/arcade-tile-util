# Is Sprite Clipping

Checks to see if the Sprite is currently clipping through walls. Clipping happens when a Sprite is moved inside a wall tile and the physics engine does not know which direction to bump them out in. Clipping Sprites will ignore all collisions with walls until they are full outside of the wall.

```sig
tileUtil.isSpriteClipping(null)
```

## Parameters

* **sprite**: the Sprite to check


```package
arcade-tile-util=github:microsoft/arcade-tile-util
```