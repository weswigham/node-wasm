/**
 * Some example calculation which you might offload for performance.
 */
export function calculate(x: i32, y: i32): i32 {
  let result = 0;
  for (let i = 0; i < y; i++) {
    result += x * i / y;
  }
  return result;
}
