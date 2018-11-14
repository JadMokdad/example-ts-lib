interface doubleOptions {
  num: number;
}

export default function double({ num }: doubleOptions = { num: 0 }): number {
  return num * 2;
}
