export type FloatingPlacement = "end" | "start";
export type FloatingSide = "top" | "right" | "bottom" | "left";
export type FloatingPosition =
  | FloatingSide
  | `${FloatingSide}-${FloatingPlacement}`;
export type ArrowPosition = "center" | "side";
export interface FloatingAxesOffsets {
  y?: number;
  x?: number;
  alignmentAxis?: number | null;
}
