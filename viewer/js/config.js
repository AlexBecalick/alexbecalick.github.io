function config() {
    return {
            roi: {"x0": 0, "x1": 56730, "y0": 0, "y1": 33150 },
            zoomLevels: 10, // maximum zoom levels. Leave that at 10.
            tiles: 'https://storage.googleapis.com/ca1-data/img/262144px/{z}/{y}/{x}.jpg_ZZZ',
            cellData: [{mediaLink: 'https://media.githubusercontent.com/media/AlexBecalick/alexbecalick.github.io/main/viewer/data/cellData.tsv?raw=true', size: "77390949"}],
            geneData: [{mediaLink: 'https://media.githubusercontent.com/media/AlexBecalick/alexbecalick.github.io/main/viewer/data/geneData.tsv?raw=true', size: "640650110"}],
            cellBoundaries: [{mediaLink: 'https://media.githubusercontent.com/media/AlexBecalick/alexbecalick.github.io/main/viewer/data/cellBoundaries.tsv?raw=true', size: "69547441"}],
            }
        }
