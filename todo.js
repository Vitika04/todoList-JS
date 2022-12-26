document.getElementById('push').onclick = function (){
	if(document.querySelector('#newtask input').value.length == 0){
		alert("Please enter a task...")
	}
	else{
		document.querySelector('#tasks').innerHTML += `
		    <div class="task-list">
			   <span id="taskname">
			     ${document.querySelector('#newtask input').value}
				</span>
				<button class="delete">
				  <i class="fa fa-trash" aria-hidden="true"></i>
				</button>
			</div>
		`;

		let current_tasks = document.querySelectorAll(".delete");
		for(var i=0; i<current_tasks.length; i++){
			current_tasks[i].onclick = function(){
				this.parentNode.remove();
			}
		}
	}
}



