'use strict';

module.exports = [
	'$scope',
	'pageService',
	'UserResource',
	function($scope, pageService, UserResource) {
		
/*----------------------------------------------------------------------------*\
|                                                                              |
|                               CONTROLLER BODY                                |
|                                                                              |
\*----------------------------------------------------------------------------*/

pageService.getPageScope().pageTitle = 'List users';

$scope.users = UserResource.retrieveAll();

/*----------------------------------------------------------------------------*\
|                                                                              |
|                                CONTROLLER END                                |
|                                                                              |
\*----------------------------------------------------------------------------*/
		
	}
];
