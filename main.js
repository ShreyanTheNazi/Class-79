Student_Array = [];

function submit()
{
    var name1 = document.getElementById("student1").value;
    var name2 = document.getElementById("student2").value;
    var name3 = document.getElementById("student3").value;
    var name4 = document.getElementById("student4").value;

    Student_Array.push(name1);
    Student_Array.push(name2);
    Student_Array.push(name3);
    Student_Array.push(name4);

    console.log(Student_Array);
    document.getElementById("display-name").innerHTML = Student_Array;

    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}

function sort()
{
    Student_Array.sort();
    console.log(Student_Array);
    document.getElementById("display-name").innerHTML = Student_Array;
}