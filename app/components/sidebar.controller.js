export default class SideBarCtrl {
    constructor($mdSidenav, $state) {
        'ngInject';
        this.mdSideNav = $mdSidenav;
        this.state = $state;
    }

    toggleBar(navId) {
        let vm = this;
        vm.mdSideNav(navId)
            .toggle()
            .then(() => {
                //console.log("Toggle");
            })
    }

    closeBar(navId) {
        let vm = this;
        vm.mdSideNav(navId)
            .close()
            .then(() => {
                //console.log("Toggle");
            })
    }
}