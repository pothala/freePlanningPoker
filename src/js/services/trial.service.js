export default class Trial {
  constructor(AppConstants, $http, $q, $filter) {
    'ngInject';

    this._AppConstants = AppConstants;
    // this._$resource = $resource;
    this._$http = $http;
    this._$q = $q;
    this._$filter = $filter;
  }

  getPage(start, number, params) {
    return this._$http({
      url: this._AppConstants.api,
      method: 'GET'
    }).then(
      (res) => {
        var deferred = this._$q.defer();

        this.myItems = res.data.results;

        var filtered = params.search.predicateObject
          ? $filter('filter')(this.myItems, params.search.predicateObject) :
            this.myItems;

        if (params.sort.predicate) {
          filtered = this._$filter('orderBy')(
            filtered, params.sort.predicate, params.sort.reverse);
        }

        var result = filtered.slice(start, start + number);

        deferred.resolve({
          data: result,
          numberOfPages: Math.ceil(filtered.length / number)
        });

        return deferred.promise;
      }
    )
  }
}
