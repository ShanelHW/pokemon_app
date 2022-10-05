const React = require('react')
// const pokemon = require('pokemon')

class Index extends React.Component {
  render() {
      const { pokemon } = this.props;
      return (
              <div>
                  <h1>Pokemon Index Page</h1>
                  <ul>
                      {pokemon.map((pokemon, i) => {
                          return (
                              <li>
                                  The{' '}
                                  <a href={`/pokemon/${i}`}>
                                      {pokemon}
                                  </a>
                              </li>
                          );
                      })}
                  </ul>
              </div>
      );
  }
}
module.exports = Index;