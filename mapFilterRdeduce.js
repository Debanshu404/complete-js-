const months =["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const filteredMOnths=months.filter((months,index,array)=>{
    // console.log(months)
return months.toLowerCase().includes('m')
})
// console.log(filteredMOnths);
const students = [
    {
        name: 'Akash',
        age: 21,
    },
    {
        name: 'Adarsh',
        age: 17,
    },
    {
        name: 'Amir',
        age: 18,
    },
    {
        name: 'Raman',
        age: 23,
    },
    {
        name: 'Nidhi',
        age: 16,
    },
]




const filteredStudents=students.filter((students)=>{
    return students.age>=18;
}).map((students)=>{
    return students.name;
})
console.log(filteredStudents)
