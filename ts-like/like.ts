export class LikeComponent {
  private _likes: number;
  isSelected: boolean;

  constructor() {
    this._likes = 0;
  }

  liked() {
    this._likes++;
  }

  get likes(): number {
    return this._likes;
  }
}
