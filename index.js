class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.grades = [];
        this.attendance = new Array(25).fill(undefined);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }

    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
        } else {
            console.log("Оцінка повинна бути від 0 до 100");
        }
    }

    getAverageGrade() {
        const sum = this.grades.reduce((acc, val) => acc + val, 0);
        return sum / this.grades.length || 0;
    }

    present() {
        const index = this.attendance.indexOf(undefined);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log("Не можна відвідати більше 25 занять");
        }
    }

    absent() {
        const index = this.attendance.indexOf(undefined);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log("Не можна пропустити більше 25 занять");
        }
    }

    getAttendance() {
        const presentCount = this.attendance.filter(a => a === true).length;
        const absentCount = this.attendance.filter(a => a === false).length;
        const totalClasses = presentCount + absentCount;
        const attendanceRate = totalClasses > 0 ? presentCount / totalClasses : 0;
        return {
            presentCount,
            absentCount,
            totalClasses,
            attendanceRate
        };
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendanceRate = this.getAttendance().attendanceRate;
        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 0 && attendanceRate > 0) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Іван", "Іванов", 2000);
const student2 = new Student("Марія", "Петрова", 2001);

console.log(student1.getAge());
console.log(student2.getAge());

student1.addGrade(80);
student1.addGrade(90);
student1.addGrade(95);
student2.addGrade(70);
student2.addGrade(85);
student2.addGrade(110);

student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();


console.log(student1.getAverageGrade());
console.log(student2.getAverageGrade());

console.log(student1.getAttendance());
console.log(student2.getAttendance());