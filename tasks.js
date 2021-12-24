
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text ==='exit\n') {
    quit();
  }
  else if (text.trim().split(" ")[0] === "hello") {
    hello(text);
  } else if(text === 'list\n'){
    list();
  }
  else if(text.trim().split(" ")[0] === 'add'){
    add(text);
  }
  else if(text.trim().split(" ")[0] === 'remove'){
    remove(text);
  }
  else if(text.trim().split(" ")[0] === 'edit'){
    edit(text);
  }
  else if(text.trim().split(" ")[0] === 'check'){
   check(text);
  }
  else if(text.trim().split(" ")[0] === 'uncheck'){
    uncheck(text)
  }
  
  else if(text === 'help\n'){
    help();
  }
  
  else{
  
    unknownCommand(text);

  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  
  var helloMessage=text.slice(6);
  if(helloMessage.length > 0){

    console.log(text);

  console.log(`hello ${helloMessage}`);
  }else{/**added the handling empty state  */
    console.log('hello')
    }
}
let tasks = ['eating', 'gaming','spiderman NWH'];
let tasksStatus =[true,false,true];





function list(){
  tasks.forEach((element,index) => {
    if(tasksStatus[index]===true){
      taskString="[✓]";
    }else{
      taskString="[ ]";
    }
   
    console.log(`${index}-${taskString} ${tasks[index]}`)
  
    

  });

}

function add(text){
  
  let addMessage=text.slice(4);
  if(addMessage.length > 0){
  tasks.push(addMessage.trim());
  console.log(addMessage);
  
  }else{

    console.log('Error you need to add a task')
    console.log('remove');
    
  }
}
function remove(text){

  var removeIndex=text.trim().slice(7);
  Number(removeIndex);
  if(removeIndex<0 || removeIndex>tasks.length){
    console.log('error')
  }
 else if(removeIndex> 0){
  tasks.splice(removeIndex, 1);

}
  else{/**added the handling empty state  */
   
    tasks.pop();
    }

}

function edit(text){

 let editId=text.split(" ")[1];
 editId = editId.trim();
 let editValue =text.trim().split(" ")[2];
  if(editId.length > 0 && typeof(editValue) !='undefined'){
 
    tasks[editId] = text.trim().split(" ")[2];
    

  }else{

    console.log('Error you need to edit with a number')
    
  }
}
function check(text){
var taskindex = text.trim().split(" ")[1];
tasksStatus[taskindex] = true;

}

function uncheck(text){
  var taskindex = text.trim().split(" ")[1];
  tasksStatus[taskindex] = false;
  
  }


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * list commands
 *
 * @returns {void}
 */
function help(){
  console.log(`
  1-Hello (it will basically say hello + your name )
  2-quit or exit (well you get the idea
  3-remove with no arguments will remove the last element
  4-remove with the id will remove the element with that index
  5-add will add a element with a certain text you give
  6-check with argument will do a check emoji on the task
  7-unchek with the argument will remove the check emoji on the task )
  `)
}
// The following line starts the application
startApp("Mohammed Haydar")
