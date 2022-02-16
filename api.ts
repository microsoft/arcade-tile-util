namespace MapConnectionKind {
    let nextKind: number
    export function create() {
        if (nextKind === undefined) nextKind = 1;
        return nextKind++;
    }

    //% isKind
    export const Door1 = create();

    //% isKind
    export const Door2 = create();

    //% isKind
    export const Door3 = create();

    //% isKind
    export const Door4 = create();
}

//% color=#879bff icon="\uf279"
//% block="Tile Util"
//% groups='["Tilemaps", "Tiles", "Events", "Connections", "Camera"]'
namespace tileUtil {
    export enum TilemapProperty {
        //% block="number of columns"
        Columns,
        //% block="number of rows"
        Rows,
        //% block="width"
        PixelWidth,
        //% block="height"
        PixelHeight,
        //% block="tile width"
        TileWidth
    }

    /**
     * Reads a property from a tilemap
     */
    //% blockId=tileUtil_tilemapProperty
    //% block="$data $prop"
    //% data.shadow=variables_get
    //% data.defl=tilemap
    //% group=Tilemaps
    export function tilemapProperty(data: tiles.TileMapData, prop: TilemapProperty): number {
        switch (prop) {
            case TilemapProperty.Columns:
                return data.width;
            case TilemapProperty.Rows:
                return data.height;
            case TilemapProperty.PixelWidth:
                return data.width << data.scale;
            case TilemapProperty.PixelHeight:
                return data.height << data.scale;
            case TilemapProperty.TileWidth:
                return 1 << data.scale;
        }
    }

    /**
     * Gets the "kind" of tilemap connection
     */
    //% shim=KIND_GET
    //% blockId=tileUtil_connectionKind block="$kind"
    //% group="Connections" weight=0
    //% kindNamespace=MapConnectionKind kindMemberName=kind kindPromptHint="e.g. Door1, Tunnel1, ..."
     export function _connectionKind(kind: number): number {
        return kind;
    }

    /**
     * Connects two tilemaps with a connection name or number.
     * Connections work in both ways and are remembered by both tilemaps.
     */
    //% block="connect $mapA and $mapB by $connectionId"
    //% blockId=tileUtil_connectMapById
    //% mapA.shadow=variables_get
    //% mapA.defl=tilemap1
    //% mapB.shadow=variables_get
    //% mapB.defl=tilemap2
    //% connectionId.shadow=tileUtil_connectionKind
    //% group="Connections" weight=40 blockGap=8
    export function connectMaps(mapA: tiles.TileMapData, mapB: tiles.TileMapData, connectionId: number): void {
        _state().connectMaps(mapA, mapB, connectionId);
    }

    /**
     * Gets the destination tilemap connected to the source tilemap by the given connection name or number.
     */
    //% block="get tilemap connected to $map by $connectionId"
    //% blockId=tileUtil_getConnectedMap
    //% map.shadow=variables_get
    //% map.defl=tilemap
    //% connectionId.shadow=tileUtil_connectionKind
    //% group="Connections" weight=10 blockGap=8
    export function getConnectedMap(map: tiles.TileMapData, connectionId: number): tiles.TileMapData {
        return _state().getConnectedMap(map, connectionId);
    }

    /**
     * Loads the overworld tilemap connected to the current tilemap by the
     * given connection name or number.
     */
    //% block="load tilemap connected by $connectionId"
    //% blockId=tileUtil_loadConnectedMap
    //% connectionId.shadow=tileUtil_connectionKind
    //% group="Connections" weight=30 blockGap=8
    export function loadConnectedMap(connectionId: number) {
        const nextMap = getConnectedMap(currentTilemap(), connectionId)
        if (nextMap) {
            scene.setTileMapLevel(nextMap);
        }
    }

    /**
     * Creates a tilemap with 8x8 tiles that can be connected to other tilemaps through the overworld.
     */
    //% blockId=tileUtil_createSmallMap
    //% block="8x8 tilemap $tilemap"
    //% tilemap.fieldEditor="tilemap"
    //% tilemap.fieldOptions.decompileArgumentAsString="true"
    //% tilemap.fieldOptions.filter="tile"
    //% tilemap.fieldOptions.taggedTemplate="tilemap"
    //% tilemap.fieldOptions.tileWidth=8
    //% tilemap.fieldOptions.initWidth=20
    //% tilemap.fieldOptions.initHeight=15
    //% group="Tilemaps" weight=49 blockGap=8
    //% duplicateShadowOnDrag
    export function createSmallMap(tilemap: tiles.TileMapData): tiles.TileMapData {
        return tilemap
    }

    /**
     * Clone an existing tilemap (does not copy connections to other maps). Be careful
     * when using this on hardware because it can use a lot of memory.
     */
    //% block="clone $map"
    //% blockId=tileUtil_cloneMap
    //% map.shadow=variables_get
    //% map.defl=tilemap
    //% group="Tilemaps" weight=25 blockGap=8
    export function cloneMap(map: tiles.TileMapData): tiles.TileMapData {
        const buffer = control.createBuffer(4 + map.width * map.height);
        buffer.setNumber(NumberFormat.UInt16LE, 0, map.width);
        buffer.setNumber(NumberFormat.UInt16LE, 2, map.height);

        const result = tiles.createTilemap(
            buffer,
            image.create(map.width, map.height),
            map.getTileset().slice(),
            map.scale
        );

        for (let x = 0; x < map.width; x++) {
            for (let y = 0; y < map.height; y++) {
                result.setTile(x, y, map.getTile(x, y))
                result.setWall(x, y, map.isWall(x, y));
            }
        }

        return result;
    }

