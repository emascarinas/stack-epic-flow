"use strict";angular.module("epicoverflowApp",["ngResource","ngRoute","ngAnimate","ui.bootstrap","angular-loading-bar"]).constant("config",{clientId:"4669",clientSecret:"xSxTseAuN7MJjpmoz8FgrQ((",key:"kbHcPnT0zVHBHC0rFcfyFg((",scope:"write_access",redirectUri:"http://emascarinas.github.io/stack-epic-flow/",oathUrl:"https://stackexchange.com/oauth",curlUrl:"http://dunggoanan.com/curl.php",oathPostUrl:"https://stackexchange.com/oauth/access_token",apiUrl:"https://api.stackexchange.com/2.2/",site:"stackoverflow",itemsPerPage:20,itemsSmallPerPage:5,pageMaxSize:5,filterAddTotal:"!9YdnSQVoS",userBase:"users",questionBase:"questions",meBase:"me",tagBase:"tags",answerBase:"answers"}).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html"}).when("/questions",{templateUrl:"views/questions.html",controller:"QuestionsCtrl"}).when("/auth",{controller:"AuthCtrl"}).when("/question",{templateUrl:"views/question.html"}).otherwise({redirectTo:"/"})}]),angular.module("epicoverflowApp").controller("MainCtrl",["$scope","session","config","user","$routeParams","$location","util",function(a,b,c,d,e,f,g){function h(a){d.getProfile(a).success(function(a){b.setProfile(a.items[0])}).error(function(a){g.showError(a)})}function i(){void 0===b.getProfile()?d.getProfile().success(function(a){b.setProfile(a.items[0])}).error(function(a){g.showError(a)}):h(b.getProfile().user_id)}var j=new RegExp("code=(.*)#/"),k=f.absUrl().match(j);if(a.session=b,void 0!==e.id)h(e.id);else{if(void 0===b.getProfile()&&null===k){var l=c.oathUrl+"?scope="+c.scope+"&client_id="+c.clientId+"&redirect_uri="+c.redirectUri;window.location.replace(l)}null!==k&&b.setCode(k[1]),void 0===b.getProfile()?d.getCodePost().success(function(a){b.setAccessToken(a.split("&")[0].split("=")[1]),i()}).error(function(a){g.showError(a)}):i()}}]),angular.module("epicoverflowApp").controller("QuestionsCtrl",["$scope","question","config","$routeParams","util",function(a,b,c,d,e){function f(){b.getQuestions(a.currentPage,a.currentSort,a.currentOrder,d.tag).success(function(b){a.response=b,a.totalItems=b.total}).error(function(a){e.showError(a)})}a.currentPage=1,a.currentOrder="",a.currentSort="",a.tagged=void 0===d.tag?"":d.tag,a.maxSize=c.pageMaxSize,a.itemsPerPage=c.itemsPerPage,a.boundaryLinks=!0,a.rotate=!1,a.orderList=[{display:"Default",value:""},{display:"Desc",value:"desc"},{display:"Asc",value:"asc"}],a.sortList=[{display:"Default",value:""},{display:"Activity",value:"activity"},{display:"Votes",value:"votes"},{display:"Creation",value:"creation"},{display:"Hot",value:"hot"},{display:"Week",value:"week"},{display:"Month",value:"month"}],a.pageChanged=function(){f()},a.setSort=function(b){a.currentSort=b,f()},a.setOrder=function(b){a.currentOrder=b,f()},f()}]),angular.module("epicoverflowApp").controller("BadgeCtrl",["$scope","user","config","util","$timeout",function(a,b,c,d,e){function f(){b.getBadges(a.currentPage).success(function(b){a.response=b,a.totalItems=b.total}).error(function(a){d.showError(a)})}a.currentPage=1,a.maxSize=c.pageMaxSize,a.itemsPerPage=c.itemsPerPage,a.boundaryLinks=!0,a.rotate=!1,a.fetch=function(){e(function(){f()})},a.pageChanged=function(){f()}}]),angular.module("epicoverflowApp").controller("TimelineCtrl",["$scope","user","config","util","$timeout",function(a,b,c,d,e){function f(){b.getTimeline(a.currentPage).success(function(b){a.response=b,a.totalItems=b.total}).error(function(a){d.showError(a)})}a.currentPage=1,a.maxSize=c.pageMaxSize,a.itemsPerPage=c.itemsPerPage,a.boundaryLinks=!0,a.rotate=!1,a.fetch=function(){e(function(){f()})},a.pageChanged=function(){f()}}]),angular.module("epicoverflowApp").controller("FavoriteCtrl",["$scope","user","config","util","$timeout",function(a,b,c,d,e){function f(){b.getFavorites(a.currentPage).success(function(b){a.response=b,a.totalItems=b.total}).error(function(a){d.showError(a)})}a.currentPage=1,a.maxSize=c.pageMaxSize,a.itemsPerPage=c.itemsPerPage,a.boundaryLinks=!0,a.rotate=!1,a.fetch=function(){e(function(){f()})},a.pageChanged=function(){f()}}]),angular.module("epicoverflowApp").controller("TagCtrl",["$scope","user","config","util","$timeout",function(a,b,c,d,e){function f(){b.getTags(a.currentPage).success(function(b){a.response=b,a.totalItems=b.total}).error(function(a){d.showError(a)})}a.currentPage=1,a.maxSize=c.pageMaxSize,a.itemsPerPage=c.itemsPerPage,a.fetch=function(){e(function(){f()})},a.pageChanged=function(){f()}}]),angular.module("epicoverflowApp").controller("ModalInstanceCtrl",["$scope","$modalInstance","error",function(a,b,c){a.error=c,a.ok=function(){"access_token_required"===c.error_name&&(window.location="/emem/"),b.close()}}]),angular.module("epicoverflowApp").controller("QuestionCtrl",["$scope","question","util","config",function(a,b,c,d){function e(){b.getComments(a.currentPage,d.itemsSmallPerPage).success(function(b){a.response=b,a.totalItems=b.total}).error(function(a){c.showError(a)})}a.currentPage=1,a.maxSize=d.pageMaxSize,a.itemsPerPage=d.itemsSmallPerPage,b.getQuestion().success(function(d){a.questionResponse=d.items[0],a.flag=function(d){d?b.unFlagFavorite().success(function(b){a.questionResponse.favorited=b.items[0].favorited}).error(function(a){c.showError(a)}):b.flagFavorite().success(function(b){a.questionResponse.favorited=b.items[0].favorited}).error(function(a){c.showError(a)})},e()}).error(function(a){c.showError(a)}),a.goBack=function(){window.history.back()},a.pageChanged=function(){e()}}]),angular.module("epicoverflowApp").controller("AnswersCtrl",["$scope","question","config","util",function(a,b,c,d){function e(){b.getAnswers(a.currentPage).success(function(b){a.response=b,a.totalItems=b.total}).error(function(a){d.showError(a)})}a.currentPage=1,a.maxSize=c.pageMaxSize,a.itemsPerPage=c.itemsPerPage,a.boundaryLinks=!0,a.rotate=!1,a.pageChanged=function(){e()},e()}]),angular.module("epicoverflowApp").controller("AnswerCommentsCtrl",["$scope","question","config","util","$timeout",function(a,b,c,d,e){function f(){e(function(){b.getAnswerComments(a.answer.answer_id,a.currentPage,c.itemsSmallPerPage).success(function(b){a.response=b,a.totalItems=b.total}).error(function(a){d.showError(a)})})}a.currentPage=1,a.maxSize=c.pageMaxSize,a.itemsPerPage=c.itemsSmallPerPage,a.pageChanged=function(){f()},f()}]),angular.module("epicoverflowApp").controller("MenuCtrl",["$scope","$location",function(a,b){a.goHome=function(){b.path("#/")},a.goSearch=function(){b.search("tag",a.tag),b.path("questions")}}]),angular.module("epicoverflowApp").controller("QuestionTagsCtrl",["$scope","question","$routeParams","util","config",function(a,b,c,d,e){function f(){b.getQuestionTags(a.currentPage,c.tag).success(function(b){a.response=b,a.totalItems=b.total}).error(function(a){d.showError(a)})}a.maxSize=2,a.itemsPerPage=e.itemsPerPage,a.boundaryLinks=!1,a.rotate=!0,a.pageChanged=function(){f()},f()}]),angular.module("epicoverflowApp").factory("session",function(){var a,b,c,d;return{getProfile:function(){return b},setProfile:function(a){b=a},getCode:function(){return a},setCode:function(b){a=b},getAccessToken:function(){return c},setAccessToken:function(a){c=a},getQuestionId:function(){return d},setQuestionId:function(a){d=a}}}),angular.module("epicoverflowApp").factory("question",["$http","config","util","$routeParams",function(a,b,c,d){return{getQuestions:function(d,e,f,g){var h={};h.page=d,void 0!==g&&(h.tagged=g),""!==e&&(h.sort=e),""!==f&&(h.order=f);var i=c.getParam(b.questionBase,"?",h);return a.get(i)},getQuestion:function(){var e;return e=c.isAuth()?c.getParam(b.questionBase,d.id+"?",{filter:"!b0OfMv1dP-ecRx"}):c.getParam(b.questionBase,d.id+"?",{filter:"!-*f(6rkvDeNh"}),a.get(e)},getComments:function(e,f){var g=c.getParam(b.questionBase,d.id+"/comments?",{pagesize:f,page:e,order:"asc",filter:"!-*f(6sexcV94"});return a.get(g)},getAnswers:function(e){var f=c.getParam(b.questionBase,d.id+"/answers?",{page:e,order:"desc",sort:"votes",filter:"!-*f(6tIDgtXe"});return a.get(f)},getQuestionTags:function(d,e){var f;return f=void 0!==e?c.getParam(b.tagBase,"/"+e+"/related?",{page:d,filter:b.filterAddTotal}):c.getParam(b.tagBase,"?",{page:d,filter:b.filterAddTotal}),a.get(f)},getAnswerComments:function(d,e,f){var g=c.getParam(b.answerBase,d+"/comments?",{pagesize:f,page:e,order:"asc",filter:"!-*f(6tIDgtXe"});return a.get(g)},flagFavorite:function(){return c.postAuth(b.questionBase+"/"+d.id+"/favorite",{filter:"!9YdnS9*GS"})},unFlagFavorite:function(){return c.postAuth(b.questionBase+"/"+d.id+"/favorite/undo",{filter:"!9YdnS9*GS"})}}}]),angular.module("epicoverflowApp").factory("user",["$http","config","session","util",function(a,b,c,d){return{getCodePost:function(){var d=b.oathPostUrl,e="client_id="+b.clientId+"&client_secret="+b.clientSecret+"&code="+c.getCode()+"&redirect_uri="+b.redirectUri;return a.post(b.curlUrl,{url:d,param:e})},getProfile:function(c){var e=d.getParam(void 0===c?b.meBase:b.userBase,"?",{},c);return a.get(e)},getBadges:function(c){var e=d.getParam(b.userBase,"/badges?",{page:c,sort:"rank"});return a.get(e)},getTimeline:function(c){var e=d.getParam(b.userBase,"/timeline?",{page:c});return a.get(e)},getFavorites:function(c){var e=d.getParam(b.userBase,"/favorites?",{page:c});return a.get(e)},getTags:function(c){var e=d.getParam(b.userBase,"/tags?",{page:c});return a.get(e)}}}]),angular.module("epicoverflowApp").service("util",["config","$modal","session","$http",function(a,b,c,d){var e=this;this.getParam=function(b,d,f,g){var h=a.apiUrl+b+("me"===b?"":"/");switch(b){case"users":var i=void 0===g?c.getProfile().user_id:g;h+=i+d;break;default:h+=d}return!0===e.isAuth()&&(f.key=a.key,f.access_token=c.getAccessToken()),f.pagesize=void 0===f.pagesize?a.itemsPerPage:f.pagesize,f.filter=void 0===f.filter?a.filterAddTotal:f.filter,f.page=void 0===f.page?1:f.page,f.site=a.site,h+$.param(f)},this.postAuth=function(b,e){return e.key=a.key,e.access_token=c.getAccessToken(),e.site=a.site,d.post(a.apiUrl+b,$.param(e),{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},this.showError=function(a){b.open({templateUrl:"erroModal.html",controller:"ModalInstanceCtrl",size:"sm",resolve:{error:function(){return a}}})},this.isAuth=function(){return void 0!==c.getAccessToken()}}]),angular.module("epicoverflowApp").filter("bzSanitize",["$sce",function(a){return function(b){return a.trustAsHtml(b)}}]),angular.module("epicoverflowApp").directive("bzComments",function(){return{templateUrl:"views/comments.html",restrict:"E",transclude:!0}}),angular.module("epicoverflowApp").directive("bzPaginator",function(){return{templateUrl:"views/paginator.html",restrict:"E"}}),angular.module("epicoverflowApp").directive("bzTags",function(){return{templateUrl:"views/tags.html",restrict:"E",transclude:!0}});