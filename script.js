class RailwayForm{
    constructor(givenname, trainno, address, time){
        console.log("Constructor is called" + " " + givenname + " " + trainno)
        this.givenname = givenname;
        this.trainno = trainno;
        this.address = address;
        this.time=time;
    }
    submit(){
        alert(this.name + " " + "The form is submitted for train number" + " " + this.trainno);
    }
    cancel(){
        alert(this.name + " " + "The form is cancelled for train number" + " " + this.trainno)
        this.trainno = 0
    }
    fill(givenname, trainno){
        this.name = givenname;
        this.trainNumber = trainno;
        this.address = address;
        this.time = time
    }
}

// let harryForm = new RailwayForm()
// harryForm.fill('Harry', 123456)

// let rohanForm = new RailwayForm()
// rohanForm.fill('Rohan', 4567890)

// harryForm.submit(); 
// rohanForm.submit(); 
// rohanForm.cancel(); 