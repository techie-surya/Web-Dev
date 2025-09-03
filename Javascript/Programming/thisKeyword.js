const student = {
    name: "surya",
    age: 20,
    math: 95,
    eng: 93,
    phy: 97,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got average marks = ${avg}`);
    }
}
student.getAvg();