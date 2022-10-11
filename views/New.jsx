const React = require(`react`);

class New extends React.Component {
  render() {
    // const {pokemon} = this.props
    return (
      <div>
        <h1>Add new Pokemon</h1>

        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" />
          <br />
          Image: <input type="text" name="img" />
          <br />
          <input type="submit" value="Create new Pokemon" />
        </form>
      </div>
    );
  }
}

module.exports = New;