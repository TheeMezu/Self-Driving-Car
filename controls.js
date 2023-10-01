class Controls {
    constructor(type){
        this.forward = false
        this.left = false
        this.right = false
        this.reverse = false

        switch(type){
            case "KEYS" :
                this.#addKeyboardListeners(); 
                break;
            case "DUMMY" :
                this.forward = true;
                break;
        }
    }

    #addKeyboardListeners(){
        document.onkeydown = (event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
        }

        document.onkeyup = (event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
        }
    }
}
//  # to make sure that it is a private funtion 
//  that can be accessed from anywhere
// onkeydown means when the key is pressed
// onkeyup means when the key is released 
// (event)=> to make it refer back to the object itself when selecting this.