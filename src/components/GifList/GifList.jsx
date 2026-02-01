import React from "react";


const API_KEY = "Eb7RRTa5Zg2j9H1chx0DctyiwOuKylEy";
const LIMIT = 15;


export default class GifList extends React.Component {
    state = {
        gifs: [],
        loading: false,
    };


    componentDidMount() {
        this.fetchGifs();
    }


    componentDidUpdate(prevProps) {
        if (
            prevProps.query !== this.props.query ||
            prevProps.page !== this.props.page
        ) {
            this.fetchGifs();
        }
    }


    fetchGifs = async () => {
        const { query, page } = this.props;
        const offset = page * LIMIT;


        this.setState({ loading: true });


        const url = query
            ? `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${LIMIT}&offset=${offset}`
            : `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${LIMIT}&offset=${offset}`;


        const res = await fetch(url);
        const data = await res.json();


        this.setState({ gifs: data.data, loading: false });
    };


    render() {
        const { gifs, loading } = this.state;


        if (loading) return <p className="loading">Завантаження...</p>;


        return (
            <div className="grid">
                {gifs.map((gif) => (
                    <img
                        key={gif.id}
                        src={gif.images.fixed_height.url}
                        alt={gif.title}
                    />
                ))}
            </div>
        );
    }
}