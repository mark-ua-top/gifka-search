import React from "react";


export default class GifSearch extends React.Component {
    state = { value: "" };


    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.value);
    };


    render() {
        return (
            <form className="search" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Введіть ключове слово"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button type="submit">Пошук</button>
            </form>
        );
    }
}