    /**
     * Runs code when a tilemap is loaded.
     */
    //% block="on tilemap loaded $tilemap"
    //% blockId=tileUtil_onMapLoaded
    //% draggableParameters="reporter"
    //% group="Events" weight=20 blockGap=8
    export function onMapLoaded(cb: (tilemap: tiles.TileMapData) => void) {
        tiles.addEventListener(tiles.TileMapEvent.Loaded, cb);
    }

    /**
     * Runs code when a tilemap is unloaded.
     */
    //% block="on tilemap unloaded $tilemap"
    //% blockId=tileUtil_onMapUnloaded
    //% draggableParameters="reporter"
    //% group="Events" weight=10 blockGap=8
    export function onMapUnloaded(cb: (tilemap: tiles.TileMapData) => void) {
        tiles.addEventListener(tiles.TileMapEvent.Unloaded, cb);
    }

    /**
     * Unloads the current tilemap so that there is no tilemap
     * currently active
     */
    //% block="unload current tilemap"
    //% blockId=tileUtil_unloadTilemap
    //% group="Events" weight=0 blockGap=8
    export function unloadTilemap() {
        if (game.currentScene().tileMap) {
            game.currentScene().tileMap.setData(undefined);
        }
    }

    /**
     * Cover all tiles of a given kind with a different tile image.
     * These cover images are removed when the tilemap changes.
     */
    //% block="cover all $tileKind tiles with $cover"
    //% blockId=tileUtil_coverAllTiles
    //% tileKind.shadow=tileset_tile_picker
    //% tileKind.decompileIndirectFixedInstances=true
    //% cover.shadow=tileset_tile_picker
    //% cover.decompileIndirectFixedInstances=true
    //% group="Tiles" weight=40 blockGap=8
    export function coverAllTiles(tileKind: Image, cover: Image) {
        if (!game.currentScene().tileMap || !game.currentScene().tileMap.enabled) return;

        const state = _state();
        for (const location of tiles.getTilesByType(tileKind)) {
            state.coverTile(location.column, location.row, cover)
        }
    }

    /**
     * Cover a tile at a location with a different tile image.
     * The cover image will be removed when the tilemap changes.
     */
    //% block="cover $location with $cover"
    //% blockId=tileUtil_coverTile
    //% location.shadow=mapgettile
    //% cover.shadow=tileset_tile_picker
    //% cover.decompileIndirectFixedInstances=true
    //% group="Tiles" weight=35 blockGap=8
    export function coverTile(location: tiles.Location, cover: Image) {
        if (!game.currentScene().tileMap || !game.currentScene().tileMap.enabled) return;

        _state().coverTile(location.column, location.row, cover);
    }

    /**
     * Replace all tiles of a given kind in the loaded tilemap with
     * another tile.
     */
    //% block="replace all $from tiles with $to"
    //% blockId=tileUtil_replaceAllTiles
    //% from.shadow=tileset_tile_picker
    //% from.decompileIndirectFixedInstances=true
    //% to.shadow=tileset_tile_picker
    //% to.decompileIndirectFixedInstances=true
    //% group="Tiles" weight=20
    export function replaceAllTiles(from: Image, to: Image) {
        for (const loc of tiles.getTilesByType(from)) {
            tiles.setTileAt(loc, to)
        }
    }

    /**
     * Returns the loaded tilemap.
     */
    //% block="current tilemap"
    //% blockId=tileUtil_getLoadedMap
    //% group="Tilemaps" weight=30
    export function currentTilemap(): tiles.TileMapData {
        if (!game.currentScene().tileMap) return undefined;

        return game.currentScene().tileMap.data;
    }

    /**
     * Center the camera on a given tile location.
     */
    //% block="center camera on $location"
    //% blockId=tileUtil_createCameraOnTile
    //% group="Camera" weight=10 blockGap=8
    //% location.shadow=mapgettile
    export function centerCameraOnTile(location: tiles.Location) {
        scene.centerCameraAt(location.x, location.y);
    }

    /**
     * On each tile of a given kind, create a sprite of a given SpriteKind.
     * Useful to use with the "on created [...]" sprite block.
     */
    //% block="on each $tileKind tile create sprite with image $spriteImage and kind $spriteKind"
    //% blockId=tileUtil_createSpritesOnTiles
    //% tileKind.shadow=tileset_tile_picker
    //% tileKind.decompileIndirectFixedInstances=true
    //% spriteImage.shadow=screen_image_picker
    //% spriteKind.shadow=spritekind
    //% group="Tiles" weight=30 blockGap=8
    export function createSpritesOnTiles(tileKind: Image, spriteImage: Image, spriteKind: number) {
        const scene = game.currentScene();

        // We call the handlers manually instead of just using
        // sprites.create() because we want to set the location
        // before the handlers are called
        const createdHandlers = scene.createdHandlers
            .filter(h => h.kind == spriteKind);

        for (const loc of tiles.getTilesByType(tileKind)) {
            const sprite = new Sprite(spriteImage);
            sprite.setKind(spriteKind);
            scene.physicsEngine.addSprite(sprite);
            tiles.placeOnTile(sprite, loc);

            for (const cb of createdHandlers) cb.handler(sprite)
        }
    }
}