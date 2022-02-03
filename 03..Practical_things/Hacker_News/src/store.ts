import { NewsFeed, NewsStore } from "./types";

export class Store implements NewsStore {
  private feeds: NewsFeed[];
  private _currentPage: number;
  private _maxPage: number;

  constructor() {
    this.feeds = [];
    this._currentPage = 1;
    this._maxPage = 1;
  }

  get currentPage() {
    return this._currentPage;
  }

  set currentPage(page: number) {
    this._currentPage = page;
  }

  get maxPage() {
    return this._maxPage;
  }

  set maxPage(page: number) {
    this._maxPage = page;
  }

  get nextPage(): number {
    return this._currentPage + 1 < this._maxPage
      ? this._currentPage + 1
      : this._maxPage;
  }

  get prevPage(): number {
    return this._currentPage > 1 ? this._currentPage - 1 : 1;
  }

  get numberOfFeed(): number {
    return this.feeds.length;
  }

  get hasFeeds(): boolean {
    return this.feeds.length > 0;
  }

  getAllFeeds(): NewsFeed[] {
    return this.feeds;
  }

  getFeed(position: number): NewsFeed {
    return this.feeds[position];
  }

  setFeeds(feeds: NewsFeed[]): void {
    this.feeds = feeds.map((feed) => ({
      ...feed,
      read: false,
    }));
  }

  makeRead(id: number): void {
    const feed = this.feeds.find((feed: NewsFeed) => feed.id === id);

    if (feed) {
      feed.read = true;
    }
  }
}
