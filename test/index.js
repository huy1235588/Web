
var course = [
    { id: 1, name: 'JavaSrcipt', money: '10$', discount: '10%' },
    { id: 2, name: 'Python', money: '20$', discount: '20%' },
    { id: 3, name: 'Html-Css', money: '30$', discount: '30%' },
    { id: 4, name: 'Bootstrap', money: '40$', discount: '40%' },
    { id: 5, name: 'Jquery', money: '50$', discount: '50%' },
];

course.forEach((self) => {
    self.id = Math.pow(self.id, 2);
    console.log(self)
});