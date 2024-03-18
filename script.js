class RailwayForm(){
    submit(){
        alert(this.name +"The form is submitted")
    }
    cancel(){
        alert(this.name + "The form is cancelled")
    }
    fill(givenname){
        this.name = givenname;
    }
}

let harryForm = new RailwayForm()
harryForm.fill('Harry')
let rohanForm = new RailwayForm()
rohanForm.fill('Rohan')

harryForm.submit(); // Output: The form is submitted.
rohanForm.submit(); 
rohanForm.cancel(); // Output: The form is cancelled.