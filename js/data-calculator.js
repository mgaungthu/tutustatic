$( document ).ready(function() {

    Calc = (ele,value) => {
            var totalPoints = 0;    
            $('input[type="range"]').each(function(){
                
                var elementId = $(this).attr('id');
                var elementval = $(this).val();
                 totalPoints += sumPoint(elementId,elementval);
                // console.log(totalPoints);

                // totalPoints += parseInt(value);
                // alert(totalPoints);

              });
              var result = parseFloat(totalPoints).toFixed(0);
              $("#total_data").html(result);
            //   $("#total_percent").val(  Math.floor(result / 1242 * 100));
              $('.text-box').val(Math.floor(result / 100 * 100));
              speedMeter();


    }  

    sumPoint = (elementId,elementval) => {
         switch (elementId) {
                    case 'work-from-home':
                      var value = elementval * 25
                      break;
                    case 'speakers':
                        var value = elementval * 4
                        break;
                    case 'music':
                        var value = elementval * 2
                        break;
                    case 'net-surfing':
                        var value = elementval * 1
                        break;
                    case 'social-media':
                        var value = elementval * 2
                        break;
                    case 'sd-videos':
                        var value = elementval * 5
                        break;
                    case 'hd-videos':
                        var value = elementval * 6
                        break;
                    case 'fourk-videos':
                        var value = elementval * 25
                        break;
                    case 'online-gaming':
                        var value = elementval * 25
                        break;
                    default:
                        var value = 0
                        break;
                }


        return value;
    }


    speedMeter = () => {
        if ($('.text-box').val() == '') {
            $('.circle-inner, .gauge-copy').css({
              'transform' : 'rotate(-181deg)' 
            });
            $('.gauge-copy').css({
              'transform' : 'translate(-50%, -50%) rotate(0deg)'
            });
            $('.percentage').text('0 %');
          } else if($('.text-box').val() >= 0 ) {
            
            var dVal = $('.text-box').val();
            
            // alert(newVal);
            if($('.text-box').val() > 100){
                dVal = 100;
            }
            var newVal = dVal * 1.8 - 181;
            $('.circle-inner, .gauge-copy').css({
              'transform' : 'rotate(' + newVal + 'deg)' 
            });
            $('.gauge-copy').css({
              'transform' : 'translate(-50%, -50%) rotate(' + dVal * 1.8 + 'deg)'
            });
            // $('.percentage').text(dVal + ' %');
          } else {
            $('.percentage').text('Invalid input value');
          }
    }
    
    
    


});

const rangeInputs = document.querySelectorAll('input[type="range"]')
        // const numberInput = document.querySelector('input[type="number"]')
    
        function handleInputChange(e) {
          let target = e.target
          if (e.target.type !== 'range') {
            target = document.getElementById('range')
          } 
          const min = target.min
          const max = target.max
          const val = target.value
          
          target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
        }
    
        rangeInputs.forEach(input => {
          input.addEventListener('input', handleInputChange)
        })
    
        // numberInput.addEventListener('input', handleInputChange)
        
        $("#make_reset").click(function(e){

            e.preventDefault();

            $('input[type="range"]').each(function(index,e){
                    
                // console.log(e.min);
                let target = e
                if (e.type !== 'range') {
                    target = document.getElementById('range')
                } 
                const min = target.min;
                const max = target.max;
                const val = 0;
                $(this).val(0);
                
                target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
                

            });

            $('.text-box').val(Math.floor(0));
            $('#total_data').html("0");
            $("output").html(0)
            speedMeter();
        });