class RailwayForm{
    constructor(givenname, trainno, address){
        console.log("Constructor is called" + " " + givenname + " " + trainno)
        this.givenname = givenname;
        this.trainno = trainno;
        this.address= address;
    }
    submit(){
        alert(this.name + " " + "The form is submitted")
    }
    cancel(){
        alert(this.name + " " + "The form is cancelled")
    }
    fill(givenname, trainno){
        this.name = givenname;
        this.trainNumber=trainno;
    }
}

let harryForm = new RailwayForm()
harryForm.fill('Harry', 123456)

let rohanForm = new RailwayForm()
rohanForm.fill('Rohan', 4567890)

harryForm.submit(); // Output: The form is submitted.
rohanForm.submit(); 
rohanForm.cancel(); // Output: The form is cancelled.