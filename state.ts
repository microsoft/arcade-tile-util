namespace tileUtil {
    export class _TileMapState {
        connections: _TileMapConnection[];

        constructor(public map: tiles.TileMapData) {
            this.connections = [];
        }
    }

    export class _TileMapConnection {
        constructor(public readonly id: number, public target: _TileMapState) {}
    }

    export class _CoveredTile {
        constructor(public column: number, public row: number, public image: Image) { }
    }

    export class _TileUtilState {
        coveredTiles: _CoveredTile[];
        mapStates: _TileMapState[];

        constructor() {
            this.coveredTiles = [];
            this.mapStates = [];

            onMapUnloaded(() => {
                this.coveredTiles = [];
            })

            scene.createRenderable(-.9, (target, camera) => this.draw(target, camera));
        }

        coverTile(column: number, row: number, image: Image) {
            for (const tile of this.coveredTiles) {
                if (tile.column === column && tile.row === row) {
                    tile.image = image;
                    return;
                }
            }
            this.coveredTiles.push(new _CoveredTile(column, row, image));
        }

        clearCoveredTiles() {
            this.coveredTiles = [];
        }

        draw(canvas: Image, camera: scene.Camera) {
            const tilemap = game.currentScene().tileMap;
            if (!tilemap || !tilemap.enabled) return;

            let leftColumn = camera.left >> tilemap.scale;
            let rightColumn = camera.right >> tilemap.scale;
            let topRow = camera.top >> tilemap.scale;
            let bottomRow = camera.bottom >> tilemap.scale;

            for (const tile of this.coveredTiles) {
                if (tile.column >= leftColumn && tile.column <= rightColumn && tile.row >= topRow && tile.row <= bottomRow) {
                    canvas.drawTransparentImage(
                        tile.image,
                        (tile.column << tilemap.scale) - camera.drawOffsetX,
                        (tile.row << tilemap.scale) - camera.drawOffsetY
                    );
                }
            }
        }

        getStateForMap(map: tiles.TileMapData) {
            for (const state of this.mapStates) {
                if (state.map === map) return state;
            }
            const newState = new _TileMapState(map);
            this.mapStates.push(newState);
            return newState;
        }

        connectMaps(a: tiles.TileMapData, b: tiles.TileMapData, connectionId: number) {
            const aState = this.getStateForMap(a);
            const bState = this.getStateForMap(b);

            let foundIt = false;
            for (const connection of aState.connections) {
                if (connection.id === connectionId) {
                    foundIt = true;
                    connection.target = bState;
                    break;
                }
            }

            if (!foundIt) {
                aState.connections.push(new _TileMapConnection(connectionId, bState));
            }

            foundIt = false;

            for (const connection of bState.connections) {
                if (connection.id === connectionId) {
                    foundIt = true;
                    connection.target = aState;
                    break;
                }
            }

            if (!foundIt) {
                bState.connections.push(new _TileMapConnection(connectionId, aState));
            }
        }

        getConnectedMap(map: tiles.TileMapData, connectionId: number) {
            const state = this.getStateForMap(map);
            for (const connection of state.connections) {
                if (connection.id === connectionId) return connection.target.map;
            }

            return undefined;
        }
    }

    let _stateStack: _TileUtilState[];

    export function _state() {
        _init();
        return _stateStack[_stateStack.length - 1];
    }

    export function _init() {
        if (_stateStack) return;
        _stateStack = [new _TileUtilState()];

        game.addScenePushHandler(() => {
            _stateStack.push(new _TileUtilState());
        });

        game.addScenePopHandler(() => {
            _stateStack.pop();

            if (_stateStack.length === 0) {
                _stateStack.push(new _TileUtilState());
            }
        });
    }
}