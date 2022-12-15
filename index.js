<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width , intial-scale=1">
    <title> Simple Caclculator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script type="text/javascript">
        funciton.calculate()
            expression = document.getElementById("expression").value();
            console.log(expression);
            if (expression){
                try{
                answer = eval(expression);
                document.getElementById("expression").value = answer;
                } catch (e){
                    console.log("Bad Expression");
                }
                }
                
        </script>
</head>
    
    

<body>
<div class="container">
    <div class="row">
        <div class="col">

        </div>
        <div class="col">
        <input type="input" class="form-control" id="expression" placeholder="3*5">
        <button id ="calculate" onclick="calculate()" class=""btn btn-primary></button>
        // adding the event to this button. what should happen when you click the button 

        </div>
        <div class="col">
            
        </div>
    </div>
</div>
</body>
</html>