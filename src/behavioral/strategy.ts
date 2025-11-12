// Strategy example: choose sorting algorithm at runtime

type SortStrategy = (arr: number[]) => number[];

const asc: SortStrategy = (arr) => [...arr].sort((a, b) => a - b);
const desc: SortStrategy = (arr) => [...arr].sort((a, b) => b - a);

class Sorter {
  private strategy: SortStrategy;
  constructor(strategy: SortStrategy) {
    this.strategy = strategy;
  }
  sort(arr: number[]) {
    return this.strategy(arr);
  }
}

export function demoStrategy() {
  console.log("Strategy pattern demo:");
  const data = [5, 3, 9, 1];
  const ascSorter = new Sorter(asc);
  console.log("asc:", ascSorter.sort(data));
  const descSorter = new Sorter(desc);
  console.log("desc:", descSorter.sort(data));
}
