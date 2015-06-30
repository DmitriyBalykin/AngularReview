    var app = angular.module("imageApplication", []);

    app.controller("ImageController", [ImageController]);

    function ImageController() {
        this.images = [
            'Content/images/1.jpg',
            'Content/images/2.jpg',
            'Content/images/3.jpg',
            'Content/images/4.jpg',
            'Content/images/5.jpg',
            'Content/images/6.jpg',
            'Content/images/7.jpg',
            'Content/images/8.jpg'
        ];

    };