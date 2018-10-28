// app.controller('MainController', ['$scope', '$http', function($scope, $http) {
//   	$scope.todo = {
//   		title: "Things I Need to Do",
//   		list: ["Clean my room", "Go to the store", "Study Cracking the Coding Interview"]
//   	}
//
//   	$scope.books = {
//   		title: "Books I Need to Buy",
//   		list: []
//   	}
//
//     function hasOnlyNumbers(item) {
//       return /^[0-9]*$/.test(item)
//     }
//
//     $scope.addItem = function(itemList, item) {
//       // ISBN : 10 or 13 length and consisdt of only numbers
//       if ((item.length == 10 || item.length == 13) && hasOnlyNumbers(item)) {
//         console.log("ISBN");
//         $http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + item).success(function(data) {
//           itemList.push("Title: " + data.items[0].volumeInfo.title + " // Author(s):" + data.items[0].volumeInfo.authors)
//         })
//       } else {
//         console.log("Not an ISBN")
//         itemList.push(item);
//       }
//   	}
//
// }]);

app.controller('searchctrl', function($scope, $http) {
    console.log("hi");
    $scope.getSearchResult = function() {

        $http.get('http://127.0.0.1:8080/getData?searchkey='+$scope.searchitem).then(function(data)
            {

                console.log(data.data);
                $scope.searchDescription = data.data.itemListElement[0].result.detailedDescription.articleBody;
                $scope.description = "Description:";
                $scope.wiki = data.data.itemListElement[0].result.detailedDescription.url;
                $scope.wikiheading = "Explore " + $scope.searchDestination + " wiki in the following link";
                $scope.searchimage = data.data.itemListElement[0].result.image.contentUrl;
                //document.getElementById("errormsg").innerHTML ="";



            },function(err)
            {
                //console.log(err);
            }
        )
    }
})