//display students data

class Student{
    constructor(id,name,age,course,city,email){
        this.name=name;
        this.age=age;
        this.course=course;
        this.city=city;
        this.email=email;
        this.id=id;
        }

    displayInfo(){
        console.log(`Student ID: ${this.id},
            Student Name : ${this.name},
            Age : ${this.age},
            Course : ${this.course},
            City : ${this.city},
            Email : ${this.email}`);
    }
}

//create object
let student1 = new Student(1,"John",20,"B.tech","Delhi","john@gmail.com");
let student2 = new Student(2,"Rahul",21,"B.tech","Mumbai","Rahul@gmail.com");
let student3 = new Student(3,"Rohan",22,"B.tech","Kolkata","Rohan@gmail.com");

student1.displayInfo();
student2.displayInfo();
student3.displayInfo();