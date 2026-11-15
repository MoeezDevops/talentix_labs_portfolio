/** Join class names, skipping falsy values — a tiny local `clsx`. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}
