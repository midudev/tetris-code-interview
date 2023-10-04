export const BLOCK_SIZE = 20
export const BOARD_WIDTH = 14
export const BOARD_HEIGHT = 30

export const EVENT_MOVEMENTS = {
  LEFT: 'ArrowLeft',
  DOWN: 'ArrowDown',
  RIGHT: 'ArrowRight'
}

export const COLORS = [
  'black',
  'yellow',
  'cyan',
  'darkviolet',
  'red',
  'lightgreen',
  'orange',
  'blue'
]

export const PIECES = [
  [ // la pieza amarilla
    [1, 1],
    [1, 1]
  ],
  [
    [2, 2, 2, 2]
  ],
  [ // es la pieza lila
    [0, 3, 0],
    [3, 3, 3]
  ],
  [ // la pieza roja
    [4, 4, 0],
    [0, 4, 4]
  ],
  [
    [0, 5, 5],
    [5, 5, 0]
  ],
  [
    [6, 0],
    [6, 0],
    [6, 6]
  ],
  [
    [0, 7],
    [0, 7],
    [7, 7]
  ]
]
