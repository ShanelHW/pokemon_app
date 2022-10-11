const React = require('react')


class Edit extends React.Component{
    render(){
        const {pokemon} = this.props
        console.log(this.props.pokemon)
        return(
            <div>
                <h1>Edit this Pokemon</h1>
                <form action={`/pokemon/${pokemon}?_method=PUT`} method="POST">
                    Name: <input type ="text" name="name" defaultValue={pokemon.name}/> <br/>
                    Img: <input type="text" name="img" defaultValue={pokemon.img} /> <br/>
                    <input type="submit" value="Update pokemon"/>
                </form>
            </div>
        )
    }
}


module.exports = Edit