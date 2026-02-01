import React from "react";
import GifSearch from "./components/GifSearch/GifSearch";
import GifList from "./components/GifList/GifList";
import "./styles.css";


class App extends React.Component {
  state = {
    query: "",
    page: 0,
  };


  handleSearch = (query) => {
    this.setState({ query, page: 0 });
  };


  nextPage = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };


  prevPage = () => {
    this.setState((prev) => ({ page: Math.max(prev.page - 1, 0) }));
  };


  render() {
    const { query, page } = this.state;


    return (
      <div className="app">
        <h1>Пошук GIF</h1>
        <GifSearch onSearch={this.handleSearch} />
        <GifList query={query} page={page} />
        <div className="pagination">
          <button onClick={this.prevPage} disabled={page === 0}>
            ⬅ Назад
          </button>
          <span>Сторінка {page + 1}</span>
          <button onClick={this.nextPage}>Вперед ➡</button>
        </div>
      </div>
    );
  }
}

export default App;
