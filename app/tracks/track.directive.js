class TrackDirective {
    constructor($state) {
        this.template = `<md-list-item class="md-3-line" ui-sref="index.trackInfo({page: {{page}},trackId:track.id})">
                        <i class="fa fa-headphones fa-2x" layout-padding aria-hidden="true"></i>
                        <div class="md-list-item-text" layout="column">
                            <h3 style="margin-left:10px" class="md-headline">{{track.title}} ({{track.rating}})</h3>
                            <p>
                            <md-chips ng-show="track.genres.length==0" readonly="true">
                                <md-chip>
                                    No genre
                                </md-chip>
                            </md-chips>   
                            <md-chips ng-show="track.genres.length>0" ng-model="track.genres" readonly="true">
                                <md-chip-template>
                                    {{$chip.name}}
                                </md-chip-template>
                            </md-chips>   </p>
                        </div>
                         <md-divider ng-if="!$last"></md-divider>
                    </md-list-item>
                    `;
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