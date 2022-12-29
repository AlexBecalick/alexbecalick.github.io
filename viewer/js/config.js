function config() {
    return {
            roi: {"x0": 0, "x1": 56730, "y0": 0, "y1": 33150 },
            zoomLevels: 10, // maximum zoom levels. Leave that at 10.
            tiles: 'https://storage.googleapis.com/ca1-data/img/262144px/{z}/{y}/{x}.jpg_ZZZ',
            cellData: [{mediaLink: './data/cellData.tsv', size: "77390949"}],
            geneData: [{mediaLink: './data/geneData.tsv', size: "640650110"}],
            cellBoundaries: [{mediaLink: './data/cellBoundaries.tsv', size: "69547441"}],
        }
}
