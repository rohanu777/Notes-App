angular.module('noteApp', [])
    .controller('NoteController', function ($scope) {
        $scope.notes = [];
        $scope.newNote = '';
        $scope.editingIndex = -1;

        $scope.addNote = function () {
            if ($scope.newNote) {
                $scope.notes.push({ text: $scope.newNote });
                $scope.newNote = ''; // Clear input field
            }
        };

        $scope.editNote = function (index) {
            $scope.newNote = $scope.notes[index].text;
            $scope.editingIndex = index;
        };

        $scope.saveNote = function () {
            if ($scope.newNote && $scope.editingIndex !== -1) {
                $scope.notes[$scope.editingIndex].text = $scope.newNote;
                $scope.newNote = ''; // Clear input field
                $scope.editingIndex = -1;
            }
        };

        $scope.deleteNote = function (index) {
            $scope.notes.splice(index, 1);
        };
    });
