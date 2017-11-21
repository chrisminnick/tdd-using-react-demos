export function loadMap(e) {
    if (e.target.value === 'Portland'){

        this.setState({currentMap: 'portland.png'});
    } else {
        this.setState({currentMap: 'astoria.png'});
    }
}