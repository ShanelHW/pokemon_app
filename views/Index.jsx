const React = require("react");


function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={styles}>
        <h1>See All The Pokemon</h1>
        <nav>
          <a href="/pokemon/new">Create a New Pokemon</a>
        </nav>
        {console.log(pokemon)}
        <ul>
          {pokemon.map((pokemon, idx) => (
            <li key={idx}>
              <img src={pokemon.img} />
              <br/>
              <a href={`/pokemon/${idx}`}>{cap(pokemon.name)}</a>
              <br/>
              <a href={`/pokemon/${idx}/edit`}>Edit this pokemon</a>
              <form action={`/pokemon/${idx}?_method=DELETE`} method='POST'>
                  <input type='submit' value='Delete' />
              </form>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  color: `#ffffff`,
  backgroundColor: `#000000`,
};

module.exports = Index;


