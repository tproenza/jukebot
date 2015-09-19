app.controller('MediaCtrl', function($scope, $http) {
  
  $scope.toppings = [
      { name: 'Clocks - Coldplay', wanted: false },
      { name: 'Yellow - Coldplay', wanted: false },
      { name: 'Politik - Coldplay', wanted: false },
      { name: 'Shiver - Coldplay', wanted: false }
    ];
    // $scope.settings = [
    //   { name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'device:network-wifi', enabled: true },
    //   { name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'device:bluetooth', enabled: false },
    // ];
    // $scope.messages = [
    //   {id: 1, title: "Message A", selected: false},
    //   {id: 2, title: "Message B", selected: true},
    //   {id: 3, title: "Message C", selected: true},
    // ];
    // $scope.people = [
    //   { name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true },
    //   { name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
    //   { name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false }
    // ];
    // $scope.goToPerson = function(person, event) {
    //   $mdDialog.show(
    //     $mdDialog.alert()
    //       .title('Navigating')
    //       .content('Inspect ' + person)
    //       .ariaLabel('Person inspect demo')
    //       .ok('Neat!')
    //       .targetEvent(event)
    //   );
    // };
    // $scope.navigateTo = function(to, event) {
    //   $mdDialog.show(
    //     $mdDialog.alert()
    //       .title('Navigating')
    //       .content('Imagine being taken to ' + to)
    //       .ariaLabel('Navigation demo')
    //       .ok('Neat!')
    //       .targetEvent(event)
    //   );
    // };
    // $scope.doSecondaryAction = function(event) {
    //   $mdDialog.show(
    //     $mdDialog.alert()
    //       .title('Secondary Action')
    //       .content('Secondary actions can be used for one click actions')
    //       .ariaLabel('Secondary click demo')
    //       .ok('Neat!')
    //       .targetEvent(event)
    //   );
    // };
  
});