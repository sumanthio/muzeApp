class TrackController{
    constructor($state, $stateParams) {
    'ngInject';
    this.state = $state;
    this.pageNumber = $stateParams.page;
    this.tracksList =  [
        {
            "id": 38,
            "title": "Hey Jude",
            "rating": "4.9",
            "genres": [
                {
                    "id": 5,
                    "name": "ramesh"
                }
            ]
        },
        {
            "id": 39,
            "title": "hello adele",
            "rating": "4.0",
            "genres": [
                {
                    "id": 4,
                    "name": "bollywood"
                },
                {
                    "id": 8,
                    "name": "metakai"
                }
            ]
        },
    ];
    this.detailedInfo = this.tracksList[1]
  };
}

export default TrackController;