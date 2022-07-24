function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here
    let distance = 0;
    let days = 0;
    for(let i = 0; i < depth; i++){
        distance += 7;
        days +=1;
        if(distance >= depth){
            break;
        }
        distance -= 2;
    }
    console.log(days);
}

//using do-while
/*
let days = 0;
let height =0;
    
    do {
    	days+=1;
    	height += 7;
    	if (height >= depth) {
    		break;
    	}
    	height -= 2;
    } while (true);
    
    console.log(days);*/
