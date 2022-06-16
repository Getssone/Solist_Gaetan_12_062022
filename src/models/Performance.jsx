export default class Performance {
  userId;
  kind;
  data;

  constructor(data) {
    this.userId = data.userId;
    this.kind = data.kind;
    this.data = data.data.map((entry) => ({
      value: entry.value,
      kind: this.kind[entry.kind],
    }));
    this.data = this.data.reverse();
  }
}
