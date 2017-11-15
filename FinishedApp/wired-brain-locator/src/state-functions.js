export function loadMap(e) {
    if (e.target.value === 'location1'){

        this.setState({currentMap: 'portland.png'});
    } else {
        this.setState({currentMap: 'astoria.png'});
    }
}