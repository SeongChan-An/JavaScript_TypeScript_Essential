import { SearchInput } from './component/SearchInput.js';
import { SearchResult } from './component/SearchResult.js';
import { SearchHistory } from './component/SearchHistory.js';

import { debounce } from './utils/debounce.js';
import { JjalBot } from './service/zzalbot.js';

import { dummyData } from './assets/testdata.js';

export default function App({ $target }) {
  if (!new.target) {
    throw new Error('new keyword is missing');
  }

  this.$target = $target;
  this.state = {
    resultData: [],
    historyData: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    searchResult.setState(this.state);
    searchHistory.setState(this.state);
  };

  this.onSearch = async (currentTxt) => {
    if (currentTxt === '') {
      return;
    }
    const resultData = await JjalBot(currentTxt);
    this.setState({
      ...this.state,
      resultData: resultData,
    });
  };

  this.addToHistory = (searchText) => {
    if (searchText === '' || this.state.historyData.includes(searchText)) {
      return;
    }

    const { historyData } = this.state;
    const newHistory = [...historyData, searchText];
    this.setState({
      ...this.state,
      historyData: newHistory,
    });
  };

  const searchHistory = new SearchHistory({
    $target: document.querySelector('#search-history'),
    initialState: this.state,
    onClick: (keyword) => {
      this.onSearch(keyword);
    },
  });

  const searchInput = new SearchInput({
    $target: document.querySelector('#search-form'),
    onInput: debounce((event) => {
      const $input = event.target;
      this.onSearch($input.value);
      this.addToHistory($input.value);
    }, 1000),
    onSubmit: (event) => {
      event.preventDefault();
      const $input = event.target.querySelector('#search-keyword');
      this.onSearch($input.value);
    },
  });

  const searchResult = new SearchResult({
    $target: document.querySelector('#search-result'),
    initialState: this.state,
  });
}
