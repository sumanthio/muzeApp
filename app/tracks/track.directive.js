class TrackDirective {
    constructor($state) {
        this.template = `<md-list-item class="md-3-line" ui-sref="track-info({page: {{page}},trackId:track.id})">
                        <i class="fa fa-headphones fa-2x" layout-padding aria-hidden="true"></i>
                        <div class="md-list-item-text" layout="column">
                            <h3>{{track.title}}</h3>
                            <md-chips ng-model="track.genres" readonly="true">
                                <md-chip-template>
                                    {{$chip.name}}
                                </md-chip-template>
                            </md-chips>   
                            <p>{{track.rating}}</p>
                        </div>
                    </md-list-item>`;
        this.restrict = 'E';
        this.transclude = true,
            this.controller = TrackDirectiveCtrl;
        this.scope = {
            track: "=trackInfo",
            page: "=pageNumber"
        };
    }
    link(scope, elem, attr) {
    }
}

class TrackDirectiveCtrl {
    constructor() {
        'ngInject'
    }

    newGenre(genre) {
        return {
            name: genre,
            id: 'unknown'
        };
    };
}


export default TrackDirective;