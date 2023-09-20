export const BLOCK_SIZE = 20
export const BOARD_WIDTH = 14
export const BOARD_HEIGHT = 30

export const EVENT_MOVEMENTS = {
  LEFT: 'ArrowLeft',
  DOWN: 'ArrowDown',
  RIGHT: 'ArrowRight',
  UP: 'ArrowUp'
}

export const PIECES = [
  [ // la pieza amarilla
    [1, 1],
    [1, 1]
  ],
  [
    [1, 1, 1, 1]
  ],
  [ // es la pieza lila
    [0, 1, 0],
    [1, 1, 1]
  ],
  [ // la pieza verde
    [1, 1, 0],
    [0, 1, 1]
  ],
  [
    [0, 1, 1],
    [1, 1, 0]
  ],
  [
    [1, 0],
    [1, 0],
    [1, 1]
  ],
  [
    [0, 1],
    [0, 1],
    [1, 1]
  ]
]
