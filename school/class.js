var student = require('./student');
var teacher = require('./teacher');

exports.add = function(students=[], teacherName=''){
    teacher.add(teacherName);
    students.forEach((item, index)=>{
        student.add(item);
    });
};
