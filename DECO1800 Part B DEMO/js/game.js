    $(document).ready(function() {
             $("#reset, #finish").css("visibility","hidden");
             $.ajax({
                    type: "GET",
                    url: "mysql_connect.php?fun=read",
                    dataType: "text",
                    success: function(result){
                        var rep=JSON.parse(result);
                        var tr="";
                        for(var n=0; n<rep.length;n++){
                            nn=n+1;
                            tr+='<tr>';
                            tr+='<td>'+nn+'</td>';
                            tr+='<td>'+rep[n].name+'</td>';
                            tr+='<td>'+rep[n].score+'</td>';
                            tr+='</tr>';
                        }
                        $("tbody").html(tr);
                    }
                });
            var num, i=1, score=0;
            count=questions.length; 
            answer_question(0);            
            $("#next").on("click", function(e){
                var number=parseInt($("#number").val());
                var num=number-1;
                var value = $("[name=optradio]:checked").val();
                if(value==questions[num].correctAnswer)    score++;
                if(number==count){
                    $("#reset, #finish").css("visibility","visible");
                    $("#next").css("visibility","hidden");
                    $("#score_num").val(score);
                    $(".modal-body h4").html("Your score:"+score);
                    $("#myModal").modal("show");
                }else{
                    answer_question(parseInt(number)); 
                }
               
            });
            $("#save").on("click", function(e){
                var score=$("#score_num").val();
                var name=$("#name").val();
                if($("#name").val()){
                    $.ajax({
							type: "GET",
							url: "mysql_connect.php?fun=insert&name="+name+"&score="+score,
							dataType: "text",
							success: function(result){
                               if(result=="true") $("#myModal").modal("hide");
                            }
                        });
                }
            });
           
            function answer_question (i){
                var a=i+1;
                $(".que_num").html("Question"+a+":");
                 $("#number").val(a);
                 $(".question").html(questions[i].question);
                var html="";
                for(var j=0; j < questions[i].choices.length; j++){
                html+='<div class="radio">';
                html+='<label><input type="radio" name="optradio" value="'+j+'">'+questions[i].choices[j]+'</label>';
                html+='</div>';
                }
                $(".answer").html(html);
            }
    });
