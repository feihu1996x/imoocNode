var Class = require('./class');

exports.add = (classes)=>{
    classes.forEach((item, index)=>{
        var _class = item;
        var teacherName = _class.teacherName;
        var students = _class.students;
        Class.add(students, teacherName);
    });
};