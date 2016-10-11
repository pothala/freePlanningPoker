class HomeCtrl {
  constructor(AppConstants, Trial, $q) {
    'ngInject';

    var ctrl = this;

    this.displayed = [];
    this._Trial = Trial;

    this.callServer = function callServer(tableState) {
      console.log('am i called');
      this._Trial = Trial;
      ctrl.isLoading = true;

      var pagination = tableState.pagination;

      var start = pagination.start || 0;
      var number = pagination.number || 10;

      this._Trial.getPage(start, number, tableState).then(
        function (result) {
          console.log('result', result)
          ctrl.displayed = result.data;
          tableState.pagination.numberOfPages = result.numberOfPages;
          ctrl.isLoading = false;
        });
    }
  };
}

export default HomeCtrl;

