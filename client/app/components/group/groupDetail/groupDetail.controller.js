class GroupDetailController {
  constructor(CurrentGroup, $state, $mdMedia, Store, $stateParams, CurrentStores) {
    "ngInject";
    Object.assign(this, {
      groupData: CurrentGroup.value,
      $state,
      $mdMedia,
      CurrentGroup,
      Store,
      $stateParams,
      CurrentStores
    });
  }

  $onInit() {
    // set currentNavItem on redirect
    this.currentNavItem = this.$state.current.name.replace("group.groupDetail.", "");
    this.CurrentGroup.map.overview = true;

    // refresh all stores, maybe other users added/changed them
    this.Store.listByGroupId(this.$stateParams.groupId).then((data) => {
      this.CurrentStores.set(data);
    });
  }
}

export default GroupDetailController;
