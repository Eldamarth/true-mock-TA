import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: this.props.genres
    };
  }

  render() {
   
    return (
      <div className="search">
        <button onClick={() => this.props.swapFavorites()}>{this.props.showFaves ? 'Show Results' : 'Show Favorites'}</button>
        <br /><br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select id="genreSelect">
          {this.props.genres.map( item => <option key={item.id}>{item.name}</option>)}

        </select>
        <br /><br />

        <button onClick={() => this.props.setMovieList(document.getElementById('genreSelect').value) }>Search</button>

      </div>
    );
  }
}

export default Search;
