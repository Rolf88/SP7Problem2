
'use strict';

angular.module('examApp', [])
        .filter('Average', function () {
            return function (grades) {

                for (i = 0; i < grades.length; i++) {
                    var sum;
                    sum = grades[i].grade;
                    var sum1;
                    sum1 += parseInt(sum);
                }

                var avrg = sum1 / 3;
                return avrg;
            };
        })
        .controller('ExamController', ['$scope', function ($scope) {

                var studentsInfo = {};
                studentsInfo.allCourses = [
                    {courseId: 1000, courseName: "Basic Programming"},
                    {courseId: 1001, courseName: "Advanced Programming"},
                    {courseId: 1003, courseName: "DataBase Intro"}];
                studentsInfo.students = [];
                studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
                studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
                studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
                studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});

                $scope.getStudents = studentsInfo.students;
                $scope.getCourses = studentsInfo.allCourses;

            }])
        .directive('myDirective', function () {
            return {
                restrict: 'E',
                templateUrl: 'my-student.html'
            };
        });