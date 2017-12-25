$(document).ready(function(){
	let correct=0;
	let wrong=0;

	$('.bodyContainer').hide();
	$(".head-container").animate({width:"700px"},1000);
	$(".head-container").animate({height:"400px"},1000);
	


	$("#startBtn").on("click", function(){
		$(".btn").hide();
		$('.bodyContainer').show();
		$('.scores').hide();
			
	


		//Timer
		let totalTime =30;
	    let intervalId;
	
		function run() {
      	intervalId = setInterval(decrement, 1000);
    	}
    	function stop(){
    		clearInterval(intervalId);

    	}
    	function decrement()
    	{
    		totalTime--;
    		$('.time').text(totalTime);
    			if(totalTime===0)
    			{
					stop();
					submit();

				}
    	}
			run();

		


		//buttons
		
		const buttonDiv=$(".bodyContainer");
			$(".main-banner").append(buttonDiv);

			function submit(){

				var numberFirstA = $("input:radio[name=firstA]:checked").val();
				var numberSeoncdA = $("input:radio[name=secondA]:checked").val();
				var numberThirdA = $("input:radio[name=thirdA]:checked").val();
				var numberFourthA = $("input:radio[name=fourthA]:checked").val();
				var numberFifhA = $("input:radio[name=fithA]:checked").val();

				const answerArr =[numberFirstA,numberSeoncdA,numberThirdA,numberFourthA,numberFifhA];
	
			for(let i=0; i<answerArr.length;i++)
			{
				if(answerArr[i]==2)
				{
					correct++;
				}
				else
				{
					wrong++;
				}	
			}
			
			$(".currectTotal").text(correct);
			$(".wrongTotal").text(wrong);
			$('.scores').show();
			$('.buttonCotainer').hide();
			$("#submit").hide();

}

			$("#submit").on('click',function(){
				submit();
				$("#submit").hide();
		});
			
			
	});
});

