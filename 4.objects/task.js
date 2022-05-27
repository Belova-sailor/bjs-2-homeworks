function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
};

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  let marks = this.marks;

  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...manyMarks) {
  let marks = this.marks;

  if (this.marks === undefined) {
    this.marks = manyMarks;
  } else {
    manyMarks.forEach((num) => {
      this.marks.push(num)
    })
  }
};

Student.prototype.getAverage = function () {
  let summa = (this.marks).reduce((sum, elem) => {
    return sum + elem
  }, 0);

  return medium = summa / (this.marks).length
};

Student.prototype.exclude = function (reason) {
  if (this.subject && this.marks) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason
  }
}