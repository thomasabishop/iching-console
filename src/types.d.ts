export type HexagramLines = {
  [index: number]: string;
};

export type HexagramPacket = {
  lines: number[];
  isChanging: boolean;
};
